import { AxiosError } from 'axios';
import { Address } from '../../Domain/entities/Address';
import { AddressRepository } from '../../Domain/repositories/AddressRepository';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { ApiDelivery } from '../sources/remote/api/ApiDelivery';

export class AddressRepositoryImpl implements AddressRepository {

    async create(address: Address): Promise<ResponseAPIDelivery> {
        try {
            
            const response = await ApiDelivery.post<ResponseAPIDelivery>('/address/create', address)
            return Promise.resolve(response.data)

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

}