import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PlantForm from './pages/PlantForm.jsx'
import Home from './pages/Home.jsx'
import Onboard from './pages/Onboard.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Error from './pages/Error.jsx'
import PlantDetail from './pages/PlantDetail.jsx'
import UpdatePlant from './pages/UpdatePlant.jsx'
import PlantLogForm from './pages/PlantLogForm.jsx'

import { store } from './store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'onboard', element: <Onboard /> },
            { path: 'login', element: <Login /> },
            { path: 'signup', element: <Signup /> },
            { path: 'plants/add', element: <PlantForm /> },
            { path: 'plants/:plant_id', element: <PlantDetail /> },
            { path: 'plants/edit/:plant_id', element: <UpdatePlant /> },
            { path: 'plants/:plant_id/plant-logs/add', element: <PlantLogForm /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
)
