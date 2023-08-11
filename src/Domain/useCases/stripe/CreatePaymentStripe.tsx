import { StripeRepositoryImpl } from "../../../Data/repositories/StripeRepository";
import { Order } from "../../entities/Order";

const { createPaymetStripe } = new StripeRepositoryImpl();

export const CreatePaymentStripeUseCase = async (id: string, amount: number, order: Order) => {
    return await createPaymetStripe(id, amount, order);
}