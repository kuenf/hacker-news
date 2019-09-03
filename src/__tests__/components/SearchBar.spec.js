import React from 'react'
import { shallow } from 'enzyme'
import { SearchBar } from '../../components/SearchBar'

const setup = () => {
    const wrapper = shallow(<SearchBar handleSubmit={() => {}} />)

    return {
        wrapper
    }
}

describe('SearchBar component', () => {
    it('Should render the searchbar', () => {
        const { wrapper } = setup()

        expect(wrapper.find('form').hasClass('ui form'))
        expect(wrapper.find('form').length).toEqual(1)
    })
})
