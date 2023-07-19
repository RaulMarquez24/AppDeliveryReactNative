import { Product } from '../../Domain/entities/Product';
import { ProductRepository } from '../../Domain/repositories/ProductRepository';
import { ResponseAPIDelivery } from '../sources/remote/models/ResponseApiDelivery';
import { AxiosError } from 'axios';
import mime from 'mime';
import { ApiDeliveryWithImage, ApiDelivery } from '../sources/remote/api/ApiDelivery';
import * as ImagePicker from 'expo-image-picker';

export class ProductRepositoryImpl implements ProductRepository {

    

    async getProductsByCategory(idCategory: String): Promise<Product[]> {
        try {
            const response = await ApiDelivery.get<Product[]>(`/products/findByCategory/${idCategory}`);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

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

    async updateWithImage(product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery> {
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
            const response = await ApiDeliveryWithImage.put<ResponseAPIDelivery>('/products/updateWithImage', data);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async update(product: Product): Promise<ResponseAPIDelivery> {
        try {
            
            const response = await ApiDelivery.put<ResponseAPIDelivery>('/products/update', product);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }
    }

    async remove(product: Product): Promise<ResponseAPIDelivery> {
        try {
            
            const response = await ApiDelivery.delete<ResponseAPIDelivery>(`/products/delete/${product.id}`);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }
    }

}