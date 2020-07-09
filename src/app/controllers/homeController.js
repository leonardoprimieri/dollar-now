module.exports = {
  index(req, res) {
    const request = require("request");
    const cheerio = require("cheerio");

    const URL = "https://www.remessaonline.com.br/cotacao/cotacao-dolar";

    request(URL, (error, response, html) => {
      if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);

        let dolarPrice = $(".style__Text-sc-27fg4f-2").text();
        dolarPrice = dolarPrice.slice(0, 4);

        console.log(dolarPrice);

        return res.render("index", { dolarPrice });
      }
    });
  },
};
