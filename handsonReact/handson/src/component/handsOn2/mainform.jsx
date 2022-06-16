import React from "react";
import { useState } from "react";
import FormFucntion from "./formFunction";
import Displayform from "./displayform";

function MainForm() {
  const [displayData, setDisplayData] = useState([]);
  const [inputValue, setInputValue] = useState({
    Name: "",
    Department: "",
    Rating: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    console.log(inputValue);
    setInputValue({
      ...inputValue,
      [e.target.name]: value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = !Object.values(inputValue).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, inputValue];
      setDisplayData(newData);
      const emptyInput = { Name: "", Department: "", Rating: "" };
      setInputValue(emptyInput);
    }
  };
  return (
    <div>
      <FormFucntion
        handleInput={handleInput}
        inputValue={inputValue}
        onsubmit={onsubmit}
        setInputValue={setInputValue}
      />

      <Displayform displayData={displayData} />
    </div>
  );
}

export default MainForm;
