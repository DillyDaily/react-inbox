import React from 'react';
import Message from './Message';

const MessageList = (props) => {
    console.log('messageList props ', props)
   let messageTitle = props.messages.map(message => <Message key={message.id} theMessage={message} />)
    
    return (
        
            <div>
       
                {messageTitle}
              
          </div>
    
    )
}
export default MessageList