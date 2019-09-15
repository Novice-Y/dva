import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import routes from "../../route/config.route";
import { NavLink } from "dva/router";

const { Header, Content, Sider } = Layout;
class Home extends Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <Layout>
                        <Header className='header'>
                            <div className='logo' />
                            <Menu
                                theme='dark'
                                mode='horizontal'
                                defaultSelectedKeys={["2"]}
                                style={{ lineHeight: "64px" }}>
                                {routes[1].children.map(item =>
                                    item.name ? (
                                        <Menu.Item key={item.path}>
                                            <NavLink to={item.path}>
                                                {item.name}
                                            </NavLink>
                                        </Menu.Item>
                                    ) : null
                                )}
                            </Menu>
                        </Header>
                        <Layout>
                            <Sider width={200} style={{ background: "#fff" }}>
                                <Menu
                                    mode='inline'
                                    defaultSelectedKeys={["1"]}
                                    defaultOpenKeys={["sub1"]}
                                    style={{ height: "100%", borderRight: 0 }}>
                                    {routes[1].children.map(item =>
                                        item.children
                                            ? item.children.map(el => (
                                                <Menu.Item key={el.path}>
                                                    <NavLink to={el.path}>
                                                        <Icon type='laptop' />
                                                        {el.name}
                                                    </NavLink>
                                                </Menu.Item>
                                            ))
                                            : null
                                    )}
                                </Menu>
                            </Sider>
                            <Layout style={{ padding: "0 24px 24px" }}>
                                <Breadcrumb style={{ margin: "16px 0" }}>
                                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item>List</Breadcrumb.Item>
                                    <Breadcrumb.Item>App</Breadcrumb.Item>
                                </Breadcrumb>
                                <Content
                                    style={{
                                        background: "#fff",
                                        padding: 24,
                                        margin: 0,
                                        minHeight: 280
                                    }}>
                                    {this.props.children}
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default Home;
