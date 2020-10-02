import React, { useState, useEffect, useRef, useContext } from 'react'

import { useRouter } from 'next/router'
import Head from 'next/head';

const Insert = (props) => {
    const router = useRouter()
    const { code } = router.query
    return (
        <div>
            <Head>
                <title>Insert LIst</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="description" content="React Socket.io Chatting application" />
                <meta name="keywords" content="react,socket.io,chatting,javascript" />
            </Head>
            <div className="navbar navbar-white sticky-top bg-head-chat flex-md-nowrap p-0" >
                <div className="navbar-brand col-sm-3 col-md-2 mr-0" >
                    Insert
                </div>
                <label level={3} style={{ fontSize: 22, color: '#fff' }}  > {state.user}</label>
                <div className="navbar-brand col-sm-3 col-md-2 mr-0">
                </div>
            </div>

        </div >
    )
}
export default Insert
