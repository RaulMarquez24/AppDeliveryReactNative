import { CardTokenParams } from "../../Data/sources/remote/models/CardTokenParams";
import { PaymentParams } from "../../Data/sources/remote/models/PaymentParams";
import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { ResponseMercadoPagoInstallments } from "../../Data/sources/remote/models/ResponseMercadoPagoInstallments";
import { ResponseMercadoPagoCardTocken } from "../../Data/sources/remote/models/ResponseMercadoPagoCardTocken";
import { IdentificationType } from "../entities/IdentificationType";

export interface MercadoPagoRepository{
    
    getIndetificationTypes(): Promise<IdentificationType[]>;
    getInstallments(bin: string, amount: number): Promise<ResponseMercadoPagoInstallments>;
    createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardTocken>;
    createPayment(paymentParams: PaymentParams): Promise<ResponseAPIDelivery>;

}