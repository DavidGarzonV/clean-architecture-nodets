import { Expose } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

class CreateOffer {
  @Expose()
  @IsString()
  @IsNotEmpty()
  public name: string;

  @Expose()
  @IsString()
  @IsNotEmpty()
  public description: string;
}

export const createOfferDTO = CreateOffer;