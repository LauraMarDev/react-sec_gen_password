import { useState } from 'react'
import { View, Button, Pressable, Text } from "react-native";
import { styles } from './ButtonPassStyles';
import { TextInputPass } from '../TextInputPass/TextInputPass';

export function ButtonPass() {
    const [ senha, setSenha ] = useState('');

    function handleGenButton(){
        let generateToken = setSenha('Teste inputText')
        console.log(generateToken);
    }

    return(
        <View>
            
            <TextInputPass/>
            
            <Pressable
                style={styles.button}
                onPress={handleGenButton}
            >
                <Text style={styles.text}>🔑 Gerar Senha</Text>
            </Pressable>

            <Pressable
                style={styles.button}
                onPress={() => {console.log("Copiar foi pressionado")}}
            >
                <Text style={styles.text}>📄 Copiar</Text>
            </Pressable>

            {/* Componente Button
            <Button
                title='♥ Gen Password ♥'
                onPress={() => {console.log("botao pressionado")}}
            >
            </Button>*/}
        </View>
    )
}