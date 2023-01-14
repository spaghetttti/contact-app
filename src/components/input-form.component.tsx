import "./input-form.styles.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../hook";
import { addContact } from "../store/contactSlice";

type FormValues = {
  name: string,
  phoneNumber: number,
  email: string,
  tag: string
};


const schema = yup.object().shape({ name: yup.string().required() }).required();

const InputForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => {dispatch(addContact(data)); reset() });

  const dispatch = useAppDispatch();

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        placeholder="Enter a new contacts name"
        className="input"
        {...register("name")}
      />
      <p>{errors.name?.message}</p>
      <input
        type="tel"
        placeholder="Enter a new contacts phone number"
        className="input"
        {...register("phoneNumber")}
      /> 
      <input
        type="email"
        placeholder="Enter a new contacts email"
        className="input"
        {...register("email")}
      />
      <input
        type="text"
        placeholder="Enter a new contacts tag"
        className="input"
        {...register("tag")}
      />
      <p>{errors.phoneNumber?.message}</p>
      <button className="create-contact" type="submit">
        Create
      </button>
    </form>
  );
};

export default InputForm;
