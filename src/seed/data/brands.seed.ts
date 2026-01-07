import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interdace";
import { v4 as uuid } from 'uuid';

export const brand_SEED: Brand[] = [
    {
        id: uuid(),
        name: "Honda",
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Toyota",
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Jeep",
        createAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: "Audi",
        createAt: new Date().getTime(),
    }

]