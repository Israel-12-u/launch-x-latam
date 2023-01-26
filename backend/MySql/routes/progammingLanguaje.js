const express = require('express');
const router = express.Router();
const programmingLanguaje = require('../services/programmingLanguaje');

router.get('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguaje.getMultiple(req.query.page));
    } catch (error) {
        console.error("Error => " + error.message);
        next(error);
    }
});

router.post('/', async function (req, res, next) {
    try {
        res.json(await programmingLanguaje.create(req.body));
    } catch (error) {
        console.error("Error => " + error.message);
        next(error);
    }
});

router.put("/", async function (req, res, next) {
    try {
        res.json(await programmingLanguaje.update(req.body.id, req.body));
    } catch (error) {
        console.error("Error => " + error.message);
        next(error);
    }
})

module.exports = router;