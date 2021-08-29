const morgan = require('morgan')
const express = require('express')

const PORT = parseInt(process.env.PORT || process.env.APP_PORT) || 3000

const app = express();

app.disable('x-powered-by')

app.use(morgan('combined'))

app.get('/healthz', (req, resp) => {
	resp.status(200)
		.type('application/json')
		.json({ timestamp: (new Date()).getTime() })
})

app.get([ '/', '/index.html' ], (req, resp) => {
	resp.status(404).type('text/html').sendFile(__dirname + '/public/index.html')
})

app.use(express.static(__dirname + '/public'))

app.use((req, resp) => {
	resp.status(404).type('text/html').sendFile(__dirname + '/public/index.html')
})

app.listen(PORT, () => {
	console.info(`Application started on port ${PORT} at ${new Date()}`)
})

