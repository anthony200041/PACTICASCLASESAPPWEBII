"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const palabra_controller_1 = require("../controllers/palabra.controller");
const router = (0, express_1.Router)();
router.get('/palabras', palabra_controller_1.getPalabras);
router.post('/palabras', palabra_controller_1.createPalabra);
router.put('/palabras/:id', palabra_controller_1.updatePalabra);
router.delete('/palabras/:id', palabra_controller_1.deletePalabra);
exports.default = router;