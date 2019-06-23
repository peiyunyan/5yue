import React, { Component } from 'react'

const IsLogin = (Com) => {
    return class extends Component{
        state = {
            isLog : false
        }
        render() {
            return this.state.isLog ? <Com></Com> : null
        }
        componentDidMount() {
            console.log(this);
            let {history} = this.props;
            if(window.localStorage.getItem('name')) {
                this.setState({isLog : true})
            } else {
                history.push('/my')
            }
        }
    }
}

export default IsLogin
