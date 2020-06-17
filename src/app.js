const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => res.status(200).send());

app.get("/students", (req, res) => {
  try {
    // Escreva sua resposta
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.post("/students", async (req, res) => {
  try {
    // Escreva sua resposta
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.put("/students/1", async (req, res) => {
  try {
    // Escreva sua resposta
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.delete("/students/1", (req, res) => {
  try {
    // Escreva apenas o que a rota retorna, considerando que a rota retorna o
    //  status e nāo retorna nenhum dado.
    // Escreva sua resposta
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = app;
