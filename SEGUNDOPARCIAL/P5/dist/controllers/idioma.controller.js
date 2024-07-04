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
exports.deleteIdioma = exports.updateIdioma = exports.createIdioma = exports.getIdiomas = void 0;
const idioma_repository_1 = require("../repositories/idioma.repository");
const idiomaRepository = new idioma_repository_1.IdiomaRepository();
const getIdiomas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idiomas = yield idiomaRepository.findAll();
    res.json(idiomas);
});
exports.getIdiomas = getIdiomas;
const createIdioma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Descripcion, estado } = req.body;
    const idioma = yield idiomaRepository.create({ Descripcion, estado });
    res.json(idioma);
});
exports.createIdioma = createIdioma;
const updateIdioma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { Descripcion, estado } = req.body;
    const idioma = yield idiomaRepository.update(id, { Descripcion, estado });
    res.json(idioma);
});
exports.updateIdioma = updateIdioma;
const deleteIdioma = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const idioma = yield idiomaRepository.delete(id);
    res.json(idioma);
});
exports.deleteIdioma = deleteIdioma;
