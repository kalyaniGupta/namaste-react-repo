import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);
  return (
  <div> 
    <h1>OPPS!!!</h1> 
    <h3>Something went wrong</h3> 
  </div>
)};

export default Error;
