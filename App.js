import React from 'react'
import 'es6-symbol/implement'
import { Subscribe } from 'react-govern'
import { StyleSheet, Text, View } from 'react-native'
import Counter from './src/Components/Counter'
import CounterModel from './src/Models/CounterModel'

export default class App extends React.Component {
    static numPlayers = 2

    render() {
        return ( 
            <View style={styles.container}>
                <View>
                    {Array.from({ length: App.numPlayers }, (v, i) =>
                        <Subscribe
                            key={i}
                            to={<CounterModel collection={`player_${i + 1}`} />}
                        >
                            {counterModel =>
                                <Counter
                                    title={`Player ${i + 1}`}
                                    value={counterModel.value}
                                    increment={counterModel.increment} />
                            }
                        </Subscribe>
                    )}
                </View>
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
