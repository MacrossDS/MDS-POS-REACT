
import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import {API_HOST} from '../../config.json';
import {iniciarSesionAction} from '../../actions/SesionActions'
import { useHistory } from "react-router-dom";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = () => {

    const sesion = useSelector( state => state.sesion)
    const history =  useHistory();

    if(sesion.token){
        history.push("/productos")
    }

    const dispatch = useDispatch();

    const [access, setAccess] = useState({
        user: null,
        pass: null
    });

    const iniciarSesion = (sesion, cb) => {
        dispatch(iniciarSesionAction(sesion))
        cb()
    }

    const onFieldsChange = (current) => {
        setAccess({
            ...access, 
            [current[0].name[0]]: current[0].value
        })
    };

    const login = () => {
        axios.post(`${API_HOST}/login`, access).then(response => {

            if(response.data.token){
                iniciarSesion(response.data, () => {
                    history.push("/productos")
                })
            }else{
                message.error(response.data.msg)
            }

        }).catch(err => console.error(err))
    }

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFieldsChange={onFieldsChange}
            style={{marginTop: 100}}
        >
            <Form.Item
                label="Username"
                name="user"
                rules={[
                    {
                        required: true,
                        message: "Please input your username!",
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="pass"
                rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" onClick={login}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
