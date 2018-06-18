import React from 'react'
import 'es6-symbol/implement'
import { Subscribe } from 'react-govern'
import { StyleSheet, Text, View } from 'react-native'
import CounterComponent from './src/Components/CounterComponent'
import CounterModel from './src/Models/CounterModel'

export default class App extends React.Component {
    render() {
        return ( 
            <View style={styles.container}>
                {Array.from({ length: 2 }, (v, i) =>
                    <Subscribe
                        key={i}
                        to={<CounterModel collection={`player_${i + 1}`} />}
                    >
                        {counterModel =>
                            <CounterComponent
                                title={`Player ${i + 1}`}
                                value={counterModel.value}
                                increment={counterModel.increment} />
                        }
                    </Subscribe>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
