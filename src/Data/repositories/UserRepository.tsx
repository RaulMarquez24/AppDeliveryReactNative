import { ImagePickerAsset } from "expo-image-picker";
import { User } from "../../Domain/entities/User";
import { userRepository } from "../../Domain/repositories/UserRepository";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { AxiosError } from "axios";
import { ApiDelivery, ApiDeliveryWithImage } from "../sources/remote/api/ApiDelivery";
import mime from "mime";

export class UserRepositoryImpl implements userRepository {

    async getDeliveryMen(): Promise<User[]> {
        try {
            const response = await ApiDelivery.get<User[]>('/users/findDeliveryMen');
            return Promise.resolve(response.data);
        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            return Promise.resolve([]);
        }
    }

    async update(user: User): Promise<ResponseAPIDelivery> {
        try {

            const response = await ApiDelivery.put<ResponseAPIDelivery>('/users/updateWithoutImage', user);
            return Promise.resolve(response.data);


        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }
    }

    async updateWithImage(user: User, file: ImagePickerAsset): Promise<ResponseAPIDelivery> {
        
        try {

            let data = new FormData();

            data.append('image',{
                // @ts-ignore
                uri: file.uri, 
                name: file.uri.split('/').pop()||'test.png', 
                type: mime.getType(file.uri)!
                // type:  'image/png'
            },file.uri);

            data.append('user', JSON.stringify(user));

            const response = await ApiDeliveryWithImage.put<ResponseAPIDelivery>('/users/update', data);
            
            return Promise.resolve(response.data);


        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }

    }

}