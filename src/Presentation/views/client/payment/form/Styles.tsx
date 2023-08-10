import { StyleSheet } from "react-native";

const ClientPaymentFormStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    form:{
        // flex: 1,
        marginTop: 15,
    },
    button: {
        width: '100%',
        padding: 20,
    },
    dropDown:{
        flex: 1,
        marginTop: 30,
        marginHorizontal: 20,
    },
    check: {
        width: 60,
        height: 60,
        alignSelf: "flex-end",
    },
});

export default ClientPaymentFormStyles;