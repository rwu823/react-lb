window.React = require('react')
const {render} = require('react-dom')

const LB = require('../src/index.jsx')

const App = React.createClass({
  openLB1(e){
    this.refs.LB1.open()
  },
  render(){
    const ss = {
      padding: 20,
      height: 300,
      width: 700,
    }

    return (
      <div>
        <a onClick={this.openLB1}>Open LB1</a>
        <LB ref="LB1">
          <div style={ss}>
            LightBox 1
          </div>
        </LB>
      </div>
    )
  }
})

render(<App />, document.querySelector('#app'))
