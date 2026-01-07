"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cars_SEED = void 0;
const uuid_1 = require("uuid");
exports.Cars_SEED = [
    {
        id: (0, uuid_1.v4)(),
        brand: 'Toyota',
        model: 'Corolla'
    },
    {
        id: (0, uuid_1.v4)(),
        brand: 'Honda',
        model: 'Civic'
    },
    {
        id: (0, uuid_1.v4)(),
        brand: 'Jeep',
        model: 'Cherokee'
    }
];
//# sourceMappingURL=cars.seed.js.map