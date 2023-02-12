// import {
//   LaptopOutlined,
//   NotificationOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, message } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
const { Content, Sider } = Layout;
// const items1 = ["1", "2", "3"].map((key) =>
//   key,
//   label: `nav ${key}`,
// }));

const items = [
  { label: "Announcement" },
  { label: "Discussion" },
  { label: "Chat" },
  { label: "Maintenance" },
  // { label: "Pay" },
  // { label: "Announcement" },
];
const handleAnnouncement = () => {

    alert("a")

}

const ResidentHome = () => (


    <Layout>
      <Sider className="site-layout-background"
      style={
        { width: "200",
          minHeight: "100%",
        }
      }
      
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "100%",
            borderRight: 0,
          }}
          items={items}
        />
      </Sider>
      {/* the layout below should changed depend on authorization */}
      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item onClick={handleAnnouncement()}>Event</Breadcrumb.Item>
          <Breadcrumb.Item>Alert</Breadcrumb.Item>
          <Breadcrumb.Item>Newsletter</Breadcrumb.Item>
          <Breadcrumb.Item>Policy</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="content"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 580,
          }}
        >

        </Content> */}
      </Layout>
    </Layout>

);
export default ResidentHome;