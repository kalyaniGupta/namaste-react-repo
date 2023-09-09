import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  //suppose below code is for authentication 
  useEffect(()=>{ 
    // Make an API call and send username and password getting below response
    const data = {
      name: "Kalyani Gupta",
    };
    setUserName(data.name);
  },[])

  return (
    // this "UserContext.Provider" provide the context this new updated value
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
      <div className="app">

        {/* below code is perfectly valid we can nested provider with different loggedInUser
        <UserContext.Provider value={{loggedInUser: "Elon Musk"}}>
          <Header />
        </UserContext.Provider> */}

        <Header />
        <Outlet/>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: (  
          <Suspense fallback={<h1>Loading....</h1>}>
            <About/>
          </Suspense>
        )
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu/>
      },
    ],
    errorElement: <Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
