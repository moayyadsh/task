
import { Button } from 'antd';
import Table from './Table';
import EditModal from './modal/EditModal';
import AddModal from './modal/AddModal';
import useModalStore from '../../stateManagement/model';

const Page = () => {
  const { toggleModalAdd } = useModalStore();

  return (
    <div className='App'>
      <Button type="primary" onClick={toggleModalAdd}>
            Add Modal
          </Button>
      <AddModal/>
           <Table/>
           <EditModal/>
        </div>
  )
}

export default Page