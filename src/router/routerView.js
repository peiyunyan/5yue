import React from 'react'
import { Switch,Route,Redirect } from "react-router-dom";

function RouterView (props) {
    let {routerConfig} = props;
    let routerArr = routerConfig.filter(item => !item.redirect);
    let redirectArr = routerConfig.filter(item => item.redirect).map((item,ind) => <Redirect from={item.path} to={item.redirect} key={ind}></Redirect>)
    return <Switch>
        {
            routerArr && routerArr.map((item,ind) => {
                return <Route path={item.path} key={ind} render={(props) => {
                    return < item.component {...props} child={item.children}/>
                }}></Route>
            }).concat(redirectArr)
        }
    </Switch>
}

export default RouterView