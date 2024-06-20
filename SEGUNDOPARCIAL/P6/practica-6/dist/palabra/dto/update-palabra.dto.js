"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePalabraDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_palabra_dto_1 = require("./create-palabra.dto");
class UpdatePalabraDto extends (0, mapped_types_1.PartialType)(create_palabra_dto_1.CreatePalabraDto) {
}
exports.UpdatePalabraDto = UpdatePalabraDto;
//# sourceMappingURL=update-palabra.dto.js.map