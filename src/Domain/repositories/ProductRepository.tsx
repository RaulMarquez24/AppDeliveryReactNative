import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import * as ImagePicker from 'expo-image-picker';
import { Product } from "../entities/Product";

export interface ProductRepository {

    getProductsByCategory(idCategory: string): Promise<Product[]>;
    create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>;
    // updateWithImage(product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>;
    // update(product: Product): Promise<ResponseAPIDelivery>;
    // remove(id: string): Promise<ResponseAPIDelivery>;

}