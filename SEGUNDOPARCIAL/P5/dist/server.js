"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const app_1 = __importDefault(require("./app"));
const PORT = config_1.default.PORT;
app_1.default.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
