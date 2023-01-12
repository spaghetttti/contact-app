import "./input-form.styles.css";
import { Props } from "./control-panel.component";
import { useForm, Resolver} from 'react-hook-form';


type FormValues = {
  name: string,
  phoneNumber: number | string
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name ? {
      name: {
        type: 'required',
        message: 'Name is required.',
      },
    }
  : {},
  }
}

const InputForm = ({
  name, 
  phoneNumber,
  setName,
  setPhoneNumber,
  handleAddition,
}: Props) => {
  const { register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver});
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form
      className="form"
      // onSubmit={(e) => onSubmit(e)}
      //? old version with event parament 
      onSubmit={(e) => {
        handleAddition(e);
        onSubmit();
      }}
    >
      <input
        type="input"
        placeholder="Enter a new contacts name"
        className="input"
        value={name}
        {...register("name")}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
      {errors.name?.message}
      </p>
      <input
        type="input"
        placeholder="Enter a new contacts phone number"
        className="input"
        value={phoneNumber}
        {...register("phoneNumber")}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <p>
      {errors.phoneNumber?.message}
      </p>
      <button className="create-contact" type="submit">
        Create
      </button>
    </form>
  );
};

export default InputForm;
