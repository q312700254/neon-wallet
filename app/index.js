import 'raf/polyfill'
import { hot } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'

import store from './store/configureStore'
import Root from './components/Root'
import './styles/tippy.compiled.global.css'
import './styles/main.global.scss'

console.log('foo')

if (module.hot) module.hot.accept()

render(<Root store={store} />, document.getElementById('root'))
