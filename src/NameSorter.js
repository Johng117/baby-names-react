/* eslint-disable comma-dangle */
import Data from "./babyNamesData.json";
import React, { useState } from "react";
import NameOfBaby from "./NameOfBaby";
import Names from "./Names";
import RadioBtns from "./RadioBtns";

const NameSorter = () => {
  const [textInput, setTextInput] = useState({ value: "" });
  const [faveArray, setFaveArray] = useState([]);
  const [allNamesArr, setAllNamesArr] = useState(
    Data.sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    })
  );

  function inputHandler(e) {
    return setTextInput({
      value: e.currentTarget.value,
    });
  }

  const sortFunction = (list) => {
    return list.sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });
  };

  const handleClick = (e) => {
    let clickedName = e.target.innerText;
    let returnedName = allNamesArr.filter(
      (element) => element.name === clickedName
    );
    let nameInFaves = faveArray.filter(
      (element) => element.name === clickedName
    );

    if (returnedName.length === 0) {
      let rearranged = sortFunction(allNamesArr.concat(...nameInFaves));
      setAllNamesArr(rearranged);
      let faveNameReturn = faveArray.filter(
        (element) => element.name !== nameInFaves[0].name
      );
      setFaveArray(faveNameReturn);
    }

    if (nameInFaves.length === 0) {
      let arrangedAgain = sortFunction(faveArray.concat(...returnedName));
      setFaveArray(arrangedAgain);
      let namesLeft = allNamesArr.filter(
        (element) => element.name !== returnedName[0].name
      );
      setAllNamesArr(namesLeft);
    }
  };

  const genderChoiceClick = (e) => {
    let genderId = e.target.id;
    let data = Data.sort((a, b) => {
      return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
    });
    if (genderId === "1") {
      setAllNamesArr(
        Data.sort((a, b) => {
          return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
        })
      );
    }
    if (genderId === "2") {
      let boys = data.filter((element) => element.sex === "m");
      setAllNamesArr(boys);
    }
    if (genderId === "3") {
      let girls = data.filter((element) => element.sex === "f");
      setAllNamesArr(girls);
    }
  };

  return (
    <div>
      <div className="name-container">
        <div className="form-container">
          <form className="form">
            <input
              type="text"
              value={textInput.value}
              onChange={inputHandler}
              placeholder="Search..."
            ></input>
            <RadioBtns gender={genderChoiceClick} />
          </form>
          <div className="faves-box">
            <h3>Favourites:</h3>
            <div className="fave-names">
              {faveArray.map((element) => {
                return element.sex === "f" ? (
                  <NameOfBaby pink={element.name} handleClick={handleClick} />
                ) : (
                  <NameOfBaby blue={element.name} handleClick={handleClick} />
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <Names
          allNamesArr={allNamesArr}
          handleClick={handleClick}
          textInput={textInput}
        />
        <hr />
      </div>
      <div>
        Icons made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
};

export default NameSorter;
