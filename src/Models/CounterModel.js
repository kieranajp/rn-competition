import * as Govern from 'govern'
import Rebase from 're-base'
import base from '../rebase'

export default class CounterModel extends Govern.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: {},
            isLoading: true
        }
    }

    componentDidMount() {
        this.ref = base.syncState(this.props.collection, {
            context: this,
            state: 'score',
            then: () => this.setState({ isLoading: false })
        })
    }

    increment = () => {
        if (this.state.isLoading) {
            return
        } 

        this.setState(state => {
            const dayNum = `day_${this.props.day}`
            if (state.score[dayNum]) {
                state.score[dayNum] = state.score[dayNum] + 1
                return state
            }

            state.score[dayNum] = 1
            return state
        })
    }

    render() {
        const dailyScore = this.state.score[`day_${this.props.day}`] || 0
        const weeklyScore = Object.values(this.state.score).reduce((t, v) => t + v, 0)

        return {
            dailyScore,
            weeklyScore,
            isLoading: this.state.isLoading,
            increment: this.increment,
        }
    }
}
