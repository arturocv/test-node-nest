import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;


    @IsString({ message: "Esto debe ser un string" })
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    @MinLength(3, { message: 'El modelo debe tener minimo 3 caracteres' })
    readonly model?: string;
}