const api = require("./api");
const restify = require("restify");
const server = restify.createServer();

server.get("/exchange", async (_, res, __) => {
  try {
    const { data } = await api.get();

    const highValue = parseFloat(data[0]?.high);
    const lowValue = parseFloat(data[0]?.low);
    const yesterdayHighValue = parseFloat(data[1]?.high);
    const yesterdayLowValue = parseFloat(data[1]?.low);
    const valueCurrentDay = (parseFloat(highValue) + parseFloat(lowValue)) / 2;
    const valueYesterDay = (parseFloat(yesterdayHighValue) + parseFloat(yesterdayLowValue)) / 2;
    const valueLastTwoDays = (parseFloat(valueCurrentDay) + parseFloat(valueYesterDay)) / 2;
    res.json({
      nome: `${data[0]?.code}-${data[0]?.codein}`,
      highValue: `R$ ${highValue.toFixed(2)}`,
      lowValue: `R$ ${lowValue.toFixed(2)}`,
      bid: `R$ ${parseFloat(data[0]?.bid).toFixed(2)}`,
      averageCurrentDay: `R$ ${valueCurrentDay.toFixed(2)}`,
      averageLastTwoDays: `R$ ${valueLastTwoDays.toFixed(2)}`,
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

server.listen(8080, "localhost", () => {
  console.log("Server is's running at localhost:8080/exchange");
});
