import React from 'react'
import Router from "next/router";
import Header from '../template/Header'
import Meta from '../template/Meta'
import Footer from '../template/Footer'
import Nav from '../template/Nav'
import Menu from '../template/Menu'
import Loging from './login'


import 'antd/dist/antd.css';

import '../assets/scss/styles.scss'


function MyApp({ Component, pageProps }) {
    let user_login = null
    if (process.browser) {
         user_login = JSON.parse(localStorage.getItem('user_login'))
    }

    if (user_login === null) {
        return (
            <Loging />
        )
    } else {
        return (
            <>
                <Meta />
                <Header />
                <Nav />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                            <Component {...pageProps} />
                        </main>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default MyApp;
