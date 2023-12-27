import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
  Avatar
} from '@chatscope/chat-ui-kit-react';
import logo from '../../assets/askmeai_logo.png'

const API_KEY ="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"

function Chat() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm CTU - Argao Ask Me AI! How can i help you today?",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendRequest = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsTyping(true);

    try {
      const response = await processMessageToChatGPT([...messages, newMessage]);
      const content = response.choices[0]?.message?.content;
      if (content) {
        const chatGPTResponse = {
          message: content,
          sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
      }
    } catch (error) {
      console.log("Error processing message:", error);
    } finally {
      setIsTyping(false);
    }
  };

  async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
      const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
      return { role, content: messageObject.message };
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        { role: "system", content: "I'm a Student using ChatGPT for learning" },
        ...apiMessages,
      ],
    };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    });

    return response.json();
  }

  return (
    <>
      <NavigationBar/>
        <MainContainer style={{height: 'auto', margin: '2rem',  background: '#04050A', borderRadius: '10px', border: 'none'}}>
          <ChatContainer style={{minHeight: '70vh', height: '70vh', margin: '2rem',  background: '#04050A', borderRadius: '10px'}}>       
              <MessageList 
                scrollBehavior="smooth" 
                style={{margin: '2rem',  background: '#04050A', borderRadius: '10px'}}
                typingIndicator={isTyping ? <TypingIndicator style={{background: '#04050A'}} content="Ask Me AI is typing" /> : null}
              >
                {messages.map((message, i) => {
                  console.log(message)
                  return <>
                      
                      <Message style={{padding: '1rem 1rem 0 0'}} key={i} model={message}>{message.sender !== 'user' && <Avatar src={logo} name="Ask Me AI" />}</Message> 
                    </>
                })}
              </MessageList>
              <MessageInput attachButton={false} style={{margin: '2rem',  background: '#04050A', borderRadius: '10px', border: 'none'}} placeholder="Send a Message" onSend={handleSendRequest} />        
            </ChatContainer>
        </MainContainer>
      <Footer/>
    </>
  )
}

export default Chat
