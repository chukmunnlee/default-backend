const morgan = require('morgan')
const express = require('express')

const PORT = parseInt(process.env.PORT || process.env.APP_PORT) || 3000

const app = express();

app.disable('x-powered-by')

app.get('/healthz', (req, resp) => {
	resp.status(200)
		.type('application/json')
		.json({ timestamp: (new Date()).getTime() })
})

app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => {
	console.info(`Application started on port ${PORT} at ${new Date()}`)
})

