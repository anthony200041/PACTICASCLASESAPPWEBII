"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePalabra = exports.updatePalabra = exports.createPalabra = exports.getPalabras = void 0;
const palabra_repository_1 = require("../repositories/palabra.repository");
const palabraRepository = new palabra_repository_1.PalabraRepository();
const getPalabras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const palabras = yield palabraRepository.findAll();
    res.json(palabras);
});
exports.getPalabras = getPalabras;
const createPalabra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Palabra, Deletreo, estado } = req.body;
    const palabra = yield palabraRepository.create({ Palabra, Deletreo, estado });
    res.json(palabra);
});
exports.createPalabra = createPalabra;
const updatePalabra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { Palabra, Deletreo, estado } = req.body;
    const palabra = yield palabraRepository.update(id, { Palabra, Deletreo, estado });
    res.json(palabra);
});
exports.updatePalabra = updatePalabra;
const deletePalabra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const palabra = yield palabraRepository.delete(id);
    res.json(palabra);
});
exports.deletePalabra = deletePalabra;
