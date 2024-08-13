import React, { useState } from 'react'
import useTableColumns from './useTableColumns'
import {Table as DataTable} from 'antd'
import { useGetTeachers } from '../../api/teachers';

function Table() {
  
    const columns = useTableColumns();
    const { data,isLoading} = useGetTeachers({});

  
    
  return (
    <DataTable
    columns = {columns as any} 
    dataSource={data?.data}
    rowKey="key"
    loading={isLoading}
    
    />
    
  )
}
export default Table