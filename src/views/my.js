import React, { Component } from 'react'
import Foot from '../components/foot'


export default class My extends Component {
    render() {
        return (
            <>
                <section>
                    <input type="text"/>
                    <button onClick={this.loginFn.bind(this)}>登录</button>
                </section>
                <Foot></Foot>
            </>
        )
    }
    loginFn() {
        window.localStorage.setItem('name',"aaa")
        let {history} = this.props;
        history.go(-1);
    }
}
