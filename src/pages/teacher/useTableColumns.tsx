import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import useModalStore from '../../stateManagement/model';





function useTableColumns() {
    const { toggleModalEdit } = useModalStore();

    const columns = [
      {
        key: '1',
        title: 'ID',
        dataIndex: 'id'
    },
    {
        key: '2',
        title: 'Name',
        dataIndex: 'name'
    },
    {
        key: '3',
        title: 'contact_information',
        dataIndex: 'contact_information'
    },
    {
        key: '4',
        title: 'address',
        dataIndex: 'address'
    },
        {
            key: '5',
            title: 'Action',
            render: (text:string,record:any) => {
                // console.log(record);
                
              return <>
                <EditOutlined
              onClick={() => toggleModalEdit( record)} 
                />
               
                <DeleteOutlined
                style={{ color: "red", marginLeft: 12 }}
                />

              </>
            }
          },
    ]

   return columns

}

export default useTableColumns
