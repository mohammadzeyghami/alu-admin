import { Input, PageWrapper, View } from "../../../..";
import { ProductDynamicForm } from "./parts/dynamicForm";
import Card from "../../../../atoms/card";
import { Typography, Upload } from "antd";
import React, { createContext, useContext } from "react";
import {
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
  useForm,
} from "react-hook-form";
import { ButtonPrimary } from "../../../../atoms/button/primary";
interface FormValues {
  firstName: string;
  lastName: string;
}

interface FormContextProps {
  control: any; // You might want to replace 'any' with the actual type of 'control'
  handleSubmit: (
    onSubmit: SubmitHandler<FormValues>,
    onError?: SubmitErrorHandler<FormValues>
  ) => (e: React.BaseSyntheticEvent) => Promise<void>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

const ProductForm = () => {
  const formContext = useContext(FormContext);

  if (!formContext) {
    // Handle the case where the context is not provided
    return null;
  }

  const { control, handleSubmit } = formContext;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data); // Handle your form submission logic
  };

  return (
    <PageWrapper>
      <Card className="mx-auto w-full max-w-[700px] p-5">
        <View vertical>
          <View vertical className=" mt-5">
            <Typography className="text-[16px]  font-semibold mb-6">
              Add Product
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <View className="items-center gap-2">
                <Upload>
                  <div className="w-[50px] h-[50px] border-2 border-black"></div>
                </Upload>
                <Typography>Upload Your Image</Typography>
              </View>
              <Controller
                name="ProductName"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="First Name"
                    className="mb-6 mt-6"
                  />
                )}
              />

              <Controller
                name="Price"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder="Price" className="mb-6" />
                )}
              />
              <Controller
                name="Description"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Description"
                    className="mb-6"
                  />
                )}
              />

              <ProductDynamicForm />

              <ButtonPrimary className="my-6">Submit</ButtonPrimary>
            </form>
          </View>
        </View>
      </Card>
    </PageWrapper>
  );
};

const ProductDynamic = () => {
  const { control, handleSubmit } = useForm();

  return (
    <FormContext.Provider value={{ control, handleSubmit }}>
      <ProductForm />
    </FormContext.Provider>
  );
};

export { ProductDynamic };
