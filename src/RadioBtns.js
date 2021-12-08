import winner from "./winner.png";
import boy from "./boy.png";
import friends from "./friends.png";

const RadioBtns = (props) => {
  return (
    <div className="radio">
      <input
        type="radio"
        id="boy-girl"
        name="genders"
        value="boy-girl"
        className="genders"
      />
      <label for="boy-girl">
        <img src={friends} alt="a boy and girl" id="1" onClick={props.gender} />
      </label>

      <input
        type="radio"
        id="boy"
        name="genders"
        value="boy"
        className="genders"
      />
      <label for="boy">
        <img src={boy} alt=" a boy" id="2" onClick={props.gender} />
      </label>

      <input
        type="radio"
        id="girl"
        name="genders"
        value="girl"
        className="genders"
      />
      <label for="girl">
        <img src={winner} alt="a girl" id="3" onClick={props.gender} />
      </label>
    </div>
  );
};

export default RadioBtns;
