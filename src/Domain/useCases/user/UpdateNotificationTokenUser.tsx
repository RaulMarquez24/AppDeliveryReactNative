import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";

const { updateNotificationToken } = new UserRepositoryImpl();

export const UpdateNotificationTokenUserUseCase = async(id: string, token: string) => {
    return await updateNotificationToken(id, token) ;
}