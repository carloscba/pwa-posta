import { Component } from 'react'

export class ArticleComponent extends Component{
    
    onClickHandler = function(){
        //this.props.onClick(article)
    }
    render = function(){

        var articleLayout = this.props.data.map(function(article, index){
            return (
                <article key={ index }>
                    <h2><a href="#" onClick={ this.onClickHandler }>{ article.title }</a></h2>
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
}