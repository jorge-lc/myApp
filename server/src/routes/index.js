const { Router } = require('express');
const router = Router(); 

router.get('/', (req, res) => { //esto devuelve una respuesta por la UI, podemos enviar HTML o JSON
    res.json({"Titulo" : "Hello World"});
});

router.get('/test', (req, res) => { //esto devuelve una respuesta por la UI, podemos enviar HTML o JSON
    const data = {
        "name" : "Jorge",
        "web" : "github.com/Shinicba"
    }
    res.json(data);
});

module.exports = router;