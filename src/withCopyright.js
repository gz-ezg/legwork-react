import React from 'react'

export default App => {
  return class extends React.Component {
  
    render() {
      console.log(App)
      return (
        <>
        {/* <App {...this.props} /> */}
        <div>测试</div>
        </>
      )
    }
  }
}
