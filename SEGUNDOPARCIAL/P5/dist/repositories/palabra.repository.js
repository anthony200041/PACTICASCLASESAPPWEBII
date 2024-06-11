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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PalabraRepository = void 0;
const palabra_datasource_1 = __importDefault(require("../datasources/palabra.datasource"));
const uuid_1 = require("uuid");
class PalabraRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return palabra_datasource_1.default.palabra.findMany({ where: { estado: 'Activo' } });
        });
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return palabra_datasource_1.default.palabra.create({
                data: Object.assign({ Id: (0, uuid_1.v4)() }, data),
            });
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return palabra_datasource_1.default.palabra.update({
                where: { Id: id },
                data,
            });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return palabra_datasource_1.default.palabra.update({
                where: { Id: id },
                data: { estado: 'Eliminado' },
            });
        });
    }
}
exports.PalabraRepository = PalabraRepository;
