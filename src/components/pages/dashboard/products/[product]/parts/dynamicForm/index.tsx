import { useState } from "react";
import { Input, View } from "../../../../../..";

const ProductDynamicForm = () => {
  const [formData, setFormData] = useState([
    { PropertyName: "", Property: "" },
  ]);

  const handleInputChange = (index: number, name: string, value: string) => {
    const updatedFormData: any = [...formData];
    updatedFormData[index][name] = value;
    setFormData(updatedFormData);
  };

  const handleAddForm = () => {
    setFormData([...formData, { PropertyName: "", Property: "" }]);
  };

  const handleRemoveForm = (index: number) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Handle your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      {formData.map((form, index) => (
        <View key={index} className="gap-2 items-center">
          <Input
            label="PropertyName"
            type="text"
            value={form?.PropertyName}
            onChange={(e) =>
              handleInputChange(index, "firstName", e.target.value)
            }
          />

          <Input
            label="Property"
            type="text"
            value={form?.Property}
            onChange={(e) =>
              handleInputChange(index, "lastName", e.target.value)
            }
          />
          <View className=" mt-[24px] h-full">
            <div
              className="bg-[red] cursor-pointer  text-[18px] flex justify-center w-[20px] h-[20px] rounded-full"
              onClick={() => handleRemoveForm(index)}
            ></div>
          </View>
        </View>
      ))}

      <button type="button" onClick={handleAddForm}>
        Add New Form
      </button>
    </form>
  );
};

export { ProductDynamicForm };
