import * as Govern from 'govern'
import Rebase from 're-base'
import base from '../rebase'

export default class CounterModel extends Govern.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: {}
        }
        
        Array.from({ length: 7 }, (v, i) => (
            this.state.score[`day_${i + 1}`] = 0
        ))
    }

    componentDidMount() {
        this.ref = base.syncState(this.props.collection, {
            context: this,
            state: 'score',
        })
    }

    increment = () => {
        this.setState(state => {
            state.score[`day_${this.props.day}`] = state.score[`day_${this.props.day}`] + 1
            return state
        })
    }

    render() {
        const dailyScore = this.state.score[`day_${this.props.day}`]
        const weeklyScore = Object.values(this.state.score).reduce((t, v) => t + v, 0)

        return {
            dailyScore,
            weeklyScore,
            increment: this.increment,
        }
    }
}
