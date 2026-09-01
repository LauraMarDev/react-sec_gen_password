import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
import { Logo } from '../components/Logo/Logo';
import { TextInputPass } from '../components/TextInputPass/TextInputPass';
import { ButtonPass } from '../components/ButtonPass/ButtonPass';
import styles from './HomeStyles' // o "styles" não tá entre chaves por ser uma constante. se fosse algo variável, usaria entre chaves

export default function Home() { // nome do componente
    return(
        <View style={styles.container}>  // funções no react native retornam apenas um componente cada. Por isso devemos isolar tudo em um único componente: o View
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.buttonContainer}>
                <ButtonPass/>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}