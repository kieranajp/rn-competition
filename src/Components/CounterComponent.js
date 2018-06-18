import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'

const CounterComponent = (props) => {
    console.log(props.value)
    return (
    <View>
        <Text>{props.value}</Text>
        <Button title="Clickums" onPress={props.increment} />
    </View>
)
}

CounterComponent.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    increment: PropTypes.func,
}

export default CounterComponent
