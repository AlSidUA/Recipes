import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import mainRecipes from "../../src/Components/Array/Recipes"
import { 
    Form, 
    Button,
    Input,
    Image,
    InputNumber,
    message,
    Select,
    Space,
} from "antd";
import "./Forms.css";
import { upload } from "@testing-library/user-event/dist/upload";


const { Option } = Select;
const { TextArea } = Input;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
    const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};

const Forms = ()=>{
    
    const onFinish = (value) => {
        mainRecipes.push(value);
        console.log(value);
    }

    const [form] = Form.useForm();
    
    const onMessege = () => {
        message.success('Submit success!');
    };
    
    const onMessegeFailed = () => {
        message.error('Submit failed!');
    };
    


    return (
        <Form className="form-container"
            name={"form"}
            onFinish={onFinish}
            layout="vertical"
            onMessege={onMessege}
            onMessegeFailed={onMessegeFailed}
            autoComplete="off"
        >
            <h2>Тут ви можете додати рецепти Ваших улюблених страв!</h2>
            
                    <Form.Item
                name="photo"
                label="Картинка"
                hasFeedback
                rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
            >
                <Input placeholder="input placeholder" />
                
            </Form.Item>

            <Form.Item
                name={"name"}
                label ={"Назва страви"}
                hasFeedback
                rules={[{ required: true, message: 'Будьласка вкажіть назву страви!' }]}
            >
                <Input/>
            </Form.Item>
            
            <Form.Item
                name="categore"
                label="Категорія"
                hasFeedback
                rules={[{ required: true, message: 'Виберіть категорію!' }]}
            >
                <Select placeholder="Please select Categore">
                    <Option value="Десерти">Десерти</Option>
                    <Option value="Напої">Напої</Option>
                    <Option value="Супи та Основні страви">Супи та Основні страви</Option>
                    <Option value="Салати">Салати</Option>
                </Select>
            </Form.Item>
            <Form.Item label="Час приготування">
                <Form.Item InputNumber name="time" hasFeedback noStyle>
                    <InputNumber min={0} max={10} />
                </Form.Item>
                    <span className="ant-form-text" style={{ marginLeft: 8 }}>
                        години
                    </span>
            </Form.Item>
            <Form.Item name="description" hasFeedback label="Опис">
                <TextArea  rows={4} />
            </Form.Item>
            <Form.List
                name="ingredients"
                    rules={[
                {
                    validator: async (_, names) => {
                    if (!names || names.length < 1) {
                        return Promise.reject(new Error('Додайте хоча б один інгрідієнт!'));
                    }
                    },
                },
                ]}
            >
                {(fields, { add, remove }, { errors }) => (
                <>
                    {fields.map((field, index) => (
                    <Form.Item
                        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                        label={index === 0 ? 'Ingredients' : ''}
                        required={false}
                        key={field.key}
                    >
                        <Form.Item
                        {...field}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                            {
                            required: true,
                            whitespace: true,
                            message: "Please input passenger's name or delete this field.",
                            },
                        ]}
                        noStyle
                        >
                        <Input placeholder="passenger name" style={{ width: '60%' }} />
                        </Form.Item>
                        {fields.length > 1 ? (
                        <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                        />
                        ) : null}
                    </Form.Item>
                    ))}
                    <Form.Item>
                    <Button
                        type="dashed"
                        onClick={() => add()}
                        style={{ width: '60%' }}
                        icon={<PlusOutlined />}
                    >
                        Додати інгридієнт!
                    </Button>
                    
                    <Form.ErrorList errors={errors} />
                    </Form.Item>
                </>
                )}
            </Form.List>
            <Form.Item name="cookingMethod" label="Спосіб приготування" hasFeedback
                rules={[{ required: true, message: 'Будьласка вкажіть спосіб приготування!' }]}>
                    <TextArea rows={6} />
            </Form.Item>
            <Button  htmlType="submit">Зберегти</Button>
        </Form> 
        
    )
    
}

export default Forms;