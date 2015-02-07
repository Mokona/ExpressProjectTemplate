var request = require("supertest")
var app = require("../app")

describe("Express", function()
{
	it("answers 200 to a get /", function(done) {
		request(app)
			.get("/")
			.expect(200, done)
	})

	it("answers 404 to a get /dummy", function(done) {
		request(app)
			.get("/dummy")
			.expect(404, done)
	})
})
