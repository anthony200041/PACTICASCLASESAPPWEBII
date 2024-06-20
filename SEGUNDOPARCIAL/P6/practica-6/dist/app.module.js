"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const idioma_module_1 = require("./idioma/idioma.module");
const palabra_module_1 = require("./palabra/palabra.module");
const registro_module_1 = require("./registro/registro.module");
const idioma_entity_1 = require("./idioma/entities/idioma.entity");
const palabra_entity_1 = require("./palabra/entities/palabra.entity");
const registro_entity_1 = require("./registro/entities/registro.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '123456789',
                database: 'P6',
                entities: [idioma_entity_1.Idioma, palabra_entity_1.Palabra, registro_entity_1.Registro],
                synchronize: true,
            }),
            idioma_module_1.IdiomaModule,
            palabra_module_1.PalabraModule,
            registro_module_1.RegistroModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map