"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/datasources/palabra.datasource.ts
const client_1 = require("@prisma/client");
const prismaPalabra = new client_1.PrismaClient();
exports.default = prismaPalabra;
