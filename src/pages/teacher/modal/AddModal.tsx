import { Button } from 'antd'
import useModalStore from '../../../statemangment/model';

function AddModal() {
    const { toggleModal } = useModalStore();

  return (
<>
<Button type="primary" onClick={toggleModal}>
            Add Modal
          </Button>
</>
  )
}

export default AddModal