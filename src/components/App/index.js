import React, { Component } from 'react';
import './App.css';
import QuoteGenerator from '../QuoteGenerator';

class App extends Component {
    state = {
        quote: '',
        quoteAuthor: ''
    }

    handleClick = () => {
        console.log('button clicked');
    }

    render() {
        return (
            <div className="main-container">
                <QuoteGenerator
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}

export default App;