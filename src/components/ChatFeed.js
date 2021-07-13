import React from 'react'

import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

function ChatFeed(props) {
    const {chats, activeChat, userName, messages} = props;
    
    const chat = chats && chats[activeChat];
    // 21:17
    console.log(chat, userName, messages )
    return (
        <div> ChatFeed</div>
    );
}

export default ChatFeed;