const request = require("supertest");
const mongoose = require("mongoose")
const app = require("../app");

beforeEach((done) => {
	mongoose.connect(
		"mongodb://root:example@localhost:27017/",
		{ useNewUrlParser: true,
            dbName: "isw3_db" },
		() => done()
	)
})

afterEach((done) => {
	mongoose.connection.db.dropDatabase(() => {
		mongoose.connection.close(() => done())
	})
})

describe("API ENDPOINT TEST", () => {
    test("/GET ALL TODO", (done) => {
      request(app)
        .get("/api/todo")
        .expect("Content-Type", /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });

    });
});