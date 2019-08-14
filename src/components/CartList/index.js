import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartList extends Component {
  constructor() {
    super()
    this.state = {
      cartList: []
    }
    console.log(this)
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>商品名称</th>
            <th>价格</th>
            <th>数量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>苹果</td>
            <td>8888</td>
            <td>10</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default connect(e => ({ ...e.cart }))(CartList)
