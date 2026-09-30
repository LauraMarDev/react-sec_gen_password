import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    lengthLabel: {
        color: '#ff1e78',
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    button: {
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

        backgroundColor: 'white',
    },
    buttonPressed: {
        backgroundColor: '#ff1e78',
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    text: {
        fontSize: 15,
        color: '#ff1e78',
        fontWeight: 'bold',
    },
    textPressed: {
        color: 'white',
    },
    textDisabled: {
        color: '#999999',
    },
    strengthContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8,
    },
    strengthText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555555',
    },
    strengthNeutral: {
        color: '#777777',
    },
    strengthWeak: {
        color: '#d32f2f',
    },
    strengthMedium: {
        color: '#f57c00',
    },
    strengthStrong: {
        color: '#2e7d32',
    },
});
