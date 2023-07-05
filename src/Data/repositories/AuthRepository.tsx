import { AxiosError } from "axios";
import { User } from "../../Domain/entities/User";
import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { ApiDelivery, ApiDeliveryWithImage } from "../sources/remote/api/ApiDelivery";
import { ResponseAPIDelivery } from "../sources/remote/models/ResponseApiDelivery";
import { ImagePickerAsset } from "expo-image-picker";
import mime from 'mime';

export class AuthRepositoryImpl implements AuthRepository {

    async register(user: User): Promise<ResponseAPIDelivery> {

        try {

            const response = await ApiDelivery.post<ResponseAPIDelivery>('/users/create', user);
            return Promise.resolve(response.data);


        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }
    }

    async registerWithImage(user: User, file: ImagePickerAsset): Promise<ResponseAPIDelivery> {
        try {

            // const convertToBlob = async (uri: any) => {
            //     const response = await fetch(uri);
            //     const blob = await response.blob();
            //     return blob;
            // };

            // const createImageFile = (blob: any, fileName: any) => {
            //     const parts = fileName.split('/');
            //     const name = parts[parts.length - 1];
            //     return new File([blob], name, { type: blob.type });
            // };

            let data = new FormData();

            data.append('image',{
                // @ts-ignore
                uri: file.uri, 
                name: file.uri.split('/').pop(), 
                type:  mime.getType(file.uri)!
            });

            // const blob = await convertToBlob(file.uri);
            // const imageFile = createImageFile(blob, file.uri);

            // data.append('image', imageFile);

            data.append('user', JSON.stringify('user'));

            const response = await ApiDeliveryWithImage.post<ResponseAPIDelivery>('/users/createWithImage', data);
            return Promise.resolve(response.data);


        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }
    }

    async login(email: string, password: string): Promise<ResponseAPIDelivery> {

        try {

            const response = await ApiDelivery.post<ResponseAPIDelivery>('/users/login', {
                email: email,
                password: password
            });
            return Promise.resolve(response.data);


        } catch (error) {
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError: ResponseAPIDelivery = JSON.parse(JSON.stringify(e.response?.data));
            return Promise.resolve(apiError);

        }
    }

}