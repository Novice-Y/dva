import React, { Component } from "react";
import { Form, Icon, Input, Button, Row, Col, message } from "antd";
import { loginService } from "../../api/user";

@Form.create({ name: "normal_login" })
class Login extends Component {
    login = params => {
        loginService(params)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    message.success("登陆成功", 1, () => {
                        this.props.history.replace("/home");
                    });
                }
            })
            .catch(err => {
                message.error("登陆失败");
                this.props.history.replace("/user/registry");
            });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.login(values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={10} offset={6}>
                    <div>
                        <h4>登录</h4>
                        <Form
                            onSubmit={this.handleSubmit}
                            className='login-form'>
                            <Form.Item>
                                {getFieldDecorator("username", {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Please input your username!"
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={
                                            <Icon
                                                type='user'
                                                style={{
                                                    color: "rgba(0,0,0,.25)"
                                                }}
                                            />
                                        }
                                        placeholder='Username'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator("password", {
                                    rules: [
                                        {
                                            required: true,
                                            message:
                                                "Please input your Password!"
                                        }
                                    ]
                                })(
                                    <Input
                                        prefix={
                                            <Icon
                                                type='lock'
                                                style={{
                                                    color: "rgba(0,0,0,.25)"
                                                }}
                                            />
                                        }
                                        type='password'
                                        placeholder='Password'
                                    />
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type='primary'
                                    htmlType='submit'
                                    className='login-form-button'>
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }
}

export default Login;
