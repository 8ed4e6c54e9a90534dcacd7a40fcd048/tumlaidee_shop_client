import React from 'react'
import GLOBAL from './GLOBAL'

import socketIOClient from "socket.io-client";

const socket = socketIOClient(GLOBAL.BASE_URL.URL_IO);

export const SocketContext = React.createContext(socket);