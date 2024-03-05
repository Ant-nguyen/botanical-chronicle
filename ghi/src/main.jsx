//@ts-check
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Onboard from './pages/Onboard.jsx'
import Error from './pages/Error.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {index:true, element: <Home/>},
            {path:"onboard", element: <Onboard/>},
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
