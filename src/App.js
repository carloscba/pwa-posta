import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import ArticleComponent from './ArticleComponent';
import jQuery from 'jquery';

class App extends Component {

    constructor () {
      super()
      this.state = {
        data: []
      }
    }
    
    componentDidMount = function(){
        jQuery.get('./data/data.json', function(results){
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
                            <ArticleComponent data={ this.state.data } onClick={ this.onClick } />
                        </div>
                    </div>

                </div>
            </div>
        )
    } 
}

export default App;
