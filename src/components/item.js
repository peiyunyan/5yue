import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Item extends Component {
    render() {
        // console.log(this.props.itemData);
        let {itemData} = this.props;
        return (
            <div >
                {
                    itemData ? <dl onClick={this.toDetail.bind(this,itemData)}>
                        <dt>
                            <img src={itemData.downurl}/>
                        </dt>
                        <dd>
                            <p>{itemData.name}</p>
                        </dd>
                    </dl> : null
                }
            </div>
        )
    }
    toDetail(itemData) {
        let {history} = this.props
        console.log(history)
        history.push(`/detail/${itemData.id}`)
    }
}
export default withRouter(Item)