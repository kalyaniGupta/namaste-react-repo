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


# Episode-05

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
