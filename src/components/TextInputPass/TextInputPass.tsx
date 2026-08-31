import { View, TextInput } from 'react-native'
import { styles } from './TextInputPassStyles'

export function TextInputPass() {
    return(
        <> // → fragment. se colocasse View, ia ficar pequeno, mas o fragment faz com que o elemento pai seja o Home.
            <TextInput
                placeholder='password'
                style={styles.inputer}>
                
            </TextInput>
        </>
    );
}