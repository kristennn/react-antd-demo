import { ColumnsType } from 'antd/lib/table';
/*
 * @Author: KristenZheng kristen@electracharger.com
 * @Date: 2022-06-29 17:08:01
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-05 13:48:46
 * @FilePath: /demo/src/pages/dashboard/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Table } from 'antd';

interface DataType {
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
}

const columns: ColumnsType<DataType> = [
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
  // {
  //   title: '操作',
  //   dataIndex: 'name',
  //   key: 'name',
  // },
];

const data: DataType[] = [
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

const renderTable = () => <Table columns={columns} dataSource={data} />;

const Category = () => {
  return <div>{renderTable()}</div>;
};
export default Category;
