import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../hook";
import { addContact } from "../store/contactSlice";

type FormValues = {
  name: string;
  phoneNumber: number;
  email: string;
  tag: string;
};

const schema = yup.object().shape({ name: yup.string().required() }).required();

const InputForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const onSubmit = handleSubmit((data) => {
    dispatch(addContact(data));
    reset();
  });

  const dispatch = useAppDispatch();

  return (
    <div className="w-full max-w-lg">
      <form
        // className="form"
        className="bg-white shadow-md rounded pt-6 pb-8 mb-4 p-6"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="mt-1 flex rounded-md shadow-sm">
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            Name
          </span>
          <input
            type="text"
            placeholder="Enter a new contacts name"
            // className="input"
            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("name")}
          />
          <span>{errors.name?.message}</span>
        </div>
        <div className="mt-1 flex rounded-md shadow-sm">
        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            Phone Number
          </span>
        <input
          type="tel"
          placeholder="Enter a new contacts phone number"
          className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          
          {...register("phoneNumber")}
        />
        </div>
         <div className="mt-1 flex rounded-md shadow-sm">
         <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            Email
          </span>
        <input
          type="email"
          placeholder="Enter a new contacts email"
            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          {...register("email")}
        />
          </div>
         <div className="mt-1 flex rounded-md shadow-sm">
         <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            Tag
          </span>
        <input
          type="text"
          placeholder="Enter a new contacts tag"
            className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          {...register("tag")}
        />
        <p>{errors.phoneNumber?.message}</p>
          </div>
        <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-5 rounded" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default InputForm;
