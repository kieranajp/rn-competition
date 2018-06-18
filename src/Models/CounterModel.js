import * as Govern from 'govern'

export default class CounterModel extends Govern.Component {
    static defaultProps = {
        defaultValue: 0,
    }

    constructor(props) {
        super(props)
        this.state = {
            value: props.defaultValue
        }
    }

    render() {
        return {
            value: this.state.value,
            increment: this.increment,
            reset: this.reset
        }
    }

    increment = () => {
        this.setState({
            value: this.value + 1,
        })
    }

    reset = () => {
        this.setState({
            value: 0,
        })
    }
}
