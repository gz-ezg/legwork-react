import React from 'react'
import Test from './withCopyright'

@Test
class Page extends React.Component {
  render() {
    return <div>{this.props.haha}</div>
  }
}

export default Page
