var express = require("express")

var app = express()

app.get("/", function(req, res) {
	res.status(200).send({})
})

if (require.main === module)
{
	var server = app.listen(3000, function() {
		console.log("Server started")
	})
}

module.exports = app
