import React, { useState, useEffect } from 'react'
import { withNavigation } from 'react-navigation'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'

function SpotList({ tech, navigation }) {
    const [spots, setSpots] = useState([])

    useEffect(() => {
        async function loadSpots() {
            //USAR A PROPERTY tech PARA BUSCAR NA API A LISTA DE SPOTS

            //MOCK DE DADOS
            setSpots([
                { 
                    _id: '1',
                    thumbnail_url: 'https://live.staticflickr.com/201/511016492_29004afb95_z.jpg'
                },
                { 
                    _id: '2',
                    thumbnail_url: 'https://live.staticflickr.com/201/511016492_29004afb95_z.jpg'
                },
                { 
                    _id: '3',
                    thumbnail_url: 'https://live.staticflickr.com/201/511016492_29004afb95_z.jpg'
                },
                { 
                    _id: '4',
                    thumbnail_url: 'https://live.staticflickr.com/201/511016492_29004afb95_z.jpg'
                },
                { 
                    _id: '5',
                    thumbnail_url: 'https://live.staticflickr.com/201/511016492_29004afb95_z.jpg'
                },
                { 
                    _id: '6',
                    thumbnail_url: 'https://live.staticflickr.com/201/511016492_29004afb95_z.jpg'
                },
                { 
                    _id: '7',
                    thumbnail_url: 'https://live.staticflickr.com/201/511016492_29004afb95_z.jpg'
                }
            ])
        }

        loadSpots()
    }, [])

    function handleNavigate(spotId) {
        console.log('spotId', spotId)
        navigation.navigate('Book', { spotId })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>

            <FlatList 
                style={styles.list}
                data={spots}
                keyExtractor={item => item._id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Image source={{ uri: item.thumbnail_url }} style={styles.thumbnail} />
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.price}>{item.price ? `R$${price}/dia` : 'GRATUITO'}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => handleNavigate(item._id)}>
                            <Text style={styles.buttonText}>Solicitar reserva</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    title: {
        fontSize: 20,
        color: '#444',
        marginBottom: 15,
        paddingHorizontal: 20
    },
    bold: {
        fontWeight: 'bold'
    },
    list: {
        paddingHorizontal: 20
    },
    listItem: {
        marginRight: 15
    },
    thumbnail: {
        width: 200,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 2
    },
    company: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10
    },
    price: {
        fontSize: 15,
        color: '#999',
        marginTop: 5
    },
    button: {
        height: 32,
        marginTop: 15,
        backgroundColor: "#f05a5b",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    }
})

export default withNavigation(SpotList)