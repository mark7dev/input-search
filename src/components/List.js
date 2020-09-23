import React from 'react';
import moment from 'moment';
import './styles/List.css';

const List = ({ issuesData, issuesSearch }) => {

    const colorStyle = (labelColor) => {
        let color = `#${labelColor}`;
        return color
    }

    return ( 
        <div className="issues__container">
            { issuesSearch.map(issue => (
                <div
                  key={issue.id}
                  className="issue__box"
                >
                  <div className="main__box">
                    <div className="info__container">
                      <div className="warning__container">
                        <i className="fa fa-exclamation-circle warning" aria-hidden="true"></i>
                        <h4>{issue.title}</h4>
                      </div>
                      
                      { issue.labels.map((label, index) => (
                        <div 
                          className="label"
                          style={{ backgroundColor: colorStyle(label.color)}}
                          key={index}
                        >
                          {label.name}
                        </div>
                      ))}
                    </div>
                    { issue.comments !== 0 ?
                      <div className="comments">
                        <i className="fa fa-comment-o icons" aria-hidden="true"></i>
                        <span>{issue.comments}</span>
                      </div> : null
                    }
                  </div>
                  <p>#{issue.number} opened {moment(issue.updated_at).startOf().fromNow()} by {issue.user.login}</p>
                </div>
            ))}
        </div>
    );
}
 
export default List;