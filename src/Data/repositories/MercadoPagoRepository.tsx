import { IdentificationType } from '../../Domain/entities/IdentificationType';
import { MercadoPagoRepository } from '../../Domain/repositories/MercadoPagoRepository';
import { ApiMercadoPago } from '../sources/remote/api/ApiMercadoPago';
import { CardTokenParams } from '../sources/remote/models/CardTokenParams';
import { ResponseMercadoPagoCardTocken } from '../sources/remote/models/ResponseMercadoPagoCardTocken';

export class MercadoPagoRepositoryImpl implements MercadoPagoRepository {

    async getIndetificationTypes(): Promise<IdentificationType[]> {
        const response = await ApiMercadoPago.get<IdentificationType[]>('identification_types');
        return response.data;
    }

    async createCardToken(cardTokenParams: CardTokenParams): Promise<ResponseMercadoPagoCardTocken> {
        const response = await ApiMercadoPago.post<ResponseMercadoPagoCardTocken>(`/card_tokens?public_key=TEST-2ecadc7e-cfc6-4efd-af0b-24cca59e2425`, cardTokenParams);
        return response.data;
    } 

}