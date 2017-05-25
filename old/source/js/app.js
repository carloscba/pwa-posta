var ReactDOM = require('react-dom');

var MainComponent = require('./MainComponent');
var MenuComponent = require('./MenuComponent');
var ArticleComponent = require('./ArticleComponent');

ReactDOM.render(
    <MainComponent />,
    document.getElementById('appContainer')
);