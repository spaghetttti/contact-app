import InputForm from "./input-form.component";

export interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: number | string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string | number>>;
  handleAddition: (e: React.FormEvent) => void;
}

const ControlPanel = ({
  name,
  setName,
  phoneNumber,
  setPhoneNumber,
  handleAddition,
}: Props) => {
  return (
    <>
      <InputForm
        name={name}
        setName={setName}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        handleAddition={handleAddition}
      />
      <p>search, filter</p>
    </>
  );
};

export default ControlPanel;
