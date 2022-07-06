/*
 * @Author: kristennn 13949836783@163.com
 * @Date: 2022-07-05 17:12:14
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-06 15:43:31
 * @FilePath: /demo/src/pages/category/Form.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Modal } from 'antd';

type CategoryFormProps = {
  isVisible: boolean;
  handleSubmitted: () => void;
  handleCancel: () => void;
};

const CategoryForm = (props: CategoryFormProps) => {
  const { isVisible, handleSubmitted, handleCancel } = props;
  const handleSubmit = () => {
    // 处理数据
    handleSubmitted();
  };
  return (
    <Modal
      title='Basic Modal'
      visible={isVisible}
      onOk={handleSubmit}
      onCancel={handleCancel}
    >
      <p>test</p>
    </Modal>
  );
};

export default CategoryForm;
