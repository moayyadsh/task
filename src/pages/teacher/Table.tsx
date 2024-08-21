import useTableColumns from './useTableColumns'
import {Table as DataTable} from 'antd'
import { useGetSubject } from '../../api/subject';

function Table() {
  
    const columns = useTableColumns();
    const { data,isLoading} = useGetSubject({});

  
    
  return (
    <DataTable
    columns = {columns as any} 
    dataSource={data?.data}
    rowKey="key"
    loading={isLoading}
    size='large'
    
    />
    
    
  )
}
export default Table