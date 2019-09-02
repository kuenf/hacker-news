import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
    return (
        <div data-test="header" className="ui two column grid menu inverted">
            <div className="five wide column">
                <h2 className="ui orange inverted header ">
                    <i className="hacker news icon"></i>
                    <div className="content">
                        Hacker News
                        <div className="sub header">Search Hacker News</div>
                    </div>
                </h2>
            </div>
            <div className="seven wide column middle aligned">
                <SearchBar />
            </div>
        </div>
    );
};

export default Header;