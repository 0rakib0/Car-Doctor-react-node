import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import Router from './Routs/Routs.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-[1080px] mx-auto'>
    <React.StrictMode>
      <RouterProvider router={Router} />
    </React.StrictMode>
  </div>
)
