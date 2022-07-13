/*
 * @Author: kristennn 13949836783@163.com
 * @Date: 2022-07-05 16:55:13
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-13 15:52:15
 * @FilePath: /demo/src/api/product.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { http } from '../utils/request';

export type Product = {
  id?: number;
  categoryId: number;
  code: string;
  url: string;
  createdAt: string;
  updatedAt: string;
};

export const fetchProducts = async (): Promise<Product[]> => {
  return await http.get('/products');
};

export const deleteProduct = async (product: Product): Promise<Product> => {
  return await http.delete(`/products/${product.id}`);
};

export const generateProducts = async (params: {
  amount: number;
  id: number;
}): Promise<Product> => {
  return await http.post('/category/generate', params);
};
