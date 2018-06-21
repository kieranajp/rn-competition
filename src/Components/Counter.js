import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'

const Counter = (props) => {
    return (
        <View>
            <Text>This week: {props.weeklyScore}</Text>
            <Text>Today: {props.dailyScore}</Text>
            <Button title="Clickums" onPress={props.increment} />
        </View>
    )
}

Counter.propTypes = {
    title: PropTypes.string,
    dailyScore: PropTypes.number,
    weeklyScore: PropTypes.number,
    increment: PropTypes.func,
}

export default Counter
