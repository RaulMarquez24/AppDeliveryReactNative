import { AxiosError } from 'axios';
import { IdentificationType } from '../../Domain/entities/IdentificationType';
import { MercadoPagoRepository } from '../../Domain/repositories/MercadoPagoRepository';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';
import { ApiMercadoPago } from '../sources/remote/api/ApiMercadoPago';
import { CardTokenParams } from '../sources/remote/models/CardTokenParams';
import { PaymentParams } from '../sources/remote/models/PaymentParams';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { ResponseMercadoPagoInstallments } from '../sources/remote/models/ResponseMercadoPagoInstallments';
import { ResponseMercadoPagoCardTocken } from '../sources/remote/models/ResponseMercadoPagoCardTocken';

export class MercadoPagoRepositoryImpl implements MercadoPagoRepository {

    async getIndetificationTypes(): Promise<IdentificationType[]> {
        const response = await ApiMercadoPago.get<IdentificationType[]>('identification_types');
        return response.data;
    }

    async getInstallments(bin: string, amount: number): Promise<ResponseMercadoPagoInstallments> {
        const response = await ApiMercadoPago.get<ResponseMercadoPagoInstallments[]>(`/payment_methods/installments?bin=${bin}&amount=${amount}`);
        return response.data[0];
    }

    async createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardTocken> {
        const response = await ApiMercadoPago.post<ResponseMercadoPagoCardTocken>(`/card_tokens?public_key=TEST-2ecadc7e-cfc6-4efd-af0b-24cca59e2425`, cardTokenParams);
        return response.data;
    }

    async createPayment(paymentParams: PaymentParams): Promise<ResponseAPIDelivery> {
        try {

            const response = await ApiDelivery.post<ResponseAPIDelivery>('/payments/create', paymentParams);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

}