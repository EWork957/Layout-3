const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


// MIDDLEWARE
app.use(cors());

// ROUTE HANDLER
app.post('/webhook', (req, res) => {
  console.log('Received POST request to /webhook');
  console.log('Request body:', req.body); 
  const response = { response: 'This is a sample response from the server.' };
  res.status(200).json(response);
});
// START SERVER
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});