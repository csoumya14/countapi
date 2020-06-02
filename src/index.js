import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import './myStyle.css'
import App from './App'
library.add(faCoffee)

ReactDOM.render(<App />, document.getElementById('root'))
