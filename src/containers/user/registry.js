import React, { Component } from "react";
import { Form, Input, Button, message, Upload, Icon } from "antd";
import { registryService } from "../../api/user";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 5;
    if (!isLt2M) {
        message.error("Image must smaller than 5MB!");
    }
    return isJpgOrPng && isLt2M;
}

@Form.create({ name: "register" })
class Registry extends Component {
    registry = params => {
        registryService(params)
            .then(res => {
                if (res.status === 200) {
                    message.success("注册成功", 1, () => {
                        this.props.history.replace('/user/login')
                    });
                }
            })
            .catch(err => {
                message.error("注册失败");
            });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                this.registry(values);
            }
        });
    };
    state = {
        loading: false
    };
    handleChange = info => {
        if (info.file.status === "uploading") {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false
                })
            );
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? "loading" : "plus"} />
                <div className='ant-upload-text'>Upload</div>
            </div>
        );
        const { imageUrl } = this.state;
        const formItemLayout = {
            labelCol: {
                xs: { span: 16 },
                sm: { span: 5 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0
                },
                sm: {
                    span: 16,
                    offset: 5
                }
            }
        };
        return (
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label='username'>
                        {getFieldDecorator("username", {
                            rules: [
                                {
                                    required: true,
                                    message: "The input is not valid username!"
                                },
                                {
                                    required: true,
                                    message: "Please input your username!"
                                }
                            ]
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label='Password' hasFeedback>
                        {getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your password!"
                                },
                                {
                                    validator: this.validateToNextPassword
                                }
                            ]
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label='Confirm Password' hasFeedback>
                        {getFieldDecorator("confirm", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please confirm your password!"
                                },
                                {
                                    validator: this.compareToFirstPassword
                                }
                            ]
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item label='pict'>
                        {getFieldDecorator("pict", {})(
                            <Upload
                                name='avatar'
                                listType='picture-card'
                                className='avatar-uploader'
                                showUploadList={false}
                                action='/upload'
                                beforeUpload={beforeUpload}
                                onChange={this.handleChange}>
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt='avatar'
                                        style={{ width: "100%" }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        )}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type='primary' htmlType='submit'>
                            Register
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Registry;
