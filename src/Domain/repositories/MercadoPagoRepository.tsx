import { CardTokenParams } from "../../Data/sources/remote/models/CardTokenParams";
import { ResponseMercadoPagoCardTocken } from "../../Data/sources/remote/models/ResponseMercadoPagoCardTocken";
import { IdentificationType } from "../entities/IdentificationType";

export interface MercadoPagoRepository{
    
    getIndetificationTypes(): Promise<IdentificationType[]>;
    createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardTocken>;

}