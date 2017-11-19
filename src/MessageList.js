import React from 'react';
import Message from './Message';


const MessageList = (props) => {
    console.log('messageList props ', props)

    let messages = props.messages.map(message => 
        <Message key={message.id} theMessage={message} handleStarred={props.handleStarred} handleRead={props.handleRead} handleSelected={props.handleSelected}/>)

    
    return (
        
            <div>
                
                {messages} 
          </div>
    
    )
}
export default MessageList