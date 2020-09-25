import React, { useState } from 'react';
import './styles/Search.css';

const Search = ({issuesData, setIssuesSearch}) => {

    const [filteredIssues, setFilteredIssues] = useState([]);
    const [issueInput, setIssueInput] = useState('');
    const [activeIssue, setActiveIssue] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const handleChange = e => {
        setIssueInput(e.target.value.toLowerCase());

        const results = issuesData.filter(item => item.title.toLowerCase().search(issueInput) !== -1);

        setFilteredIssues(results);
        setIssuesSearch(results);
        setShowResults(true);
    }

    const onKeyDown = e => {
        console.log(activeIssue);
        if(e.keyCode === 13) {
            console.log('13 ENTER');
            setActiveIssue(0);
            setIssueInput('');
            setShowResults(false);
            setIssuesSearch([filteredIssues[activeIssue]]);
            console.log(issueInput);
        } else if(e.keyCode === 38) {
            console.log('UP!');
            if(activeIssue === 0) {
                return;
            }
            setActiveIssue(activeIssue-1);
        } else if(e.keyCode === 40) {
            console.log('DOWN!');
            if(activeIssue === filteredIssues.length -1) {
                console.log(activeIssue);
                return;
            }
            setActiveIssue(activeIssue+1);
        }
    }

    const onBlurInput = () => {
        setShowResults(false);
    }

    const onFocusInput = () => {
        setShowResults(true);
    }

    return ( 
        <div className="search__container">
            <div className="search__box">
                <input 
                    type="text"
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    value={issueInput}
                    onBlur={onBlurInput}
                    onFocus={onFocusInput}
                />
                <i className="fa fa-search iconSearch" aria-hidden="true"></i>
            </div>
            {issueInput && showResults ?
            <div className="results__box">
                {filteredIssues.map((issue, index) => (
                    <div 
                        key={issue.id}
                        className={index === activeIssue ? "active" : "issue__searched__box"}
                    >
                        <p>{issue.title}</p> 
                    </div>
                ))}
            </div> : null   
            }
        </div>
    );
}
 
export default Search;