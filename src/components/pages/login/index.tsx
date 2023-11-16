import { Form, Button } from "antd";
import { Input, Text, View } from "../..";
import background from "../../../../public/login.jpg";
import Card from "../../atoms/card";
import { Link } from "react-router-dom";

const LogIn = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <View className="items-center flex justify-center w-full min-h-[100vh] bg-gray-main">
      <img
        src={background}
        alt="login"
        className="absolute w-full h-[50vh] top-0"
      />
      <Card className="w-[440px] mx-auto">
        <Text className="mb-4 text-[16px] font-bold">Login</Text>
        <Form
          name="registration"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="flex flex-col "
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input a valid email address!",
              },
            ]}
          >
            <Input type="email" label="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input label="password" type="password" />
          </Form.Item>

          <Form.Item className="mx-auto mt-3 ">
            <Button htmlType="submit">log in</Button>
          </Form.Item>
        </Form>
        <View className="gap-2 ">
          <Text className="text-[12px]">Don't have an account?</Text>
          <Link to={"/sign-in"} className="text-blue-600 text-[12px]">
            Sign Up
          </Link>
        </View>
      </Card>
    </View>
  );
};

export { LogIn };
