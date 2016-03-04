const {assert} = require('chai')
window.React = require('react')
const { mount } = require('enzyme')
const LB = require('../src/index.jsx')

describe('#Testing React Component <LB />', ()=>{
  let Component
  beforeEach(()=>{
    Component = mount(<LB />)
  })

  it('has component', ()=>{
    assert.isOk(Component)
  })

  it('default props', ()=>{
    const props = Component.props()

    assert(props.show === false, '[show]: false')
  })
})
