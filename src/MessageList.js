import React from 'react';
import Message from './Message';
import Toolbar from './Toolbar';

const MessageList = (props) => {
    console.log('messageList props ', props)
   let messages = props.messages.map(message => <Message key={message.id} theMessage={message}
     />)
    
    return (
        
            <div>
                {messages}
          </div>
    
    )
}
export default MessageList