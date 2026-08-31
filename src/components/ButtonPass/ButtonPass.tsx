import { View, Button, Pressable, Text } from "react-native";
import { styles } from './ButtonPassStyles';

export function ButtonPass() {
    return(
        <View>
            <Pressable
                style={styles.button}
            >
                <Text style={styles.text}>🔑 Gerar Senha 🔑</Text>
            </Pressable>
            <Button
                title='♥ Gen Password ♥'
                onPress={() => {console.log("botao pressionado")}}
            >
            </Button>
        </View>
    )
}