import React, { useState, useEffect, useRef, useContext } from 'react'
import Link from "next/link";
import Router, { useRouter } from 'next/router'
import Head from 'next/head';
import { CaretLeftOutlined, SendOutlined } from '@ant-design/icons';
import ChatView from '../../components/chat/chat.js'
import { SocketContext } from '../../socket-context';
const Chat = (props) => {
    const socket = useContext(SocketContext);
    const router = useRouter()
    const { user } = router.query
    const bottomRef = useRef();
    const [state, setState] = useState({
        user: "max",
        target: user,
        messages_id: '',
        messages: []
    });
    const [limit, setLimit] = useState(10);
    const [debounceMessage, setDebounceMessage] = useState('');
    const receiveMessage = () => {
        socket.on('receive new message' + state.user + state.target, (messages) => {
            console.log("receive new message", messages);
            setState({
                ...state,
                messages_id: messages._id,
                messages: messages.res_messages,
            })
            setDebounceMessage('');
            scrollToBottom();
        });
        socket.on('receive message' + state.messages_id, (messages) => {
            setState({
                ...state,
                messages_id: messages._id,
                messages: messages.res_messages,
            })
            setDebounceMessage('');
            scrollToBottom();
        });

        if (!state.user) {
            Router.push({
                pathname: '/'
            })
        }
    };

    useEffect(() => {
        receiveMessage();
        readMessages();
        return () => {
            console.log("unuseEffect");
        }
    }, []);

    const scrollToBottom = () => {
        bottomRef.current !== null && bottomRef.current.scrollIntoView({
            behavior: "auto",
            block: "start",
        });
    };

    const readMessages = () => {
        socket.emit('read message', state.user, state.target, limit);
    };

    const sendMessages = () => {
        const msg = {
            user: state.user, target: state.target, msg: debounceMessage, isPicture: false
        }
        socket.emit('send message', state.messages_id, msg, limit)
        receiveMessage();
    };


    return (
        <div>
            <Head>
                <title>Chat LIst </title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="description" content="React Socket.io Chatting application" />
                <meta name="keywords" content="react,socket.io,chatting,javascript" />
            </Head>
            <div className="navbar navbar-white sticky-top bg-head-chat flex-md-nowrap p-0" >
                <div className="navbar-brand col-sm-3 col-md-2 mr-0" >
                    <Link href={`/chat`}>
                        <CaretLeftOutlined style={{ fontSize: 22, color: '#fff' }} />
                    </Link>
                </div>
                <label level={3} style={{ fontSize: 22, color: '#fff' }}  > {state.target}</label>
                <div className="navbar-brand col-sm-3 col-md-2 mr-0">
                </div>
            </div>
            <div className="container-chat">
                <button className="see-more-chat" onClick={() => {
                    let new_limit = limit + 10
                    setLimit(new_limit); readMessages();
                }}>see more</button>
                <main>{state.messages && <ChatView data={state.messages} />}</main>
                <div ref={bottomRef} className="list-bottom"></div>
            </div>
            <div className="d-flex  justify-content-center" >
                <input className="input-chat" type="text" value={debounceMessage} onChange={(e) => setDebounceMessage(e.target.value)} onKeyPress={e => {
                    if (e.key === 'Enter') {
                        sendMessages()
                    }
                }} />
                <SendOutlined className="send-message" onClick={() => sendMessages()} />
            </div>
        </div >
    )
}
export default Chat
