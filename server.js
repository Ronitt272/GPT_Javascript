const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Endpoint to receive the generated text from Python
app.post('/receive', (req, res) => {
  const generatedText = req.body.generated_text;
  console.log(`Received text: ${generatedText}`);
  // Handle the received text (e.g., display it on a webpage)
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
