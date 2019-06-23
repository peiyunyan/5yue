import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export default class Foot extends Component {
    render() {
        return (
            <div className="foot">
                <NavLink to="/home">首页</NavLink>
                <NavLink to="/classify">分类</NavLink>
                <NavLink to="/find">发现</NavLink>
                <NavLink to="/shopCar">购物车</NavLink>
                <NavLink to="/my">我的</NavLink>
            </div>
        )
    }
}
