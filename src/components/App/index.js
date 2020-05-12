import React, { Component } from 'react';
import './App.css';
import QuoteGenerator from '../QuoteGenerator';

class App extends Component {
    state = {
        quotes: [],
        quote: 'Search for a quote',
        quoteAuthor: ' '
    }
    componentDidMount() {
        const getQuotes = async () => {
            const response = await fetch('https://type.fit/api/quotes')
            const quotes = await response.json();
            this.setState({ quotes: quotes });
        }
        getQuotes()
            .catch(error => {
                console.log("Error", error)
            })
    }

    handleClick = () => {
        const quotesText = this.state.quotes.map(quote => quote.text)
        const quotesAuthor = this.state.quotes.map(quote => quote.author)
        const rand = Math.floor(Math.random() * this.state.quotes.length)
        this.setState({ quote: quotesText[rand], quoteAuthor: quotesAuthor[rand] });
    }

    render() {
        return (
            <div className="main-container">
                <QuoteGenerator
                    handleClick={this.handleClick}
                    quote={this.state.quote}
                    quoteAuthor={this.state.quoteAuthor}
                />
            </div>
        )
    }
}

export default App;