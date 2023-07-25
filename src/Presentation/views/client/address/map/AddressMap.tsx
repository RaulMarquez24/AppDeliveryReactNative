import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps'
import styles from "./Styles";

export const ClientAddressMapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView 
                style={{ height: '100%', width: '100%'}} 
                provider={PROVIDER_GOOGLE} // QUITAR SI EN APPLE SE QUIERE EL MAPA DE APPLE
            />
        </View>
    )
}
