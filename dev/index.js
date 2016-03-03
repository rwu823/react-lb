window.React = require('react')
const {render} = require('react-dom')

const LB = require('../src/index.jsx')

const App = React.createClass({
  render(){
    const ss = {
      padding: 20,
      height: 300,
      width: 700,
    }
    const ssm = {
      //backgroundColor: 'rgba(0,0,0, .1)'
    }
    return (
      <div>
        <LB show={true} maskStyle={ssm}>
          <div style={ss}>
            hello Lightbox!!
          </div>
        </LB>
      </div>
    )
  }
})

render(<App />, document.querySelector('#app'))
