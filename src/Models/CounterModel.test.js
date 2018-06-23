import React from 'react'
import CounterModel from './CounterModel'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
    const rendered = renderer.create(<CounterModel />)
})
