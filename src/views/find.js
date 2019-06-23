import React, { Component } from 'react'
import Foot from '../components/foot'
import {NavLink} from 'react-router-dom'
import RouterView from '../router/routerView'


export default class Find extends Component {
    render() {
        let {child} = this.props
        return (
            <>
            <section>
                <div className="top">
                    <NavLink to="/find/issue">发布</NavLink>
                    <NavLink to="/find/payClose">关注</NavLink>
                </div>
                <RouterView routerConfig={child}></RouterView>
            </section>
            <Foot></Foot>
        </>
        )
    }
}
