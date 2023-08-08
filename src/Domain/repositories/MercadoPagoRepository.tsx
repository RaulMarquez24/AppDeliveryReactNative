import { CardTokenParams } from "../../Data/sources/remote/models/CardTokenParams";
import { ResponseMecadoPagoInstallments } from "../../Data/sources/remote/models/ResponseMecadoPagoInstallments";
import { ResponseMercadoPagoCardTocken } from "../../Data/sources/remote/models/ResponseMercadoPagoCardTocken";
import { IdentificationType } from "../entities/IdentificationType";

export interface MercadoPagoRepository{
    
    getIndetificationTypes(): Promise<IdentificationType[]>;
    getInstallments(bin: string, amount: number): Promise<ResponseMecadoPagoInstallments>;
    createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardTocken>;

}