import {CHAT_ROUTE, LOGIN_ROUTE} from "./Utils/consts";
import Login from "./components/Login";
import Chat from "./components/Chat";

export const publicRouters = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
]

export const privateRouters = [
    {
        path: CHAT_ROUTE,
        Component: Chat,
    },
]