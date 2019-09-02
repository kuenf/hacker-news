import React from 'react';
import SearchResult from './SearchResult';
import Header from './Header';

const App = () => {
    return (
    <div className="ui container" data-test="App">
        <Header />
        <div className="ui hidden divider"></div>
        <SearchResult />
    </div>);
};

export default App;
