import { View, TextInput } from 'react-native'
import { styles } from './TextInputPassStyles'

export function TextInputPass() {
    return(
        <View>
            <TextInput
                placeholder='password'
                style={styles.inputer}>
                
            </TextInput>
        </View>
    );
}
