import { AxiosError } from "axios";
import { Category } from "../../Domain/entities/Category";
import { CategoryRepository } from "../../Domain/repositories/CategoryRepository";
import { ApiDelivery, ApiDeliveryWithImage } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import * as ImagePicker from 'expo-image-picker';
import mime from "mime";

export class CategoryRepositoryImpl implements CategoryRepository {

    async getAll(): Promise<Category[]> {
        try {

            const response = await ApiDelivery.get<Category[]>('/categories/getAll');
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async create(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> {
        try {

            let data = new FormData();

            data.append('image',{
                // @ts-ignore
                uri: file.uri, 
                name: file.uri.split('/').pop()||'test.png', 
                type: mime.getType(file.uri)!
                // type:  'image/png'
            },file.uri);

            data.append('category', JSON.stringify(category));

            const response = await ApiDeliveryWithImage.post<ResponseAPIDelivery>('/categories/create', data);
            
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }
    }

    async updateWithImage(category: Category, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> {
        
        try {
            let data = new FormData();

            data.append('image',{
                // @ts-ignore
                uri: file.uri, 
                name: file.uri.split('/').pop()||'test.png', 
                type: mime.getType(file.uri)!
                // type:  'image/png'
            },file.uri);

            data.append('category', JSON.stringify(category));

            const response = await ApiDeliveryWithImage.put<ResponseAPIDelivery>('/categories/updateWithImage', data);
            
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }

    }

    async update(category: Category): Promise<ResponseAPIDelivery> {
        
        try {

            const response = await ApiDelivery.put<ResponseAPIDelivery>('/categories/update', category);
            return Promise.resolve(response.data);
            
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);
        }

    }

    async remove(id: string): Promise<ResponseAPIDelivery> {
        
        try {
            
            const response = await ApiDelivery.delete<ResponseAPIDelivery>(`/categories/delete/${id}`);
            return Promise.resolve(response.data);

        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }

    }

}