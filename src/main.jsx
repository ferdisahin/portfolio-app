import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import store from './store.js'
import { Provider } from 'react-redux'

import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/work",
    element: <Work />
  },
  // {
  //   path: "/work/:id",
  //   element: 'Test'
  // },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: '*',
    element: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
,
)
