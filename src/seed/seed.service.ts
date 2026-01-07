import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { Cars_SEED } from './data/cars.seed';
import { brand_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) { }

  populateDB() {
    this.carsService.fillCarsWithSeedData(Cars_SEED);
    this.brandsService.fillCarsWithSeedData(brand_SEED);
    return `SEED ejecutada correctamente.`
  }
}
