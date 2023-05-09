const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = [
    { string: 'hello world', number: 42 },
    { string: 'hello world', number: 42 },
    { string: 'hello world', number: 42 }
  ];
  
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
