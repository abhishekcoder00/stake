import React from 'react';
import {  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home page/Home';
import Favirate from './pages/home page/Favirate';
import Layout from './pages/home page/Layout';
// import Layout from './pages/home page/Layout';


function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: <Layout/>,
        children: [
          {
            path: "/casino",
            element: <Home />,
            children:[
              {
                path: "/casino/favirate",
              }
            ]
          },
          {
            path: "/spots",
            element: <Favirate />,
            
          }
        ]
      }
    ]



  )
  return (
    // <Router>
    //   <div className="flex">
    
    //     <div className="flex flex-col flex-1 ml-64">
     
    //       <main className="flex-1 p-4 max-w-[1000px] mx-auto">
            
    //       </main>
         
    //     </div>
    //   </div>
    // </Router>

    <RouterProvider router={router}/>

  );
}

export default App;




 