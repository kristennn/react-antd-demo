/*
 * @Author: kristennn 13949836783@163.com
 * @Date: 2022-07-05 16:55:13
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-05 16:55:59
 * @FilePath: /demo/src/api/category.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from '../utils/request';

export type Category = {
  key: number;
  code: string;
  createdAt: string;
  glaze: string;
  id: number;
  imgUrl: string;
  name: string;
  remark: string;
  series: string;
  size: string;
  type: string;
};

export const fetchCategories = async (): Promise<Category[]> => {
  return await http.get('/categories');
};

export const createCategory = async (category: Category): Promise<Category> => {
  return await http.post('/categories', category);
};

export const updateCategory = async (category: Category): Promise<Category> => {
  return await http.put(`/categories/${category.id}`, category);
};

export const deleteCategory = async (category: Category): Promise<Category> => {
  return await http.delete(`/categories/${category.id}`);
};
