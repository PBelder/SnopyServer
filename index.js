//https://quiet-dawn-06541.herokuapp.com
//https://dashboard.heroku.com/apps/quiet-dawn-06541/resources

const express = require('express');
const app = express();
const cheerio = require('cheerio');
const https = require('https');

const url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies";


app.get('/', (req, res) => {
  
  const data = [
    { string: 'hello kaka', number: 41 },
    { string: 'hello pipi', number: 42 },
    { string: 'hello whatever', number: 43 }
  ];

 https.get(url, function(response) {
    let html = '';
    response.on('data', function(chunk) {
      html += chunk;
    });
    response.on('end', function() {
      const $ = cheerio.load(html);
      const table = $('table.wikitable.sortable');
      const rows = table.find('tbody > tr');
      const companies = [];

      rows.each(function(i, row) {
        if (i > 0) { // skip header row
          const columns = $(row).find('td');
          const ticker = $(columns[0]).text().trim();
          const name = $(columns[1]).text().trim();
          const sector = $(columns[3]).text().trim();
          companies.push({ ticker, name, sector });
        }
      });

      const sp500 = JSON.stringify(companies);
      console.log(sp500);
      res.json(sp500);
    });
  });
  //res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


