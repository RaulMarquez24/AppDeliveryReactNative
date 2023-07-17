import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from 'expo-image-picker';
import { createContext, useEffect, useState } from 'react';
// import { GetAllProductUseCase } from "../../Domain/useCases/product/GetAllProduct";
import { CreateProductUseCase } from "../../Domain/useCases/product/CreateProduct";
// import { UpdateProductUseCase } from "../../Domain/useCases/product/UpdateProduct";
// import { UpdateWithImageProductUseCase } from "../../Domain/useCases/product/UpdateWithImageProduct";
// import { DeleteProductUseCase } from "../../Domain/useCases/product/DeleteProduct";

export interface ProductContextProps {
    // products: Product[],
    // getCategories(): Promise<void>,
    create(product: Product, file: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>,
    // updateWithImage(product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>,
    // update(product: Product): Promise<ResponseAPIDelivery>,
    // remove(id: string): Promise<ResponseAPIDelivery>,
}

export const ProductContext = createContext({} as ProductContextProps)

export const ProductProvider = ({ children }: any) => {

    // const [products, setCategories] = useState<Product[]>([]);

    // useEffect(() => {
    //     if (products.length === 0) {
    //         getCategories();
    //     }
    // }, []);

    // const getCategories = async (): Promise<void> => {
    //     const result = await GetAllProductUseCase();
    //     setCategories(result);
    // }

    const create = async (product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery> => {
        ;
        const response = await CreateProductUseCase(product, files);
        // getCategories();
        return response;
    }

    // const update = async (product: Product): Promise<ResponseAPIDelivery> => {
    //     const response = await UpdateProductUseCase(product);
    //     getCategories();
    //     return response;
    // }

    // const updateWithImage = async (product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> => {
    //     const response = await UpdateWithImageProductUseCase(product, file);
    //     getCategories();
    //     return response;
    // }

    // const remove = async (id: string): Promise<ResponseAPIDelivery> => {
    //     const response = await DeleteProductUseCase(id);
    //     getCategories();
    //     return response;
    // }

    return (
        <ProductContext.Provider value={{
            // products,
            // getCategories,
            create,
            // updateWithImage,
            // update,
            // remove
        }}>
            {children}
        </ProductContext.Provider>
    )

}