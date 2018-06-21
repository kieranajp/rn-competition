import React from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Counter = (props) => {
    return (
        <TouchableOpacity
            style={[ styles.container, styles[`variant_${props.index}`] ]}
            disabled={props.isLoading}
            onPress={props.increment}>
            <View>
                <Text style={styles.title}>Player {props.index}</Text>
                {props.isLoading ?
                    <View>
                        <Text style={styles.score}>Loading</Text>
                        <ActivityIndicator size="small" color="black" />
                    </View>:
                    <View>
                        <Text style={styles.score}>Today: {props.dailyScore}</Text>
                        <Text style={styles.score}>This week: {props.weeklyScore}</Text>
                    </View>
                }
            </View>
        </TouchableOpacity>
    )
}

Counter.propTypes = {
    index: PropTypes.number,
    dailyScore: PropTypes.number,
    weeklyScore: PropTypes.number,
    increment: PropTypes.func,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    variant_1: {
        backgroundColor: 'powderblue',
    },
    variant_2: {
        backgroundColor: 'skyblue'
    },
    title: {
        fontFamily: 'sans-serif-condensed',
        textAlign: 'center',
        fontSize: 62,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    score: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 22,
        textAlign: 'center'
    }
})

export default Counter
