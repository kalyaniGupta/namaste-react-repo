# Namaste React 

# parcel
- Dev Build
- Local Server
- HMR hot module replacement
- File Watching Algorithm written in c++
- cache - faster builds
- image optimization
- minification
- bundler
- compress
- consistent hashing
- code splitting
- Differential bundling - support older browser
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - Remove unused code
- Different prod and dev build

# Namsate Food

/** List of components
 * Header
 *  -- Logo
 *  -- Nav Items
 * Body
 *  -- Search
 *  -- RestourantContainer
 *      --RestourantCard
 * Footer
 *  -- CopyRight
 *  -- Links
 *  -- Address
 *  -- Contacts
 */

# CSS 
// way of wrting inline css creating objectand give that object to style={}
// const styleCard = {
//   backgroundColor: "yellow"
// };


# Episode-05 let's get hooked

# useState
#  //Local state variable - super powerful variable
  const [listOfResturant, setListOfRestaurant] = useState(resList); // this is array destructuring

  // below line of code are correct above line can be written like below
  -  const arr = useState(resList);
  -  const listOfResturant = arr[0];
  -  const setListOfRestaurant = arr[1];

  # //Normal JS variable
  let list = []; //creating
  list.push("abc"); //way of updating

  # Episode -06 Exploring the World  23/08/2023

  - useEffect
  - useState indepth
  - early return
  - reconciliation
  - react fiber
  - diff algorithm
  - login/logout toggling
  - search functionlity 
  - input tag and useState

# Episode-07 Finding the path 23/08/2023   :  will learn about the route in this episode
 - useEffect with dependency array behaviour
 - useState dos and donts
 - react router dom npm i react-router-dom
 - routing configuration crearteBrowserRouter
 - errorElement
 - useRouterError() hook
 - children route
 - will solve the problem: when i go to about us page or contact us page I am loosing my
    header and footer 
 - header and footer will be same just internal page will change
 - outlet
 - link the page with header tab on click of about tab have about page, contact tab have contact page
 - anchor tag vs react Link component
 - two types of routing in web application: cleint side routing and server side routing
 - difference between client side vs server side
 - SPA - React is a single page application


