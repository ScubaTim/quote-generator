import React, { Component } from 'react';
import './App.css';
import QuoteGenerator from '../QuoteGenerator';

class App extends Component {
    state = {
        quote: '',
        quoteAuthor: ''
    }

    render() {
        return (
            <div class="main-container">
                <QuoteGenerator />
            </div>
        )
    }
}

export default App;