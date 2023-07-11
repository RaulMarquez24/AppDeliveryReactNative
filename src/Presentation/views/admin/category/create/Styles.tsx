import { StyleSheet } from 'react-native';
import { MyColors } from '../../../../theme/AppTheme';

const AdminCategoryCreateStyles = StyleSheet.create({

    container:{
        flex:1,
    },
    imageContaine:{
        paddingTop: 50,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode:'contain'
    },
    form:{
        backgroundColor: '#fff',
        height: '65%',
        width: '100%',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    },
    
});

export default AdminCategoryCreateStyles;