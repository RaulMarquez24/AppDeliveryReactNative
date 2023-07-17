import { Product } from '../../Domain/entities/Product';
import { ProductRepository } from '../../Domain/repositories/ProductRepository';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AxiosError } from 'axios';
import mime from 'mime';
import { ApiDeliveryWithImage, ApiDelivery } from '../sources/remote/api/ApiDelivery';
import * as ImagePicker from 'expo-image-picker';

export class ProductRepositoryImpl implements ProductRepository {

    async create(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery> {
        try {

            let data = new FormData();

            files.forEach(file => {
                data.append('image', {
                    // @ts-ignore
                    uri: file.uri,
                    name: file.uri.split('/').pop() || 'test.png',
                    type: mime.getType(file.uri)!
                    // type:  'image/png'
                }, file.uri);
            });

            data.append('product', JSON.stringify(product));
            const response = await ApiDeliveryWithImage.post<ResponseAPIDelivery>('/products/create', data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

}