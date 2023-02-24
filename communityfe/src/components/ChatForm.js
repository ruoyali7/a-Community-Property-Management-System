import React from "react";
import { useState } from "react";
import { Drawer, Menu, Input, Form, Button, message } from "antd";

const { TextArea } = Input;


const ChatForm = (props) => {
  const [userInfo, setUserInfo] = useState(props.userInfo);
  const [isDrawerOpen, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [form] = Form.useForm();

  const handleCancel = () => {
    setOpen(false);
  };

  const showChatDrawer = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // form.validateFields((err, values) => {
    //   if (!err) {
    //     const newMessage = {
    //       text: values.message,
    //       timestamp: new Date().toLocaleString(),
    //     };
    //     setMessages([...messages, newMessage]);
    //     form.resetFields();
    //   }
    // });
    setOpen(false);
    message.success("Thank you for contacting us! Your message has been sent. We'll get back to you as soon as possible. Please check your email for a confirmation of your message submission.")
  };

  return (
    <>
      <Menu.Item key={3} onClick={showChatDrawer}>
        Chat
      </Menu.Item>

      <Drawer
        title="Chat"
        width={400}
        open={isDrawerOpen}
        onClose={handleCancel}
      >
        <h2>XXX Apartment</h2>
        <p>xxx address</p>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message.timestamp}</p>
            <p>{message.text}</p>
          </div>
        ))}
        <Form
          name="chat_form"
          // onFinish={handleSubmit}
          style={{ marginTop: "2rem" }}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <h2>Contact Us</h2>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Please input your email address",
              },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input placeholder="Email" defaultValue={userInfo}/>
          </Form.Item>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please enter a subject" }]}
          >
            <Input placeholder="Subject" />
          </Form.Item>

          <Form.Item
            name="message"
            label="Message"
            rules={[{ required: true, message: "Please enter a message" }]}
          >
            <TextArea placeholder="Type a message" rows={5} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit" onClick={handleSubmit}>
              Send
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default ChatForm;
