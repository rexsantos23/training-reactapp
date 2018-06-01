import React from 'react'
import ReactDOM from 'react-dom'


import { Provider } from 'react-redux'
import { createStore } from 'redux'

import ThemeReducers from './utils/redux/reducers/ThemeReducers'

import App from './App'

let store = createStore(
    ThemeReducers,
    {
        theme: 'default'
    },
    window.devToolsExtension && window.devToolsExtension()
)
ReactDOM.render(
    <Provider store={store}>
	    <App/>
    </Provider>,
    document.getElementById('root')
)