import React, { Component } from 'react'
import Foot from '../components/foot'
import axios from 'axios'
import Item from '../components/item'
import IsLogin from '../util/isLoagin'

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            list :[]
        }
    }
    render() {
        let {list} = this.state
        console.log(list);
        return (
            <>
                <section>
                    {
                        list && list.filter(item => !item.curpage).map((item,ind) => {
                            return <Item key={ind} itemData={item} ></Item>
                        })
                    }
                </section>
                <Foot></Foot>
            </>
        )
    }
    componentDidMount() {
        axios.get('http://bb.shoujiduoduo.com/baby/bb.php?type=getlist&pagesize=30&listid=5').then((res) => {
            this.setState({
                list : res.data.list
            })
        })
    }
    
}
export default IsLogin(Home)