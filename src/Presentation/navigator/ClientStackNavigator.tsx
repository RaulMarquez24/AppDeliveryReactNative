import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientCategoryListScreen } from "../views/client/category/list/CategoryList";

export type ClientStackParamList = {
    ClientCategoryListScreen: undefined,
}

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name='ClientCategoryListScreen'
                component={ ClientCategoryListScreen }
            />
        </Stack.Navigator>
    )
}