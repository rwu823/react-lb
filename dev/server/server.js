const express = require('express')
const c = require('chalk')
const server = express()
const cfg = require('../config')
const devMid = require('webpack-dev-middleware')
const hotMid = require('webpack-hot-middleware')

const webpack = require('webpack')
const webpackConf = require('../../webpack.conf')
const webpackCompiler = webpack(webpackConf)

const rootPath = `${__dirname}../../../`

server
  .use(devMid(webpackCompiler, {
    stats: {
      colors: true
    },
  }))
  .use(hotMid(webpackCompiler))
  .get('/', (req, res)=>{
    res.sendFile(`index.html`, {
      root: `${rootPath}/dev`
    })
  })
  .listen(cfg.port, ()=>{
    console.log(`🌎 The server is listening on: http://localhost:${c.yellow(cfg.port)}`)
  })
