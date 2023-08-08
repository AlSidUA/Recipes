import React from "react";
import { Form, Input } from "antd";

const Forms = ()=>{
    const onFinish = () => {
        
    }
    return (
        <Form
            name={"form"}
            onFinish={onFinish}
        >

            <Form.Item
                name={"name"}
                label ={"Name"}
            >
                <Input/>
            </Form.Item>
        </Form>
    )
}

export default Forms;