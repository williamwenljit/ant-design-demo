import React, { Component } from 'react';
import { Button, Layout, Menu, Icon } from 'antd';
import './App.css';

const {
    Header, Footer, Sider, Content,
} = Layout;
const SubMenu = Menu.SubMenu;

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        collapsible
                        onBreakpoint={broken => console.log('broken', broken)}
                    >
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            defaultSelectedKeys={['1']}
                            mode="inline"
                        >
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={(
                                    <span>
                                        <Icon type="user" />
                                        <span>User</span>
                                    </span>
                                )}
                            >
                                <Menu.Item key="sub1-1" >Tom</Menu.Item>
                                <Menu.Item key="sub1-2" >Bill</Menu.Item>
                                <Menu.Item key="sub1-3" >Alex</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header>
                            header
                        </Header>
                        <Content style={{ padding: '16px 50px 0 50px' }}>
                            <div style={{ background: '#FFF', padding: 24, minHeight: 360 }}>Content</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            ant design demo.
                        </Footer>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
