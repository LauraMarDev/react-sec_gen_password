import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcae6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer:{
        flexDirection: 'column',
        borderColor: '#ff1e78',
        borderWidth: 2,
        justifyContent: 'center',
        alignSelf: 'center',

        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10,

        backgroundColor: '#ffecf6'
    },
    buttonContainer:{
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        
        borderColor: '#ff1e78',
        borderWidth: 2,
        borderRadius: 10,

        marginBottom: 30,
        paddingTop: 10,
        paddingBottom: 10,

        backgroundColor: '#ffecf6'
    }
});

export default styles;