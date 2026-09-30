import { useState } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styles } from './ButtonPassStyles';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import React from 'react';

export function ButtonPass() {
    const [senha, setSenha] = useState('');
    const [tamanho, setTamanho] = useState('10');

    function handleGenButton() {
        const length = Math.min(Math.max(parseInt(tamanho, 10) || 10, 4), 50);
        setTamanho(String(length));
        setSenha(generatePass(length));
    }

    function handleCopyButton() {
        if (senha) {
            Clipboard.setStringAsync(senha);
        }
    }

    function handleLengthChange(value: string) {
        const onlyNumbers = value.replace(/[^0-9]/g, '');
        setTamanho(onlyNumbers);
    }

    function getPasswordStrength() {
        if (!senha) {
            return { label: 'Aguardando geração', style: styles.strengthNeutral };
        }

        let score = 0;
        if (senha.length >= 8) score++;
        if (senha.length >= 12) score++;
        if (/[A-Z]/.test(senha)) score++;
        if (/[a-z]/.test(senha)) score++;
        if (/[0-9]/.test(senha)) score++;
        if (/[^A-Za-z0-9]/.test(senha)) score++;

        if (score <= 2) {
            return { label: 'Fraca', style: styles.strengthWeak };
        }

        if (score <= 4) {
            return { label: 'Média', style: styles.strengthMedium };
        }

        return { label: 'Forte', style: styles.strengthStrong };
    }

    const strength = getPasswordStrength();

    return (
        <View>
            <Text style={styles.lengthLabel}>Tamanho da senha (4 a 50 caracteres)</Text>

            <TextInputPass
                pass={tamanho}
                onChangeText={handleLengthChange}
                keyboardType="number-pad"
                maxLength={2}
                placeholder="10"
            />

            <TextInputPass pass={senha} placeholder="Sua senha aparecerá aqui" editable={false} />

            <View style={styles.strengthContainer}>
                <Text style={styles.strengthText}>Força: </Text>
                <Text style={[styles.strengthText, strength.style]}>
                    {strength.label}
                </Text>
            </View>

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={handleGenButton}
            >
                {({ pressed }) => (
                    <Text style={[styles.text, pressed && styles.textPressed]}>
                        🔑 Gerar Senha
                    </Text>
                )}
            </Pressable>

            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    !senha && styles.buttonDisabled,
                    pressed && senha && styles.buttonPressed,
                ]}
                onPress={handleCopyButton}
                disabled={!senha}
            >
                {({ pressed }) => (
                    <Text
                        style={[
                            styles.text,
                            !senha && styles.textDisabled,
                            pressed && senha && styles.textPressed,
                        ]}
                    >
                        📄 Copiar
                    </Text>
                )}
            </Pressable>
        </View>
    );
}