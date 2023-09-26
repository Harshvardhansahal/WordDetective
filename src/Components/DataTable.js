import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../Redux/actions';
import './DataTable.css';

function DataTable() {
  const [columns] = useState([
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Question',
      dataIndex: 'question',
    },
    {
      title: 'Answer',
      dataIndex: 'answer',
    },
  ]);
  const dataSource = useSelector((state) => state.dataSource);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div>
      <Table className='table'  columns={columns} dataSource={dataSource} />
    </div>
  );
}

export default DataTable;
