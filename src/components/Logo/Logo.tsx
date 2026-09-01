import { View, Text, Image} from 'react-native';
import styles from './LogoStyles';
import imgLogo from '../../../assets/logo-app.png'

export function Logo(){
    return(
        <View>
            <Text style={styles.title}> ♥ SEC PASS GENERATOR ♥</Text>
            <Image
                source={imgLogo}
                style={{
                    resizeMode:'contain',
                    height: 150
                }}
            />
        </View>
    );
}
