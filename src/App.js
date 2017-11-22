import React, { Component } from 'react';
import './App.css';
import Toolbar from './Toolbar';
import MessageList from './MessageList';
import Footer from './Footer';
import axios from 'axios';


class App extends Component {

  state = {
    messages: []
  }

  componentDidMount = async () => {
    let messages = await axios.get('http://localhost:8000/messages')
    this.setState({ messages: messages.data })
     
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
          // numOfSelectedMsgs={numOfSelectedMsgs}
          />
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
