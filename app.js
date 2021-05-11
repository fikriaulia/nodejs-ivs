const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

const port = 5000

app.post('/', (req, res) => {
  	res.send('Success!!')
	console.log(Date.now())
	console.log(req.body)
})

app.listen(port, () => {
  	console.log(`Example app listening at http://localhost:${port}`)
})
