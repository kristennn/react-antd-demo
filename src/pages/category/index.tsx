import { Category as CategoryType, deleteCategory } from '../../api/category';

/*
 * @Author: KristenZheng kristen@electracharger.com
 * @Date: 2022-06-29 17:08:01
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-13 16:25:42
 * @FilePath: /demo/src/pages/dashboard/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button } from 'antd';
import CategoryForm from './form';
import CategoryTable from './table';
import GenerateFrom from './generateForm';
import { useState } from 'react';

const Category = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isGenerateModelVisible, setIsGenerateModelVisible] = useState(false);
  const [currId, setCurrId] = useState<number | undefined | null>(null);
  const handleCreate = () => {
    setIsFormVisible(true);
  };
  const handleSubmitted = () => {
    setIsFormVisible(false);
  };
  const handleCanceled = () => {
    setIsFormVisible(false);
  };
  const handleEdit = (item: CategoryType) => {
    setCurrId(item.id);
    setIsFormVisible(true);
  };
  const handleDelete = (item: CategoryType) => {
    deleteCategory(item);
  };
  const handleGenerate = (item: CategoryType) => {
    setCurrId(item.id);
    setIsGenerateModelVisible(true);
  };
  const handleGenerateFromCancel = () => {
    setIsGenerateModelVisible(false);
  };
  return (
    <div>
      <Button onClick={handleCreate} type='primary'>
        +新建
      </Button>
      <CategoryTable
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleGenerate={handleGenerate}
      />
      <CategoryForm
        isVisible={isFormVisible}
        handleSubmitted={handleSubmitted}
        handleCanceled={handleCanceled}
        id={currId || 0}
      />
      <GenerateFrom
        isVisible={isGenerateModelVisible}
        handleCancel={handleGenerateFromCancel}
        id={currId || 0}
      />
    </div>
  );
};
export default Category;
