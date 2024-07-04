"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdiomaController = void 0;
const common_1 = require("@nestjs/common");
const idioma_service_1 = require("./idioma.service");
const create_idioma_dto_1 = require("./dto/create-idioma.dto");
let IdiomaController = class IdiomaController {
    constructor(idiomaService) {
        this.idiomaService = idiomaService;
    }
    create(createIdiomaDto) {
        return this.idiomaService.create(createIdiomaDto);
    }
    findAll() {
        return this.idiomaService.findAll();
    }
    findOne(id) {
        return this.idiomaService.findOne(+id);
    }
    update(id, updateIdiomaDto) {
        return this.idiomaService.update(+id, updateIdiomaDto);
    }
    remove(id) {
        return this.idiomaService.remove(+id);
    }
};
exports.IdiomaController = IdiomaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_idioma_dto_1.CreateIdiomaDto]),
    __metadata("design:returntype", void 0)
], IdiomaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IdiomaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IdiomaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_idioma_dto_1.CreateIdiomaDto]),
    __metadata("design:returntype", void 0)
], IdiomaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IdiomaController.prototype, "remove", null);
exports.IdiomaController = IdiomaController = __decorate([
    (0, common_1.Controller)('idiomas'),
    __metadata("design:paramtypes", [idioma_service_1.IdiomaService])
], IdiomaController);
//# sourceMappingURL=idioma.controller.js.map