import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class CounterComponent extends Component {
    render() {
        return (
            <View>
                <Text>{this.props.value}</Text>
                <Button title="Clickums" onPress={this.props.increment} />
            </View>
        )
    }
}
