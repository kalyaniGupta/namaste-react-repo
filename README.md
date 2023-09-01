# Namaste React Print each section summary

# Episode-02: Igniting our app: will learn about the parcel
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
   - import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
   - routing configuration crearteBrowserRouter
   - RouterProvider
   - errorElement
   - useRouterError() hook
   - children route
   - will solve the problem: when i go to about us page or contact us page I am loosing my
      header and footer 
   - header and footer will be same just internal page will change
   - Outlet
   - link the page with header tab on click of about tab have about page, 
      contact tab have contact page
   - anchor tag vs react Link component
   - two types of routing in web application: cleint side routing and server side routing
   - difference between client side vs server side
   - SPA - React is a single page application
   - create a new feature in our application : when I will click on any restaurant it will
      take me to that restaurant page 
   - dynamic routing
   - useParams() hook

# Episode-08 Let's get Classy  28/08/2023   :  will learn about the class based component 
   # created acomponent UserClassBasicConcept for explaning all the below concept
      - how to modify the functional component into class based componnet
      - will work on About us page 
      - on About us page will fetch the data from github repository and show in About page
      - userClass is class based component and component name userClass is not the convetion is 
      just to differentiate in our project we write the component name like that 
      - difference between function vs class based component
      - how to pass the props in class based function
      - construtor (props)
      - super(props)
      - this.props in class component
      - state in class based component
      - how to update state in class based component
      - NEVER UPDATE THE STATE VARIABLE DIRECTLY ==> this.state.count = this.state.count +1 this is the wrong way to increase the count value
      - what are react component lifecycle ? very imp question for interview
      - how component render when parent component is functional component and child component is class component
      - what is the excution order, when both parent and child component are class based component
      - componentDidMount()
      - what is the excution order, when both parent and child component are class based component and both componenet has componenetDidMount() 
      function(VERY IMP INTERVIEW QUESTION)
      - what is the excution order, when both parent and two children component(multiple child) are class based component and both componenet has
      componenetDidMount() function(VERY IMP INTERVIEW QUESTION)
      - what is the use of componentDidMount()?
      - Render Phase and Commit Phase (GGGGGGGGGGGGGGGGGGOOOOOOOLLLLLLDDDDDDD KNowledge why react is fast)
   # created a component UserClass for explaning API call
      - making an API call inside componentDidMount()
      - keypoints on class based component lifecycle
      - "never compare react lifecycle with functional component"
      - behaviour of useEffect() hook vs componentDidUpdate() function
      - usecase of componentWillUnmount() function
      - "never ever call setState() in componentWillUnmount() function"
      - behaviour of setInterval in class based component inside componentDidMount() and how to unmount its strange unexpected behaviour 
      - wrting clearinterval in componentWillUnmount() function will stop setTimeout strange behaviour
      - behaviour of setTimeout in functionnal component inside useEffect() hook and how to  unmount it 
      - how to destroy setInterval in fucntional based component
      - returning function from useEffect() hook to clear the setInterval and this function will execute at the time of component unmount
      - Async in useEffect

# Episode-09 Optimising our app 01/09/2023 : will learn about custom hook and lazy loading 
- in this episode will see
   - how we can write our code in better way
   - how we can optimize our app
   - how we can make our app performant, fast, lite weight so that it can load fast
   - SRP--> Single Resposibility Principle
   - Modularity
   - what is hook at the end of the day?
   - why we should build hook?
   - custom Hooks and best practices
   - creating a custom hook in RestaurantMenu Componenent "useReastaurantMenu()"
   - useReastaurantMenu.js file for custom hook under utils folder 
   - useReastaurantMenu() take restId as an argument and return the restInfo
   - creating one more custom hook "useOnlineStatus()" custom hook to check user is online
     or offline in Body component
   - Akshay how I can write the custom hook, how I can put my thought process in wrting
     custom hook
   - for custom hook make a clear understanding of what input is required and what will be 
     the return value of that custom hook
   - Using same "useOnlineStatus()" custom hook to show user is online or offline in Header 
     component
   - in our app, for whole code parcel create only one js file, app become slow
   - Lazy Loading or Chunking or Code Splitting or Dynamic Bundling or on demand loading or 
     dynamic import
   - lazy()
   - suspense component
   - fallback 
   - for more practice make About component as lazy loaded although About component is
     small component
   - in many system design interview, interviewr ask how to optimized large application
   - how I can make application fast and performant


