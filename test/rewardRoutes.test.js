const request = require("supertest");
const app = require("../src/app");

describe("POST /reward", () => {
  test("it should response with the reward", async () => {
    const req = await request(app).post("/reward").send({ amount: 51 });
    expect(req.body.data).toBe(1);
    expect(req.statusCode).toBe(200);
  });
});

describe("POST /reward", () => {
  test("it should response with the reward", async () => {
    const req = await request(app).post("/reward").send({ amount: 50 });
    expect(req.body.data).toBe(null);
    expect(req.statusCode).toBe(200);
  });
});
describe("POST /reward", () => {
  test("it should response with the reward", async () => {
    const req = await request(app).post("/reward").send({ amount: 101 });
    expect(req.body.data).toBe(52);
    expect(req.statusCode).toBe(200);
  });
});

describe("POST /reward", () => {
  test("it should response with the reward", async () => {
    const req = await request(app).post("/reward").send({ amount: 100 });
    expect(req.body.data).toBe(50);
    expect(req.statusCode).toBe(200);
  });
});
