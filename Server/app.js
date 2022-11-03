const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, './build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, './build'));
});

 app.get('/AdarCv.pdf', (req, res) => {
   res.download("./AdarCv.pdf");
});

const wakeAllSites = () =>{
   const axios = require('axios').default;
   axios.get("https://vacations.onrender.com/");
   axios.get("https://adarmarket.onrender.com/");
   axios.get("https://gamerank.onrender.com/");
}

app.listen(port, () => {
   wakeAllSites();
   console.log(`Server is up on port ${port}!`);
});