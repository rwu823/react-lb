const {assert} = require('chai')
window.React = require('react')
const { mount } = require('enzyme')
const Component = require('../src/index.jsx')

describe('#test', ()=>{
  let component
  beforeEach(()=>{
    component = mount(<Component />)
  })

  it('has component', ()=>{
    assert.isOk(component)
  })


})
