import React, { Component } from 'react';

class Message extends Component {

render() {
    console.log('message class info ', this.props)
    let subject = this.props.theMessage.subject;
    let starred = this.props.theMessage.starred;
    let selected = this.props.theMessage.selected;
    let read = this.props.theMessage.read;
    let devLabels = this.props.theMessage.labels[0];
    let persLabels = this.props.theMessage.labels[1];

    let readUnread = read ? "read" : "unread"
    let starUnstar = starred ? "star" : "star-o"
    let selectUnselect = selected ? "selected" : ""
    let checkUncheck = selectUnselect ? "checked" : ""
    let devNodev = devLabels ? "dev" : ""
    let gschoolYN = persLabels ? "gschool" : ""
    
    return (

        <div className={`row message ${readUnread} ${selectUnselect}`}>
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input type="checkbox" defaultChecked={selected} 
                  onChange={()=> this.props.handleSelected(this.props.theMessage)}/>
                </div>
                <div className="col-xs-2">
                  <i className={`star fa fa-${starUnstar}`}
                  value={starred}
                  onClick={()=> this.props.handleStarred(this.props.theMessage)}></i>
                </div>
              </div>
            </div>
            <div className="col-xs-11">
            <span className="label label-warning">{devNodev}</span>
              <span className="label label-warning">{gschoolYN}</span>
              <a href="">
                {subject}
              </a>
            </div>
          </div>
       );
     }
   } 

export default Message