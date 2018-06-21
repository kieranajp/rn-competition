import React from 'react'
import 'es6-symbol/implement'
import { Subscribe } from 'react-govern'
import { StyleSheet, Text, View } from 'react-native'
import Counter from './src/Components/Counter'
import CounterModel from './src/Models/CounterModel'
import { getYear, getISOWeek, getISODay } from 'date-fns';

export default class App extends React.Component {
    static numPlayers = 2

    render() {
        const date = new Date()
        const [ week, day ] = [ `${getYear(date)}-W${getISOWeek(date)}`, getISODay(date) ];

        return ( 
            <View style={styles.container}>
                <View>
                    {Array.from({ length: App.numPlayers }, (v, i) =>
                        <Subscribe
                            key={i}
                            to={<CounterModel
                                collection={`player_${i + 1}_${week}`}
                                week={week}
                                day={day} />
                            }
                        >
                            {counterModel =>
                                <Counter
                                    title={`Player ${i + 1}`}
                                    isLoading={counterModel.isLoading}
                                    dailyScore={counterModel.dailyScore}
                                    weeklyScore={counterModel.weeklyScore}
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
