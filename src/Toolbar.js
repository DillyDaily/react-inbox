import React from 'react';

const Toolbar = (props) => {
    console.log('Toolbar props ', props)
    
   let someSelected = props.numOfSelectedMsgs > 0 && props.numOfSelectedMsgs < props.messages.length ? '-minus' : null;
   let allSelected = props.numOfSelectedMsgs == props.messages.length ? '-check' : null;
   let noneSelected = props.numOfSelectedMsgs == 0 ? '' : null;   

//    toggleShowCompose = () => {
//        props.toggleShowCompose
//    } 

    return (
        <div className="navbar navbar-default" role="navigation">
          <div className="row toolbar">
           <div className="col-md-12">

            <div className="navbar-headder">
                <a className="navbar-brand" href="/"> Welcome to Your Inbox</a>
            
           
            <p className="pull-right">
             <span className="badge badge">2</span>
               unread messages
            </p>
            </div>
            
            <a className="btn btn-danger" onClick={props.toggleComposeForm}>
             <i className="fa fa-plus"></i>
            </a>

            <button className="btn btn-default">
              <i className="fa fa-minus-square-o"></i>
            </button>

            <button className="btn btn-default">Mark As Read</button>

            <button className="btn btn-default">Mark As Unread</button>

            <select className="form-control label-select">
                <option>Apply label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select">
                <option>Remove label</option>
                <option value="dev">dev</option>
                <option value="personal">personal</option>
                <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default">
                <i className="fa fa-trash-o"></i>
            </button>

       </div>
      </div>
    </div>
    )
}
export default Toolbar