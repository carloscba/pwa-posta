import { Component } from 'react'

export class MainComponent extends Component{    
    
    getInitialState = function(){
        return {
            data : [],
        }
    }

    componentDidMount = function(){
        $.get('./data/data.json', function(results){
            console.log(results);
            this.setState({
                data: results
            })
        }.bind(this))

    }

    componentWillUnmount = function(){
        this.serverRequest.abort();
    }

    onClick = function(article){
        console.log(article)
    }

    render= function(){
        return(
            <div>
                <MenuComponent />
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <ArticleComponent data={ this.state.data } onClick = { this.onClick } />
                        </div>
                    </div>

                </div>
            </div>
        )
    } 
};