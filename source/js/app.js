var React = require('react');
var ReactDOM = require('react-dom');

var MenuComponent = require('./MenuComponent');

var App = React.createClass({
    
    getInitialState : function(){
        return {
            data : [],
            schedule : [],
        }
    },

    componentDidMount : function(){
        /*
        $.get('./', function(results){
            this.setState({
                schedule: results[0].data
            })
        }.bind(this))
        */
    },

    componentWillUnmount : function(){
        this.serverRequest.abort();
    },

    render: function(){
        return(
            <div>
                <MenuComponent />
                React
            </div>
        )
    } 
});

ReactDOM.render(
    <App />,
    document.getElementById('appContainer')
);