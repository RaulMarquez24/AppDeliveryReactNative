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

    async getByUser(idUser: string): Promise<Address[]> {
        try {

            const response = await ApiDelivery.get<Address[]>(`/address/findByUser/${idUser}`);
            return Promise.resolve(response.data)

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async remove(id: string): Promise<ResponseAPIDelivery> {
        
        try {
            
            const response = await ApiDelivery.delete<ResponseAPIDelivery>(`/address/delete/${id}`);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }

    }

}