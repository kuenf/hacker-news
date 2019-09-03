import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/Header'

const setup = () => {
    const props = {}
    const wrapper = shallow(<Header {...props} />)

    return {
        props,
        wrapper
    }
}

describe('Header', () => {
    it('renders', () => {
        const { wrapper } = setup()
        expect(wrapper.find('div[data-test="header"]').length).toEqual(1)
    })
})
