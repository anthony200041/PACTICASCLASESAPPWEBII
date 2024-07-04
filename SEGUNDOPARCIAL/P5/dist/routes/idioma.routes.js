"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const idioma_controller_1 = require("../controllers/idioma.controller");
const router = (0, express_1.Router)();
router.get('/idiomas', idioma_controller_1.getIdiomas);
router.post('/idiomas', idioma_controller_1.createIdioma);
router.put('/idiomas/:id', idioma_controller_1.updateIdioma);
router.delete('/idiomas/:id', idioma_controller_1.deleteIdioma);
exports.default = router;