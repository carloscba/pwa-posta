var React = require('react');

module.exports = React.createClass({
    
    onClickHandler : function(article){
        this.props.onClick(article)
    },

    render : function(){

        var articleLayout = this.props.data.map(function(article, index){
            return (
                <article key={ index }>
                    <h2><a href="#" article={ article } onClick={ this.onClickHandler }>{ article.title }</a></h2>
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