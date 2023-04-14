const request = require("supertest");
const app = require("./index.js");
const jwt = require("jsonwebtoken");

const secretKeys = "tk";

describe("GET /gettoken/:name", () => {
  test("should return a JWT token", async () => {
    const res = await request(app).get("/gettoken/tk").expect(200);
    console.log(res.text);
    const decoded = jwt.verify(res.text, secretKeys);
    expect(decoded.user).toBe("tk");
  });
});

/* test("Querry", async () => {
    const response = await request(app).get("/linear");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
        "[{\"id\":1,\"alldata\":\"{\\\"numgen\\\":9,\\\"x\\\":[10,15,20,30,40,50,60,70,80],\\\"y\\\":[5,9,15,18,22,30,35,38,43]}\",\"num\":9}]"
    );
  }); */
  