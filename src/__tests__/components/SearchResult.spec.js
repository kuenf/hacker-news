import React from 'react';
import { shallow } from 'enzyme';
import { SearchResult } from '../../components/SearchResult';

function setup(customProps) {
    const props = {
        results:[],
        ...customProps
    }
// console.log(props);
    const wrapper = shallow(<SearchResult {...props} fetchSearchResult={()=>{}}/>);

    return {
        props,
        wrapper
    };
}

describe("SearchResult component", () => {
    it("Should render the SearchResult component with no data", () => {
        const { wrapper } = setup();

        expect(wrapper.find('div[data-test="empty"]'));
        expect(wrapper.length).toEqual(1);
    });
    it("Should render the SearchResult component with data", () => {
        const results = {
            exhaustiveNbHits: false,
            hits: [{author: "mef",
                comment_text: null,
                created_at: "2016-12-21T17:33:14.000Z",
                created_at_i: 1482341594,
                num_comments: 289,
                objectID: "13230904",
                parent_id: null,
                points: 1107,
                relevancy_score: 7151,
                story_id: null,
                story_text: null,
                story_title: null,
                story_url: null,
                title: "Cat-proofing a cat feeding machine",
                url: "http://quinndunki.com/blondihacks/?p=3023"}],
            hitsPerPage: 20,
            nbHits: 246014,
            nbPages: 50,
            page: 0,
            params: "advancedSyntax=true&analytics=false&page=0&query=cat",
            processingTimeMS: 11,
            query: "cat"
        }
        const { wrapper } = setup({results: results});
        
        expect(wrapper.find('div[data-test="display-results"]'));
        expect(wrapper.length).toEqual(1);
    });
});
