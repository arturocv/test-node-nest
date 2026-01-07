import { Car } from './interfaces/car.interdace';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
export declare class CarsService {
    private cars;
    findAll(): Car[];
    findOneById(id: string): Car;
    create(createCarDto: CreateCarDto): Car;
    update(id: string, updateCarDto: UpdateCarDto): Car;
    delete(id: string): void;
    fillCarsWithSeedData(cars: Car[]): void;
}
