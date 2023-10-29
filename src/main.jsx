import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routs/Routs.jsx';
import AuthProvider from './AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1080px] mx-auto'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
