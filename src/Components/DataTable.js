import React, { useEffect, useState } from 'react';
import { Table, Tag ,Spin} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../Redux/actions';
import './DataTable.css';

function DataTable() {
  const [columns] = useState([
    {
      title: 'Question',
      dataIndex: 'id',
    },
    {
      title: '',
      dataIndex: 'question',
    },
    {
      title: 'Answer',
      dataIndex: 'answer',
      render: (text, record) => (
        // Check if record.answer is an array
        Array.isArray(record.answer) ? (
          <span >
            {record.answer.map((tag, index) => (
              <Tag  key={index}>{tag}</Tag>
            ))}
          </span>
        ) : (
          // If not an array, display a single Tag
          <Tag color="green">{record.answer}</Tag>
        )
      ),
    },
  ]);
  const dataSource = useSelector((state) => state.dataSource);
  const loading = useSelector((state) => state.loading); // Add loading state
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, []);

  return (
    <div>
      {loading ? ( // Conditional rendering based on loading state
        <Spin tip="Loading" size="large" ><Table className='table' columns={columns} dataSource={dataSource} /> </Spin> // Display a loading spinner
      ) : (
        <Table className='table' columns={columns} dataSource={dataSource} />
      )}
    </div>
  );
}

export default DataTable;
