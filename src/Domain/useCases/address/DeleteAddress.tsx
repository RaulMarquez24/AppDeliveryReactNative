import { AddressRepositoryImpl } from '../../../Data/repositories/AddressRepository'

const { remove } = new AddressRepositoryImpl();

export const DeleteAddressUseCase = async (id: string) => {
    return await remove(id);
}
