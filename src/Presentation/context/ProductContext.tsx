import { ResponseAPIDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery";
import { Product } from "../../Domain/entities/Product";
import * as ImagePicker from 'expo-image-picker';
import { createContext, useEffect, useState } from 'react';
import { GetProductsByCategoryUseCase } from "../../Domain/useCases/product/GetProductsByCategory";
import { CreateProductUseCase } from "../../Domain/useCases/product/CreateProduct";
// import { UpdateProductUseCase } from "../../Domain/useCases/product/UpdateProduct";
// import { UpdateWithImageProductUseCase } from "../../Domain/useCases/product/UpdateWithImageProduct";
// import { DeleteProductUseCase } from "../../Domain/useCases/product/DeleteProduct";

export interface ProductContextProps {
    products: Product[],
    getProducts(idCategory: string): Promise<void>,
    create(product: Product, file: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery>,
    // updateWithImage(product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery>,
    // update(product: Product): Promise<ResponseAPIDelivery>,
    // remove(id: string): Promise<ResponseAPIDelivery>,
}

export const ProductContext = createContext({} as ProductContextProps)

export const ProductProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Product[]>([]);

    // useEffect(() => {
    //     if (products.length === 0) {
    //         getProducts();
    //     }
    // }, []);

    const getProducts = async (idCategory: string): Promise<void> => {
        const result = await GetProductsByCategoryUseCase(idCategory);
        setProducts(result);
    }

    const create = async (product: Product, files: ImagePicker.ImagePickerAsset[]): Promise<ResponseAPIDelivery> => {
        const response = await CreateProductUseCase(product, files);
        getProducts(product.id_category!);
        return response;
    }

    // const update = async (product: Product): Promise<ResponseAPIDelivery> => {
    //     const response = await UpdateProductUseCase(product);
    //     getProducts();
    //     return response;
    // }

    // const updateWithImage = async (product: Product, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPIDelivery> => {
    //     const response = await UpdateWithImageProductUseCase(product, file);
    //     getProducts();
    //     return response;
    // }

    // const remove = async (id: string): Promise<ResponseAPIDelivery> => {
    //     const response = await DeleteProductUseCase(id);
    //     getProducts();
    //     return response;
    // }

    return (
        <ProductContext.Provider value={{
            products,
            getProducts,
            create,
            // updateWithImage,
            // update,
            // remove
        }}>
            {children}
        </ProductContext.Provider>
    )

}