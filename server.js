require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Página inicial (igual DrakeBot)
app.get('/', (req, res) => {
  res.send(`
    <h1>🔥 API LM Modding</h1>
    <p>Status: Online ✅</p>
    <h3>Endpoints:</h3>
    <ul>
      <li>/api/teste</li>
      <li>/api/instagram?url=LINK</li>
    </ul>
  `);
});

// API teste
app.get('/api/teste', (req, res) => {
  res.json({ status: "ok", mensagem: "API funcionando 🔥" });
});

// API Instagram (exemplo)
app.get('/api/instagram', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.json({ erro: "Coloque ?url=" });
  }

  // SIMULAÇÃO (depois você coloca API real)
  res.json({
    status: "ok",
    link: url,
    download: "https://exemplo.com/video.mp4"
  });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});