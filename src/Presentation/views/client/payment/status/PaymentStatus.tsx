import React from 'react'
import { Image, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { ClientStackParamList } from '../../../../navigator/ClientStackNavigator';
import styles from './Styles'
import { RoundedButton } from '../../../../components/RoundedButton';
import { log } from 'react-native-reanimated';

interface Props extends StackScreenProps<ClientStackParamList, 'ClientPaymentStatusScreen'> { };

export const ClientPaymentStatusScreen = ({ navigation, route }: Props) => {

    const { paymentData, stripePaymentData, paySucces } = route.params;

console.log('JEJEJEJEJJEJEJEJEJEJEJ: ',stripePaymentData!);

    return (
        <View style={styles.container}>
                {
                    stripePaymentData !== null && stripePaymentData !== undefined ?
                    <View style={styles.paymethod}>
                    {
                        paySucces === true ?
                            <Image
                                style={styles.image}
                                source={require('../../../../../../assets/checked.png')}
                            />
                            :
                            <Image
                                style={styles.image}
                                source={require('../../../../../../assets/cancel.png')}
                            />
                    }
                    {
                        paySucces === true ?
                            <Text style={styles.description}>Tu orden fue procesada exitosamente usando {stripePaymentData!.card.brand} ****{stripePaymentData!.card.last4} </Text>
                            :
                            <Text style={styles.description}>La transacción falló</Text>
                    }
                    {
                        paySucces === true &&
                        <Text style={styles.info}>Revisa el estado de tu compra en la sección de MIS PEDIDOS</Text>
                    }
                    </View>
                    :
                    <View style={styles.paymethod}>
                    {
                        paymentData!.status === 'approved' ?
                            <Image
                                style={styles.image}
                                source={require('../../../../../../assets/checked.png')}
                            />
                            :
                            <Image
                                style={styles.image}
                                source={require('../../../../../../assets/cancel.png')}
                            />
                    }
                    {
                        paymentData!.status === 'approved' ?
                            <Text style={styles.description}>Tu orden fue procesada exitosamente usando {paymentData!.payment_method_id} ****{paymentData!.card.last_four_digits} </Text>
                            :
                            <Text style={styles.description}>La transacción falló</Text>
                    }
                    {
                        paymentData!.status === 'approved' &&
                        <Text style={styles.info}>Revisa el estado de tu compra en la sección de MIS PEDIDOS</Text>
                    }
                    </View>
                }
                

                <View style={styles.button}>
                    <RoundedButton text='FINALIZAR COMPRA' onPress={() => navigation.replace('ClientCategoryListScreen')} />
                </View>
        </View>
    )
}
