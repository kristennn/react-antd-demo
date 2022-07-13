import { InputNumber, Modal, message } from 'antd';

import { NumberLiteralType } from 'typescript';
import { generateProducts } from '../../api/product';
/*
 * @Author: kristennn 13949836783@163.com
 * @Date: 2022-07-13 16:00:51
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-13 16:27:08
 * @FilePath: /demo/src/pages/category/generateForm.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState } from 'react';

type GenerateFromProps = {
  id: number;
  isVisible: boolean;
  handleCancel: () => void;
};
const GenerateFrom = (props: GenerateFromProps) => {
  const [amount, setAmount] = useState(0);
  const { id, isVisible, handleCancel } = props;
  const handleSubmit = () => {
    if (amount === 0) {
      message.error('请先填写生成数量');
      return;
    }
    generateProducts({ amount, id });
  };
  return (
    <Modal
      title='生成产品'
      // width={700}
      maskClosable={false}
      visible={isVisible}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <InputNumber
        min={1}
        max={100}
        onChange={(val) => console.log(setAmount(val))}
        style={{ width: '100%' }}
        placeholder='请输入生成数量'
      ></InputNumber>
    </Modal>
  );
};

export default GenerateFrom;
