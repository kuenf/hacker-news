import React from 'react'
import { shallow } from 'enzyme'
import SearchResultItem  from '../../components/SearchResultItem'

const setup = (propsOverrides = {}) => {
    const props = {
        objectID: '1233',
        title: 'Hacker News',
        story_title: null,
        points: 123,
        created_at: '2016-12-21T17:33:14.000Z',
        num_comments: 3000,
        url: 'http://example.com',
        author: 'Hacker author',
        ...propsOverrides
    }

    const wrapper = shallow(<SearchResultItem  {...props} />)

    return {
        wrapper
    }
}

describe('SearchResultItem component', () => {
    it('Should render the SearchResultItem with title', () => {
        const { wrapper } = setup()
        expect(wrapper.find('div.header').text()).toContain('Hacker News')
    })

    it('Should render the SearchResultItem with story_title when title is empty', () => {
        const { wrapper } = setup({title: null, story_title: 'sub Hacker News'})
        expect(wrapper.find('div.header').text()).toContain('sub Hacker News')
    })

    it('Should render the SearchResultItem with points when it is set', () => {
        const { wrapper } = setup()
        expect(wrapper.find('div[data-test="points"]').text()).toContain('123')
    })

    it('Should render the SearchResultItem with points with 0 when it is null', () => {
        const { wrapper } = setup({points: null})
        expect(wrapper.find('div[data-test="points"]').text()).toContain('0')
    })

    it('Should render the SearchResultItem with num_comments when it is set', () => {
        const { wrapper } = setup()
        expect(wrapper.find('div[data-test="num_comments"]').text()).toContain('3000')
    })

    it('Should render the SearchResultItem with num_comments with 0 when it is null', () => {
        const { wrapper } = setup({num_comments: null})
        expect(wrapper.find('div[data-test="num_comments"]').text()).toContain('0')
    })

    it('Should render the SearchResultItem with num_comments with 0 when it is null', () => {
        const { wrapper } = setup({num_comments: null})
        expect(wrapper.find('div[data-test="author"]').text()).toContain('Hacker author')
    })
})
