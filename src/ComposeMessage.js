import React, { Component } from 'react'

class ComposeMessage extends Component {

    state = {
        subject: '',
        body: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addMessage(this.state)
    }

  render () {
    return (
        <form className="form-horizontal well" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <h4>Compose Message</h4>
          </div>
        </div>
        <div className="form-group">
          <label for="subject" className="col-sm-2 control-label">Subject</label>
          <div className="col-sm-8">
            <input 
                type="text" 
                className="form-control" 
                id="subject" 
                placeholder="Enter a subject" 
                name="subject" 
                value={this.state.subject}
                onChange={(e) => this.setState ({ subject: e.target.value})}/>
          </div>
        </div>
        <div className="form-group">
          <label for="body" className="col-sm-2 control-label">Body</label>
          <div className="col-sm-8">
            <textarea 
                name="body" 
                id="body" 
                className="form-control"
                value={this.state.body}
                onChange={(e) => this.setState ({ body: e.target.value})}>
                </textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-8 col-sm-offset-2">
            <input type="submit" value="Send" className="btn btn-primary" />
          </div>
        </div>
      </form>
    )
  }
}

export default ComposeMessage