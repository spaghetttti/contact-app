import InputForm from "./input-form.component";
import SearchInput from "./search-input.component";

export type Props = {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>,
}

const ControlPanel = ({setSearchValue}: Props) => {
  return (
    <>
      <InputForm/>
      <SearchInput setSearchValue={setSearchValue}/>
    </>
  );
};

export default ControlPanel;
