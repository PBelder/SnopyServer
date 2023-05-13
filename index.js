//https://snopy.cyclic.app

const express = require('express');
const app = express();
const cheerio = require('cheerio');
const https = require('https');

const url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies";


app.get('/', (req, res) => {
 https.get(url, function(response) {
    let html = '';
    response.on('data', function(chunk) {
      html += chunk;
    });
    response.on('end', function() {
      const $ = cheerio.load(html);
      const table = $('table.wikitable.sortable:first');
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
      res.json(companies);
    });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


