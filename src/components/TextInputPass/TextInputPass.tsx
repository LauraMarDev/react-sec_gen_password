import { TextInput } from 'react-native';
import { styles } from './TextInputPassStyles';
import React from 'react';

interface TextInputProps {
    pass: string;
    onChangeText?: (text: string) => void;
    keyboardType?: 'default' | 'number-pad';
    maxLength?: number;
    placeholder?: string;
    editable?: boolean;
}

export function TextInputPass(props: TextInputProps) {
    return (
        <TextInput
            placeholder={props.placeholder ?? 'Digite sua senha'}
            style={styles.inputer}
            value={props.pass}
            onChangeText={props.onChangeText}
            keyboardType={props.keyboardType}
            maxLength={props.maxLength}
            editable={props.editable}
        />
    );
}
