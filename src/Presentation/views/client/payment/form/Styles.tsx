import { StyleSheet } from "react-native";

const ClientPaymentFormStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    form:{
        // flex: 1,
        marginTop: 15,
    },
    button: {
        width: '100%',
        padding: 20,
        flex: 1,
        justifyContent: "flex-end"
    },
    dropDown:{
        zIndex: 1, // Asegura que el DropDownPicker esté en la parte superior
        // flex: 1,
        marginTop: 30,
        marginHorizontal: 20,
    },
    textMercadoPago:{
        width: '100%',
        paddingHorizontal: 20,
    },
    check: {
        width: 60,
        height: 60,
        alignSelf: "flex-end",
    },
    payMethod:{
        paddingVertical: 20,
        flexDirection:'row',
        width: '100%',
        justifyContent:"space-around"
    },
    payMethodImage:{
        width: 150,
        height: 50,
        borderRadius: 15,
        resizeMode: 'contain', // O 'cover' según lo que prefieras
    },
    loading: {
        position: 'absolute',
        bottom: 0,
        left:0,
        right:0,
        top:0,
    },
});

export default ClientPaymentFormStyles;