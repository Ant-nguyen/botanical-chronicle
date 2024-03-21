import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import PlantForm from './pages/PlantForm.jsx'
import Home from './pages/Home.jsx'
import Onboard from './pages/Onboard.jsx'
import Signup from './pages/Signup.jsx'
import Error from './pages/Error.jsx'
import PlantDetail from './pages/PlantDetail.jsx'
import UpdatePlant from './pages/UpdatePlant.jsx'
import PlantLogForm from './pages/PlantLogForm.jsx'
import PlantLogDetail from './pages/PlantLogDetail.jsx'
import UpdatePlantLog from './pages/UpdatePlantLog.jsx'

import { store } from './store/store.js'
import { Provider } from 'react-redux'

const domain = /https:\/\/[^/]+/
const basename = import.meta.env.VITE_API_HOST.replace(domain, '')

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            { index: true, element: <Home /> },
            { path: 'onboard', element: <Onboard /> },
            { path: 'signup', element: <Signup /> },
            { path: 'plants/add', element: <PlantForm /> },
            { path: 'plants/:plant_id', element: <PlantDetail /> },
            { path: 'plants/edit/:plant_id', element: <UpdatePlant /> },
            {
                path: 'plants/:plant_id/plant-logs/add',
                element: <PlantLogForm />,
            },
            { path: 'plant-logs/:plant_log_id', element: <PlantLogDetail /> },
            {
                path: 'plant-logs/edit/:plant_log_id',
                element: <UpdatePlantLog />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider  basename={basename} router={router} />
        </Provider>
    </React.StrictMode>
)
