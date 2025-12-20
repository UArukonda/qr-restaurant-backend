const request = require("supertest");
const app = require("../src/app");

describe("Restaurants API", () => {
  describe("GET /restaurants", () => {
    test("GET /restaurants should return a list of restaurants", async () => {
      const res = await request(app).get("/restaurants");
      console.log(res);

      expect(res.statusCode).toBe(200);
    });
  });
});
