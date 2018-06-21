import React from 'react'
import PropTypes from 'prop-types'
import { Button, Text, View } from 'react-native'

const Counter = (props) => {
    return (
        <View>
            <Text>{props.value}</Text>
            <Button title="Clickums" onPress={props.increment} />
        </View>
    )
}

Counter.propTypes = {
    title: PropTypes.string,
    value: PropTypes.number,
    increment: PropTypes.func,
}

export default Counter
