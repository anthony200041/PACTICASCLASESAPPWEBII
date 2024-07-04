"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegistrDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_registro_dto_1 = require("./create-registro.dto");
class UpdateRegistrDto extends (0, mapped_types_1.PartialType)(create_registro_dto_1.CreateRegistroDto) {
}
exports.UpdateRegistrDto = UpdateRegistrDto;
//# sourceMappingURL=update-registro.dto.js.map