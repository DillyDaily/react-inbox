import React from 'react';

const Message = (props) => {
    console.log('message props ', props)
    
    let subject = props.theMessage.subject;
    let starred = props.theMessage.starred;
    let selected = props.theMessage.selected;
    let read = props.theMessage.read;
    // let devLabels = props.theMessage.labels[0];
    // let persLabels = props.theMessage.labels[1];

    let readUnread = read ? "read" : "unread"
    let starUnstar = starred ? "star" : "star-o"
    let checkUncheck = selected ? "checked" : ""
    let selectUnselect = selected ? "selected" : ""
    // let devNodev = devLabels ? "" : ""
    
    return (

        <div className={`row message ${readUnread} ${selectUnselect}`}>
            <div className="col-xs-1">
              <div className="row">
                <div className="col-xs-2">
                  <input type="checkbox" defaultChecked={`${checkUncheck}`} />
                </div>
                <div className="col-xs-2">
                  <i className={`star fa fa-${starUnstar}`}></i>
                </div>
              </div>
            </div>
            <div className="col-xs-11">
            <span className="label label-warning">dev</span>
              <span className="label label-warning">gschool</span>
              <a href="#">
                {subject}
              </a>
            </div>

            
          </div>



    )
}
export default Message