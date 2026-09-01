import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button:{
        marginTop: 20,
        marginBottom: 10,

        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',

        paddingVertical: 12,
        paddingHorizontal: 32,

        borderRadius: 10,
        borderColor: '#ff1e78',
        borderWidth: 2,
        elevation: 3,

        backgroundColor: 'white'
    },
    text:{
        fontSize: 15,
        color: '#ff1e78',
        fontWeight: 'bold',
    }
})