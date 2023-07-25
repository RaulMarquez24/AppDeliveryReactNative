import { StyleSheet } from 'react-native';
import { MyColors } from '../../../../theme/AppTheme';

const ClientAddressCreateStyles = StyleSheet.create({

    container:{
        flex:1,
    },
    imageContainer:{
        paddingTop: 50,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode:'contain'
    },
    form:{
        marginTop: 50,
        backgroundColor: '#fff',
        height: '65%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    },
    
});

export default ClientAddressCreateStyles;