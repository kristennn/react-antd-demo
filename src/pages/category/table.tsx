/*
 * @Author: kristennn 13949836783@163.com
 * @Date: 2022-07-05 17:00:00
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-05 17:09:46
 * @FilePath: /demo/src/pages/category/table.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, Space, Table } from 'antd';

import { Category } from '../../api/category';
import { ColumnsType } from 'antd/lib/table';

const handleEdit = (item: Category) => {};
const handleGenerate = (item: Category) => {};
const handleDelete = (item: Category) => {};

const columns: ColumnsType<Category> = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '编号',
    dataIndex: 'code',
    key: 'code',
  },
  {
    title: '釉色',
    dataIndex: 'glaze',
    key: 'glaze',
  },
  {
    title: '品类',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: '系列',
    dataIndex: 'series',
    key: 'series',
  },
  {
    title: '尺寸',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
  },
  {
    title: '创建日期',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '操作',
    key: 'operate',
    render: (_, record) => (
      <Space size='middle'>
        <Button onClick={() => handleEdit(record)} type='primary'>
          编辑
        </Button>
        <Button onClick={() => handleGenerate(record)} type='primary'>
          生成产品
        </Button>
        <Button onClick={() => handleDelete(record)} danger type='primary'>
          删除
        </Button>
      </Space>
    ),
  },
];

const data: Category[] = [
  {
    key: 2,
    code: 'YBXQ003',
    createdAt: '2022-03-24T07:59:35.000Z',
    glaze: 'YB',
    id: 2,
    imgUrl: '',
    name: '测试数据1',
    remark: '',
    series: '003',
    size: '8',
    type: 'XQ',
  },
];

const categoryTable = () => <Table columns={columns} dataSource={data} />;

export default categoryTable;
