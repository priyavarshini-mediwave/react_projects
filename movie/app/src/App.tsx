// import { useState } from "react";
// import "./App.css";
// import { Input, Button } from "./components";
// function App() {
//   const [data, setdata] = useState({
//     title: "",
//     description: "",
//     url: "",
//     rating: 0,
    
//   });

//   const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setdata((data) => ({
//       ...data,
//       [e.target.name]: e.target.value,
//     }));
//     //console.log(data);
//   };
//   const onclick=()=>{
//     console.log(data);
//   }
//   return (
//     <div className="app-div">
//       <Input
//         label="Movie Title:"
//         name="title"
//         type="text"
//         placeholder="Enter movie name"
//         onChange={onchange}
//       ></Input>
//       <Input
//         label="Movie Description:"
//         name="description"
//         type="text"
//         placeholder="Enter movie description"
//         onChange={onchange}
//       ></Input>
//       <Input
//         label="Movie url:"
//         name="url"
//         type="text"
//         placeholder="Enter movie image url"
//         onChange={onchange}
//       ></Input>
//       <Input
//         label="Movie Rating:"
//         name="rating"
//         type="number"
//         placeholder="Enter movie rating out of 10"
//         onChange={onchange}
//       ></Input>
//       <Button name="submit" onClick={onclick}></Button>
//     </div>
//   );
// }

// export default App;
// // label: string;
// //   name: string;
// //   type: string;
// //   placeholder: string;
// //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;


import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";
import {Input,Button} from './components'

function App() {
  const initialValues = {
    title: "",
    description: "",
    url: "",
    rating: 0,
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    url: Yup.string().required("URL is required"),
    rating: Yup.number()
      .min(0, "Rating must be at least 0")
      .max(10, "Rating must be at most 10")
      .required("Rating is required"),
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values); // You can perform your submit logic here
    setSubmittedData(values); // Store the submitted data
    resetForm(); // Reset the form after successful submission
  };
  
    // const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //       setdata((data) => ({
    //         ...data,
    //         [e.target.name]: e.target.value,
    //       }));
    //       //console.log(data);
    //     };
  // }

  return (
    <div className="app-div">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, setFieldTouched }) => (
          <Form>
             
            <Input label="Movie Title:" name="title" type="text" placeholder="Enter movie name" onChange={setFieldTouched("description")}></Input>
            <div>
              <label htmlFor="description">Movie Description:</label>
              <Field
                type="text"
                id="description"
                name="description"
                placeholder="Enter movie description"
                onBlur={() => setFieldTouched("description")}
              />
              {errors.description && touched.description && (
                <div className="error">{errors.description}</div>
              )}
            </div>
            <div>
              <label htmlFor="url">Movie URL:</label>
              <Field
                type="text"
                id="url"
                name="url"
                placeholder="Enter movie image URL"
                onBlur={() => setFieldTouched("url")}
              />
              {errors.url && touched.url && (
                <div className="error">{errors.url}</div>
              )}
            </div>
            <div>
              <label htmlFor="rating">Movie Rating:</label>
              <Field
                type="number"
                id="rating"
                name="rating"
                placeholder="Enter movie rating out of 10"
                onBlur={() => setFieldTouched("rating")}
              />
              {errors.rating && touched.rating && (
                <div className="error">{errors.rating}</div>
              )}
            </div>
            <div>
              <button
                type="submit"
                disabled={!Object.keys(touched).length || Object.keys(errors).length > 0}
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {submittedData && (
  <div className="output-div">
    <h2>Submitted Data:</h2>
    <div>
      <strong>Title:</strong> {submittedData.title}
    </div>
    <div>
      <strong>Description:</strong> {submittedData.description}
    </div>
    {submittedData.url && (
      <div>
        <strong>Image:</strong>{" "}
        <img src={submittedData.url} alt="Movie" />
      </div>
    )}
    <div>
      <strong>Rating:</strong> {submittedData.rating}
    </div>
  </div>
)}

    </div>
  );
}

export default App;
