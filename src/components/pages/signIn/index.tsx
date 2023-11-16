import { Form, Button } from "antd";
import { Input, Text, View } from "../..";
import Card from "../../atoms/card";

const SignIn = () => {
  const onFinish = (values: any) => {
    console.log("Received values:", values);
  };

  return (
    <View className="items-center flex justify-center w-full min-h-[100vh]">
      <Card className="w-[440px] mx-auto">
        <Text className="mb-4 text-[16px] font-bold">Register</Text>
        <Form
          name="registration"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          className="flex flex-col "
        >
          <Form.Item
            name="userName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input label="Username" />
          </Form.Item>

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

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("The two passwords do not match!");
                },
              }),
            ]}
          >
            <Input label="password" type="password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </View>
  );
};

export { SignIn };
