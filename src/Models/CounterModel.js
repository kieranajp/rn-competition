import * as Govern from 'govern'
import Rebase from 're-base'
import base from '../rebase'

export default class CounterModel extends Govern.Component {
    static defaultProps = {
        defaultValue: 0,
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue,
        }
    }

    componentDidMount() {
        this.ref = base.syncState(this.props.collection, {
            context: this,
            state: 'value',
        })
    }

    render() {
        let value = typeof this.state.value === 'object' ? 0 : this.state.value

        return {
            value,
            increment: this.increment,
            reset: this.reset
        }
    }

    increment = () => {
        this.setState({
            value: this.state.value + 1,
        })
    }

    reset = () => {
        this.setState({
            value: 0,
        })
    }
}
