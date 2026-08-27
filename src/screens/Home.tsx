import { StatusBar } from 'expo-status-bar';
import { View } from "react-native";
import { Logo } from '../components/Logo/Logo';
import { TextInputPass } from '../components/TextInputPass/TextInputPass';
import styles from './HomeStyles' // não tá entre chaves por ser uma constante

export default function Home() { // nome do componente
    return(
        <View style={styles.container}>  // funções no react native retornam apenas um componente cada. Por isso devemos isolar tudo em um único componente: o View
            
            <Logo/>
            <TextInputPass/>

            <StatusBar style="auto" />
        </View>
    );
}