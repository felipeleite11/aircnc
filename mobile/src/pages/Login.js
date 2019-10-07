import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, AsyncStorage } from 'react-native'

import logo from '../../assets/logo.png'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('felipe@robot.rio.br')
    const [techs, setTechs] = useState('Node, C#, PHP')
    const [ip, setIp] = useState('192.168.43.46:3333')

    useEffect(() => {
        AsyncStorage.removeItem('user')
        AsyncStorage.removeItem('techs')

        async function loginVerification() {
            const user = await AsyncStorage.getItem('user')

            if(user) {
                navigation.navigate('List')
            }
        }

        loginVerification()
    }, [])

    async function handleSubmit() {
        await AsyncStorage.setItem('user', String(1))
        await AsyncStorage.setItem('techs', techs)

        navigation.navigate('List', { ip })
    }

    return (
        <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={styles.container}>
            <Image source={logo} />

            <View style={styles.form}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>Tecnologias</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <Text style={styles.label}>IP da API</Text>
                <TextInput 
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="0.0.0.0"
                    placeholderTextColor="#999"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>  
                    <Text style={styles.buttonText}>Encontrar spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 48,
        marginBottom: 20,
        borderRadius: 2
    },
    button: {
        height: 42,
        backgroundColor: "#f05a5b",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})