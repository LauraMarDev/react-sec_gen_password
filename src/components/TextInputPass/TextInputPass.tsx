import { View, TextInput } from 'react-native'
import { styles } from './TextInputPassStyles'

interface TextInputProps{
    pass:string
}

export function TextInputPass(props:TextInputProps) {
    return(
        <> // → fragment. se colocasse View, ia ficar pequeno, mas o fragment faz com que o elemento pai seja o Home.
            <TextInput
                placeholder='Digite sua senha'
                style={styles.inputer}>
                
            </TextInput>
        </>
    );
}