import { MercadoPagoRepositoryImpl } from "../../../Data/repositories/MercadoPagoRepository";

const { getIndetificationTypes } = new MercadoPagoRepositoryImpl();

export const GetIdentificationTypesMercadoPagoUseCase = async () => {
    return await getIndetificationTypes();
}
