import React from "react";
import ReactDOM from "react-dom/client";

const Jing = () => <h1 id="heading">Hello World from JSX !</h1>;
// use angular brackets if code lies in different lines

// react functional component
const FunctionalHeading = () => {
  return (
    <div>
      {Jing()}
      <Jing />
      <Jing></Jing>
      {/* // these 3 ways are same thing */}
      <h1 className="heading">Hello From React Functional Components</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FunctionalHeading />);
// this is how we can render a functional component
// because that is how the babel will understand it
