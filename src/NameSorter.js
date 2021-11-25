import Data from "./babyNamesData.json";
import React, { useState } from "react";
import NameOfBaby from "./NameOfBaby";

const NameSorter = () => {
  const [textInput, setTextInput] = useState({ value: "" });

  function inputHandler(e) {
    return setTextInput({
      ...textInput,
      value: e.currentTarget.value,
    });
  }
  console.log(textInput.value);

  const sortedNames = Data.sort((a, b) => {
    return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
  });
  return (
    <div className="name-container">
      <div className="form-container">
        <form>
          <input
            type="text"
            value={textInput.value}
            onChange={inputHandler}
            placeholder="Search..."
          ></input>
        </form>
      </div>
      <div className="names">
        { textInput.value.length===0
        ? sortedNames.map((element) => {
             return (element.sex === "f" ? (
            <NameOfBaby pink={element.name} />
          ) : (
            <NameOfBaby blue={element.name} />
          ));
          }) : null}

         { (textInput.value.length!==0
         ? (sortedNames.map((element) => {
           const alteredText = textInput.value.toLowerCase();
            return element.name.toLowerCase().includes(alteredText) ? (
              element.sex === "f" ? (
                <NameOfBaby pink={element.name} />
              ) : (
                <NameOfBaby blue={element.name} />
              )
            ) : null;
         })) : null) }
      </div>
    </div>
  );
};

export default NameSorter;
