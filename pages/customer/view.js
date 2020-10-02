import React, { useState, useEffect, useContext } from 'react'
import { Card, Avatar } from 'antd';
import Head from 'next/head';
import Link from "next/link";

const View = () => {

    return (
        <div>
            <Head>
                <title>View LIst</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name="description" content="React Socket.io Chatting application" />
                <meta name="keywords" content="react,socket.io,chatting,javascript" />
            </Head>
          
            <main>
            <Link href={`/customer/123`} key={0}>
                        <div className="card" >
                            <Card
                                hoverable
                                bordered={false}
                                style={{ width: "100%" }}

                            >
                               123
                            </Card>
                        </div>
                    </Link>
                </main>
        </div>
    )
}
export default View