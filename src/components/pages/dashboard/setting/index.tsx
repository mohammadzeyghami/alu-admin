import React, { createContext, useContext } from "react";

import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
  FieldError,
} from "react-hook-form";
import Card from "../../../atoms/card";
import { Input, Text, View } from "../../..";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}
interface FormContextProps {
  control: any; // You might want to replace 'any' with the actual type of 'control'
  handleSubmit: (
    onSubmit: SubmitHandler<FormValues>,
    onError?: SubmitErrorHandler<FormValues>,
    errors?: Record<string, FieldError>
  ) => (e: React.BaseSyntheticEvent) => Promise<void>;
}

const FormContext = createContext<FormContextProps | any>({});

const UserPage = () => {
  const { control, handleSubmit } = useContext(FormContext);

  const onSubmit = (data: any) => {
    console.log(data); // Handle your form submission logic
  };

  return (
    <View className=" w-full h-full max-w-[1200px] items-center justify-center mx-auto ">
      <Card className="w-full !max-w-[500px] mt-[-150px]">
        <Text className="text-2xl mb-[20px] font-semibold">Edit User</Text>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 items-center w-full justify-center"
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="userName"
                className="w-full max-w-[500px] mt-4"
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input {...field} placeholder="Email" className="w-full mt-4" />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Password"
                className="w-full mt-4"
              />
            )}
          />
          <Controller
            name="confirm_password"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Confirm Password"
                className="w-full mt-4"
              />
            )}
          />

          <button
            type="submit"
            className="mt-8 bg-gray-primary px-3 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </Card>
    </View>
  );
};

const EditUser = () => {
  const { control, handleSubmit } = useForm();

  return (
    <FormContext.Provider value={{ control, handleSubmit }}>
      <UserPage />
    </FormContext.Provider>
  );
};

export { EditUser };
