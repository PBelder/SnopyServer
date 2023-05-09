const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = [
    { string: 'hello kaka', number: 41 },
    { string: 'hello pipi', number: 42 },
    { string: 'hello whatever', number: 43 }
  ];

  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
