import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString({ message: "Esto debe ser un string" })
    readonly brand: string;

    @IsString()
    @MinLength(3, { message: 'El modelo debe tener minimo 3 caracteres' })
    readonly model: string;
}