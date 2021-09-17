import React, {Component} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import {privateRouters, publicRouters} from "../router";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../Utils/consts";

const AppRouter = () => {
    const user = true;
    return user ?
        (
            <Switch>
                {
                    privateRouters.map( ( {path, Component} ) =>
                        <Route path = {path} component = {Component} exact = {true}/>
                    )
                }
                <Redirect to = {CHAT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {
                    publicRouters.map( ( {path, Component} ) =>
                        <Route path = {path} component = {Component} exact = {true}/>
                    )
                }

                <Redirect to = {LOGIN_ROUTE}/>
            </Switch>
        );
};

export default AppRouter;