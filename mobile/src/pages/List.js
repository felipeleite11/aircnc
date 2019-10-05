import React, { useState, useEffect } from 'react'
import { AsyncStorage, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native'

import logo from '../../assets/logo.png'

import SpotList from '../components/SpotList'

export default function List() {
    const [techs, setTechs] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            if(!storagedTechs || !storagedTechs.length) return

            const techs = storagedTechs.split(',').map(tech => tech.trim())
            setTechs(techs)
        })
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <ScrollView>
                {techs.map(tech => (
                    <SpotList
                        key={tech}
                        tech={tech}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        height: 32,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 30
    }
})