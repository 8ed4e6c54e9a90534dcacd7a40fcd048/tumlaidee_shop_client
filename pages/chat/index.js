import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import ListChat from '../../components/chat/list.js'
import * as dataSource from '../../dataSource/chat/data.json';
import { SocketContext } from '../../socket-context';
const List = () => {
    const socket = useContext(SocketContext);
    const data = dataSource.data

    const new_data = data.find(val => val.id === "max")
    const [state, setState] = useState({
        user: "max",
        data: []
    });
    const readMessages = () => {
        setState({
            ...state,
            data: new_data.contents
        })
    };

    useEffect(() => {
        readMessages();
    }, []);

    return (
        <div>
            <Head>
                <title>Chat LIst</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="description" content="React Socket.io Chatting application" />
                <meta name="keywords" content="react,socket.io,chatting,javascript" />
            </Head>
            <div className="navbar  sticky-top bg-head-chat flex-md-nowrap p-0" >
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                    <HomeOutlined style={{ fontSize: 22, color: '#fff' }} />
                </a>
                <label level={3} style={{ fontSize: 22, color: '#fff' }} >LIVE CHAT</label>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">
                            <UserOutlined style={{ fontSize: 22, color: '#fff' }} />
                        </a>
                    </li>
                </ul>
            </div>
            <main>{state.data && <ListChat user={state.user} data={state.data} />}</main>
        </div>
    )
}
export default List