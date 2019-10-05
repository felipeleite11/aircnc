import React, { useState } from 'react'
import { SafeAreaView, Text, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

export default function Book({ navigation }) {
    const [date, setDate] = useState('04 de dezembro')

    const spotId = navigation.getParam('spotId')

    async function handleSubmit() {
        const user = await AsyncStorage.getItem('user')

        // await api.post(`/spots/${spotId}/bookings`, { date }, {
        //     headers: { user_id: user }
        // })

        Alert.alert('Solicitação de reserva enviada!')

        navigation.navigate('List')
    }

    function handleCancel() {
        navigation.navigate('List')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Data</Text>

            <TextInput 
                style={styles.input}
                placeholder="Qual a data?"
                placeholderTextColor="#999"
                autoCapitalize="words"
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>  
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>  
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 30
    },  
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 30
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
    cancelButton: {
        backgroundColor: '#ccc',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})