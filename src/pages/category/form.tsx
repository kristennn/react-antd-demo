import { Form, Input, Modal, Radio, RadioChangeEvent } from 'antd';
import {
  glazeOptions,
  seriesOptions,
  sizeOptions,
  typeOptions,
} from '../../utils/options';

import { createCategory } from '../../api/category';

/*
 * @Author: kristennn 13949836783@163.com
 * @Date: 2022-07-05 17:12:14
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-06 16:35:34
 * @FilePath: /demo/src/pages/category/Form.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

type CategoryFormProps = {
  title: string;
  isVisible: boolean;
  handleSubmitted: () => void;
  handleCancel: () => void;
};

const CategoryForm = (props: CategoryFormProps) => {
  const { title, isVisible, handleSubmitted, handleCancel } = props;
  const [form] = Form.useForm();
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      createCategory(values);
    });
    handleSubmitted();
  };
  const handleRadioChange = (label: string, e: RadioChangeEvent) => {
    const formData = form.getFieldsValue();
    formData[label] = e.target.value;
    form.setFieldsValue({
      code:
        (formData.glaze || '') +
        (formData.type || '') +
        (formData.series || ''),
    });
  };
  return (
    <Modal
      title={title}
      width={700}
      maskClosable={false}
      visible={isVisible}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <Form layout='horizontal' form={form}>
        <Form.Item
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          label='品类名称'
          name='name'
          rules={[{ required: true, message: '请输入品类名称' }]}
        >
          <Input placeholder='请输入品类名称' />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          label='品类编号'
          name='code'
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          label='釉色'
          name='glaze'
          rules={[{ required: true, message: '请选择釉色' }]}
        >
          <Radio.Group
            options={glazeOptions}
            onChange={(e) => handleRadioChange('glaze', e)}
            optionType='button'
            buttonStyle='solid'
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          label='品类'
          name='type'
          rules={[{ required: true, message: '请选择品类' }]}
        >
          <Radio.Group
            options={typeOptions}
            onChange={(e) => handleRadioChange('type', e)}
            optionType='button'
            buttonStyle='solid'
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          label='系列'
          name='series'
          rules={[{ required: true, message: '请选择系列' }]}
        >
          <Radio.Group
            options={seriesOptions}
            onChange={(e) => handleRadioChange('series', e)}
            optionType='button'
            buttonStyle='solid'
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          label='尺寸'
          name='size'
          rules={[{ required: true, message: '请选择尺寸' }]}
        >
          <Radio.Group
            options={sizeOptions}
            onChange={(e) => handleRadioChange('size', e)}
            optionType='button'
            buttonStyle='solid'
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 7 }}
          wrapperCol={{ span: 12 }}
          label='备注'
          name='remark'
        >
          <Input.TextArea placeholder='请输入备注' />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryForm;
