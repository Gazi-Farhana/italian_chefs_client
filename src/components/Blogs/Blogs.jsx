import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {


  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <div className="text-center bg-stone-400 py-10">
        <h1 className="text-center font-semibold text-3xl mb-4">
          Answers of the Questions
        </h1>
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="btn bg-stone-600 normal-case" onClick={toPdf}>
              <AiOutlineDownload className="text-xl mr-2" />
              Download Answer
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref} className="mt-8 p-10 pr-32">
        <div className="text-xl mb-4">
          <h2 className="font-semibold">
            <span className="font-semibold">1.</span> What are differences
            between uncontrolled and controlled components?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span> Uncontrolled components can manage their ouw state by their own internally. On the other hand, controlled components' state and behaviour are managed by the parent component and they rely on props that comes from parent component, thus update their state and behavior. Therefore, they are not able to control their iternal state.
          </p>
        </div>
        <div className="text-xl mb-4">
          <h2 className="font-semibold">
            <span className="font-semibold">2.</span> How to validate React
            props using PropTypes?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span> A parent component passes data with props to their child component because props are like HTML attributes but they can contain dynamic data. If we pass in prop values that don’t match the type specified, we get an error. Therefore, validating react props is necessary.
            They can be validated by setting the proptypes property of the Foocomponent to an object that has the names of the props  to validate as the keys. And the corresponding values are the data type of the props.
            q3.Tell us the difference between nodejs and express js.
          </p>
        </div>
        <div className="text-xl mb-4">
          <h2 className=" font-semibold">
            <span className="font-semibold">3.</span> What are difference
            between nodejs and express js?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span>  NodeJS is is an open source server environment and the package, which provides the JavaScript run-time environment, in contorary, Express is a minimal and flexible Node.js web application framework which sits on top of NodeJS and aids us to manage requests and responses.
          </p>
        </div>
        <div className="text-xl mb-4">
          <h2 className="font-semibold">
            <span className="font-semibold">4.</span> What is a custom hook, and
            why will you create a custom hook?
          </h2>
          <p>
            <span className="font-semibold">Answer: </span> Hooks are reusable functions whose name starts with ”use” and that may call other Hooks. Hooks are called eachtime the component is rendered.

            Hooks allow function components to get access to state and other React features. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. It helps to add special, unique functionality to your React applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;