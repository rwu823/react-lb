const maskStyle = require('./maskStyle')
const viewStyle = require('./viewStyle')

const LB = React.createClass({
  getDefaultProps(){
    return {
      show: false,
      className: '',
      maskStyle: {},
    }
  },
  componentDidMount(){
    window.addEventListener('keyup', (e)=>{
      if(e.which !== 27) return
      this.close()
    }, false)
  },

  getInitialState(){
    return {
      show: this.props.show
    }
  },

  open(e){
    this.setState({show: true})
  },

  close(e){
    this.setState({show: false})
  },

  preventClose(e){
    e.stopPropagation()
  },

  render(){
    const isShow = this.state.show
    const mergeMaskStyle = Object.assign({}, maskStyle, {
      opacity: isShow ? 1 : 0,
      pointerEvents: isShow ? 'all' : 'none',
    }, this.props.maskStyle)

    return (
      <div className={this.props.className} style={mergeMaskStyle} onClick={this.close}>
        <div style={viewStyle} onClick={this.preventClose}>
          {this.props.children}
        </div>
      </div>
    )
  }
})

module.exports = LB
