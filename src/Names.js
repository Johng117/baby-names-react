import NameOfBaby from "./NameOfBaby";

const Names = (props) => {
  return (
    <div className="names">
      {props.textInput.value.length === 0
        ? props.allNamesArr.map((element) => {
            return element.sex === "f" ? (
              <NameOfBaby pink={element.name} handleClick={props.handleClick} />
            ) : (
              <NameOfBaby blue={element.name} handleClick={props.handleClick} />
            );
          })
        : null}

      {props.textInput.value.length !== 0
        ? props.allNamesArr.map((element) => {
            return element.name
              .toLowerCase()
              .includes(props.textInput.value.toLowerCase()) ? (
              element.sex === "f" ? (
                <NameOfBaby
                  pink={element.name}
                  handleClick={props.handleClick}
                />
              ) : (
                <NameOfBaby
                  blue={element.name}
                  handleClick={props.handleClick}
                />
              )
            ) : null;
          })
        : null}
    </div>
  );
};

export default Names;
