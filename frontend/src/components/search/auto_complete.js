import React from "react";
import './auto_complete.css'

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSuggestions: false,
            filteredSuggestions: [],
            currentIndex: 0,
            input: ""
        };
    }

    onChange = e => {
        const { suggestions } = this.props;
        const input = e.currentTarget.value;
        // checks to see if the input matches anything in the suggestions
        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(input.toLowerCase()) > -1
        );

        this.setState({
            currentIndex: 0,
            filteredSuggestions,
            showSuggestions: true,
            input: e.currentTarget.value
        });
    };
    
    onKeyDown = e => {
        const { currentIndex, filteredSuggestions } = this.state;
        // does the keyCode match the enter key?
        if (e.keyCode === 13) {
            this.setState({
                currentIndex: 0,
                filteredSuggestions: [filteredSuggestions[currentIndex]],
                showSuggestions: true,
                input: filteredSuggestions[currentIndex]
            });
            // does the keyCode match the up arrow?
        } else if (e.keyCode === 38) {
            if (currentIndex === 0) {
                return;
            }
            this.setState({ currentIndex: currentIndex - 1 });
        }
        // does the keyCode match the down arrow? 
        else if (e.keyCode === 40) {
            if (currentIndex - 1 === filteredSuggestions.length) {
                return;
            }
            this.setState({ currentIndex: currentIndex + 1 });
        }
    };
    
    onSelect = e => {
        this.setState({
            currentIndex: 0,
            filteredSuggestions: [e.currentTarget.innerText],
            showSuggestions: true,
            input: e.currentTarget.innerText
        })
    };
    
    render() {
        const { onChange, onSelect, onKeyDown } = this;
        const { currentIndex, filteredSuggestions, showSuggestions, input} = this.state;
            
        let suggestionsListComponent;

        if (showSuggestions && input) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            // Flag the active suggestion with a class
                            if (index === currentIndex) {
                                className = "suggestion-active";
                            }
                            return (
                                <li className={className} key={suggestion} >
                                    <span onClick={onSelect}>{suggestion}</span> 
                                </li> 
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="suggestion-inactive">
                        <em>No suggestions available</em>
                    </div>
                );
            }
        }

        return (
            <div className="auto-complete-container">
                <input
                    className="auto-complete"
                    type="text"
                    placeholder="Find friends by email"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={input}
                />
                {suggestionsListComponent}
            </div>
        );
    }
}

export default AutoComplete;
