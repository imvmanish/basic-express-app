const express = require('express');
const app = express();
const format = require('date-format');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./social/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.status(200).send("Social Count")
});

app.get("/api/v1/instagram",(req,res) => {
    const instaSocial = {
        username: "imvmanish19",
        followers: 2000,
        following: 300,
        date: format.asString("hh:mm:ss",new Date())
    };
    res.status(200).json({instaSocial});
});

app.get("/api/v1/facebook",(req,res) => {
    const fbSocial = {
        id: "imvmanish19",
        followers: 2000,
        following: 300,
        date: format.asString("dd/MM hh:mm:ss",new Date())
    };
    res.status(200).json({fbSocial});
});

app.get('/api/v1/:id',(req,res) => {
    res.status(200).json({params: req.params.id});
});

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`);
});
