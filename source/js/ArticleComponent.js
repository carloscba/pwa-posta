var React = require('react');

module.exports = React.createClass({
    render : function(){

        var articleLayout = this.props.data.map(function(article, index){
            return (
                <article key={ index }>
                    <h2>{ article.title }</h2>
                    <p>{ article.resume }</p>
                </article>
            )
        }.bind(this));
        return (
            <div>
                { articleLayout }
            </div>
        )
    }
})