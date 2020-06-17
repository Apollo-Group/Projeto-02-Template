const request = require("supertest");

const app = require("../src/app");

test("Should list all students, at least one student in an array.", async () => {
  const response = await request(app).get("/students");

  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(1);
});

test("Should create a new student", async () => {
  const response = await request(app).post("/students");

  expect(response.status).toBe(201);
  expect(response.body).toHaveProperty("nome");
  expect(response.body).toHaveProperty("sobrenome");
  expect(response.body).toHaveProperty("idade");
  expect(response.body).toHaveProperty("endereco");
  expect(response.body).toHaveProperty("serie");
});

test("Should update a student's name to 'Editado'", async () => {
  const response = await request(app).put("/students/1");

  expect(response.status).toBe(200);
  expect(response.body.nome).toBe("Editado");
  expect(response.body).toHaveProperty("sobrenome");
  expect(response.body).toHaveProperty("idade");
  expect(response.body).toHaveProperty("endereco");
  expect(response.body).toHaveProperty("serie");
});

test("Should delete a student", async () => {
  const response = await request(app).delete("/students/1");

  expect(response.status).toBe(204);
});
