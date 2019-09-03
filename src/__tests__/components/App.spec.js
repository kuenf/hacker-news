import React from 'react'
import { shallow } from 'enzyme'
import App from '../../components/App'

const setup = (customProps) => {
    const props = {...customProps}
    const wrapper = shallow(<App {...props} />)

    return {
        wrapper
    }
}

describe('App', () => {
    it('renders without crashing', () => {
        const { wrapper } = setup()
        expect(wrapper.find('div[data-test="App"]').length).toBe(1)
    })
})
