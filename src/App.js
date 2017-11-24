import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import MessageList from './MessageList';
import Footer from './Footer';
import axios from 'axios';
import ComposeMessage from './ComposeMessage';


class App extends Component {

  state = {
    messages: [],
    showCompose: false
  }

  componentDidMount = async () => {
    let messages = await axios.get('http://localhost:8000/messages')
    this.setState({ messages: messages.data })
     
  }

  toggleComposeForm = () => {
    this.setState({ showCompose: !this.state.showCompose })
  }

  addMessage = async (message) => {
    let newMessage = {
      ...message,
      //^ Not Destructured: 
      //subject: message.supbject,
      //body: message.body 

      labels: JSON.stringify([]),
      read: false,
      selected: false,
      starred: false
    }
    let newMessages = await axios.post(`http://localhost:8000/messages`, newMessage)
  }
 
  handleStarred = (isStarred) => {
    this.setState((prevState) => { 
      let index = prevState.messages.indexOf(isStarred)
      prevState.messages[index].starred = !prevState.messages[index].starred;
      return {...isStarred}
  })
}
  handleRead = (isRead) => {
    this.setState((prevState) => { 
      let index = prevState.messages.indexOf(isRead)
      prevState.messages[index].read = !prevState.messages[index].read;
      return {...isRead}
  })
}
  handleSelected = (isSelected) => {
    this.setState((prevState) => { 
      let index = prevState.messages.indexOf(isSelected)
      prevState.messages[index].selected = !prevState.messages[index].selected;
      return {...isSelected}
  })
}


render() {
  // let numOfSelectedMsgs = this.props.messages.filter(messages => messages.selected).length;
    return (
      <div className="App">
        <Toolbar 
          messages={this.state.messages} 
          showCompose={this.state.showCompose}
          toggleComposeForm={this.toggleComposeForm}
          // numOfSelectedMsgs={numOfSelectedMsgs}
          />
          {this.state.showCompose ? <ComposeMessage addMessage={this.addMessage}/> : null}
             {/* {this.state.showCompose && <ComposeMessage />} */}
             {/* ^does the same thing as line 60 */}

        <MessageList 
          messages={this.state.messages}
          handleStarred={this.handleStarred}
          handleSelected={this.handleSelected}
          handleRead={this.handleRead}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
