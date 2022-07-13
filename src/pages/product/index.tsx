import { Button, Popconfirm, Space, Table } from 'antd';
/*
 * @Author: KristenZheng kristen@electracharger.com
 * @Date: 2022-06-29 17:08:01
 * @LastEditors: kristennn 13949836783@163.com
 * @LastEditTime: 2022-07-13 16:25:42
 * @FilePath: /demo/src/pages/dashboard/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Product as ProductType, deleteProduct } from '../../api/product';

import { ColumnsType } from 'antd/lib/table';

const Product = () => {
  const handleDownloadImg = (record: ProductType) => {};
  const handleDelete = (record: ProductType) => {
    deleteProduct(record);
  };
  const columns: ColumnsType<ProductType> = [
    {
      title: '图片',
      dataIndex: 'url',
      key: 'url',
      render: (_, record) => (
        <img
          src='https://static.runoob.com/images/demo/demo1.jpg'
          style={{ width: 100 }}
          alt={'qrcode'}
        />
      ),
    },
    {
      title: '编号',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '品类',
      dataIndex: 'categoryId',
      key: 'categoryId',
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
          <Button onClick={() => handleDownloadImg(record)} type='primary'>
            下载二维码
          </Button>
          <Popconfirm
            title='确定要删除吗?'
            onConfirm={() => handleDelete(record)}
          >
            <Button danger type='primary'>
              删除
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const data: ProductType[] = [
    {
      categoryId: 2,
      code: 'YBXQ0038013034',
      createdAt: '2022-04-11T08:49:26.000Z',
      id: 34,
      updatedAt: '2022-04-11T08:49:26.000Z',
      url: 'http://119.45.163.156:8080?product=YBXQ0038013034',
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default Product;
