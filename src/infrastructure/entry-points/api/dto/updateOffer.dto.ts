import { Expose } from "class-transformer";
import { IsUUID } from "class-validator";

class UpdateOffer {
  @IsUUID()
  @Expose()
  public id: string;
}

export const updateOfferDTO = UpdateOffer;