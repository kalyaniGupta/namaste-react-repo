import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log("err", err);
 // const [status, statusText] = err; //destructuring, I can directly use status insteadmof err.status
  return (
    <>
      <div>
        <h1>OOPS!!</h1>
        <p>Something went wrong !!</p>
        <p>
          {err.status} + {err.statusText}
        </p>
        {/* <p>{err.error.message}</p> */}
      </div>
    </>
  );
};

export default Error;
