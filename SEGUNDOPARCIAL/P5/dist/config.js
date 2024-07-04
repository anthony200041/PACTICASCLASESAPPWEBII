"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const zod_1 = require("zod");
dotenv_1.default.config();
const envSchema = zod_1.z.object({
    DATABASE_URL: zod_1.z.string().url(),
    PORT: zod_1.z.string().regex(/^\d+$/).transform(Number),
});
const env = envSchema.safeParse(process.env);
if (!env.success) {
    console.error('Invalid environment variables:', env.error.format());
    process.exit(1);
}
exports.default = env.data;
