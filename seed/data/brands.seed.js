"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brand_SEED = void 0;
const uuid_1 = require("uuid");
exports.brand_SEED = [
    {
        id: (0, uuid_1.v4)(),
        name: "Honda",
        createAt: new Date().getTime(),
    },
    {
        id: (0, uuid_1.v4)(),
        name: "Toyota",
        createAt: new Date().getTime(),
    },
    {
        id: (0, uuid_1.v4)(),
        name: "Jeep",
        createAt: new Date().getTime(),
    },
    {
        id: (0, uuid_1.v4)(),
        name: "Audi",
        createAt: new Date().getTime(),
    }
];
//# sourceMappingURL=brands.seed.js.map