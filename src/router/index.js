import React from 'react'
import { BrowserRouter } from "react-router-dom";
import routerConfig from './routerConfig'
import RouterView from './routerView'

function Routers (){
    return <BrowserRouter>
        <RouterView routerConfig={routerConfig}></RouterView>
    </BrowserRouter>
}

export default Routers