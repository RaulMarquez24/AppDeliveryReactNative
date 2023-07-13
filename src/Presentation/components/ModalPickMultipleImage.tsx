import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import { RoundedButton } from './RoundedButton';

interface Props {
    openGallery: (numberImage: number) => void,
    openCamera: (numberImage: number) => void,
    numberImage: number,
    modalUseState: boolean,
    setModalUseState: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalPickMultipleImage = ({ openGallery, openCamera, setModalUseState, modalUseState, numberImage }: Props) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalUseState}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalUseState(!modalUseState);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.textOptions}>Selecciona una opción:</Text>

                        <View style={styles.buttonsOptions}>
                            <View style={styles.buttonContainer}>
                                <RoundedButton
                                    onPress={() => {
                                        openGallery(numberImage)
                                        setModalUseState(false)
                                    }}
                                    text='Galeria'
                                />
                            </View>

                            <View style={styles.buttonContainer}>
                                <RoundedButton
                                    onPress={() => {
                                        openCamera(numberImage)
                                        setModalUseState(false)
                                    }}
                                    text='Camara'
                                />
                            </View>
                        </View>

                        {/* <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalUseState(false)}
                        >
                            <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable> */}
                    </View>
                </View>
            </Modal >
        </View >
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 300,
        height: 150,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        // backgroundColor: 'rgb(200, 0, 0)',
        width: '50%',
        marginTop: '5%',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    textOptions: {
        fontSize: 17,
        textAlign: 'center',
    },
    buttonsOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    buttonContainer: {
        width: '45%',
        marginTop: '8%',
    }
});

export default ModalPickMultipleImage;