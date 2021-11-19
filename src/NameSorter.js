import Data from "./babyNamesData.json";
import React from "react";
import NameOfBaby from "./NameOfBaby";

const NameSorter = () => {
  const sortedNames=Data.sort((a, b) => {
      return (a.name>b.name ? 1 : (a.name<b.name ? -1 : 0));
  });
  return (
    <div className="name-container">
      {sortedNames.map((element) =>
        element.sex === "f" ? (
          <NameOfBaby pink={element.name} />
        ) : (
          <NameOfBaby blue={element.name} />
        ),
      )}
    </div>
  );
};

export default NameSorter;
