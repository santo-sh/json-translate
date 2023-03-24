const express = require("express");
require("dotenv").config();
const TJO = require("translate-json-object")();

const PORT = process.env.PORT || 300;

const app = express();
app.use(express.json());

TJO.init({
  googleApiKey: "AIzaSyBmaOR9JPDGd2Zj-W78fc96fPabDqsT0VI",
});

app.get("/", async (req, res) => {
  try {
    const { json, lang } = req.body;
    const result = await TJO.translate(json, lang);
    console.log(result);
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message || "Something went wrong",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
