/*
 * @Author: KristenZheng kristen@electracharger.com
 * @Date: 2022-06-29 17:08:01
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-06 16:21:56
 * @FilePath: /demo/src/pages/dashboard/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button } from 'antd';
import CategoryForm from './form';
import CategoryTable from './table';
import { useState } from 'react';

const Category = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCreate = () => {
    setIsModalVisible(true);
  };
  const handleSubmitted = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button onClick={handleCreate} type='primary'>
        +新建
      </Button>
      <CategoryTable />
      <CategoryForm
        isVisible={isModalVisible}
        handleSubmitted={handleSubmitted}
        handleCancel={handleCancel}
        title='新增品类'
      />
    </div>
  );
};
export default Category;
