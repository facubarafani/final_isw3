const request = require("supertest");
const mongoose = require("mongoose")
const app = require("../app");

const db = require("../models");
const ToDo = db.todo;

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
        .expect("Content-Type", /json/) // Ensure service returns JSON format.
        .expect(200) // Ensure service call returns status code 200 (OK).
        .end((err, res) => {
          if (err) return done(err);
          return done();
        });

    });

    test("/POST TODO", async () => {
        const payload = {body: 'This is a test', title: 'This is a test'};

        const res = await request(app)
            .post('/api/todo')
            .send(payload)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        expect(200) // Ensure service call returns status code 200 (OK).
        expect(res.body.title).toBe('This is a test');
        expect(res.body._id.length).toEqual(24); // Validate new ToDo object id has 24 characters (https://www.mongodb.com/docs/manual/reference/method/ObjectId/#:~:text=A%2024%20character%20hexadecimal%20string%20value%20for%20the%20new%20ObjectId.&text=Optional.,-The%20integer%20value)
    })
});