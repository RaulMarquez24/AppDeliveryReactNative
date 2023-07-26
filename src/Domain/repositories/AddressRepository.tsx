import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Address } from "../entities/Address";
import * as ImagePicker from 'expo-image-picker';

export interface AddressRepository {

    create(address: Address): Promise<ResponseAPIDelivery>;
    // getAll(): Promise<Address[]>;
    // updateWithImage(address: Address, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>;
    // update(address: Address): Promise<ResponseAPIDelivery>;
    // remove(id: string): Promise<ResponseAPIDelivery>;
}