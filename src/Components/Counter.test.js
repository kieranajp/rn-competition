import React from 'react'
import Counter from './Counter'

import renderer from 'react-test-renderer'

it('renders without crashing', () => {
    const rendered = renderer.create(<Counter />).toJSON()
    expect(rendered).toBeTruthy()
})
