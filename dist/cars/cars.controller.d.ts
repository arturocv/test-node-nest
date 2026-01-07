import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsController {
    private readonly carsService;
    constructor(carsService: CarsService);
    getAllCars(): import("./interfaces/car.interdace").Car[];
    getCarById(id: string): import("./interfaces/car.interdace").Car;
    createCar(createCarDto: CreateCarDto): import("./interfaces/car.interdace").Car;
    updateCar(updateCarDto: UpdateCarDto, id: string): import("./interfaces/car.interdace").Car;
    deleteCar(id: string): void;
}
