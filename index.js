//https://quiet-dawn-06541.herokuapp.com
//https://dashboard.heroku.com/apps/quiet-dawn-06541/resources

 //https://gold-jolly-dog.cyclic.app
 //https://snopy.cyclic.app

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = [
    { string: 'hello kaka', number: 51 },
    { string: 'hello pipi', number: 52 },
    { string: 'hello whatever', number: 53 }
  ];

  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


