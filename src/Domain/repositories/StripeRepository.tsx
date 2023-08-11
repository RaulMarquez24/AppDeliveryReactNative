import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Order } from "../entities/Order";

export interface StripeRepository {

    createPaymetStripe(id: string, amount: number, order: Order): Promise<ResponseAPIDelivery>;

}