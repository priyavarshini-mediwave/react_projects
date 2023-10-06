import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import "./App.css";
import { Resultdiv } from "./components";
function App() {
  const [data, setData] = useState({
    title: "",
    description: "",
    url: "",
    rating: "",
  });
  const [submitdata, setsubmidata] = useState([]);
  const onchange = (e) => {
    setData((form) => {
      const tempData = {
        ...form,
        [e.target.name]: e.target.value,
      };
      return tempData;
    });
    // console.log(data);
  };

  // const onclick = () => {
  //   console.log(data);
  // };
  function onClick(e) {
    e.preventDefault();
    //console.log("hi");
    setsubmidata([...submitdata, data]);
    console.log("data", data);
    //resetform()
  }

  useEffect(() => {
    console.log("submitdata", submitdata);
  }, [submitdata]);

  return (
    <>
      <form className="form-div" onSubmit={onClick}>
        <Input
          label="Movie Title:"
          name="title"
          type="text"
          placeholder="Enter movie name"
          onChange={onchange}
        ></Input>
        <Input
          label="Movie Description:"
          name="description"
          type="text"
          placeholder="Enter movie description"
          onChange={onchange}
        ></Input>
        <Input
          label="Movie url:"
          name="url"
          type="text"
          placeholder="Enter movie image url"
          onChange={onchange}
        ></Input>
        <Input
          label="Movie Rating:"
          name="rating"
          type="number"
          placeholder="Enter movie rating out of 10"
          onChange={onchange}
        ></Input>
        <Button name="submit"></Button>
      </form>
      {submitdata.map((val) => {
        return (
          <div>
            <Resultdiv
              title={val.title}
              description={val.description}
              url={val.url}
              rating={val.rating}
            ></Resultdiv>
          </div>
        );
      })}
    </>
  );
}

export default App;
