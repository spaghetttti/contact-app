import "./input-form.styles.css";
import { Props } from "./control-panel.component";

const InputForm = ({
  name,
  phoneNumber,
  setName,
  setPhoneNumber,
  handleAddition,
}: Props) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleAddition(e);
      }}
    >
      <input
        type="input"
        placeholder="Enter a new contacts name"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="input"
        placeholder="Enter a new contacts phone number"
        className="input"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button className="create-contact" type="submit">
        Create
      </button>
    </form>
  );
};

export default InputForm;
