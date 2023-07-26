import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Address } from "../entities/Address";
import * as ImagePicker from 'expo-image-picker';

export interface AddressRepository {

    create(address: Address): Promise<ResponseAPIDelivery>;
    getByUser(idUser: string): Promise<Address[]>;
    // update(address: Address): Promise<ResponseAPIDelivery>;
    remove(id: string): Promise<ResponseAPIDelivery>;
}