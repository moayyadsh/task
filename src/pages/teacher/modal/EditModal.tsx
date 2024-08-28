
import { Button, Modal } from 'antd'
import useModalStore from '../../../stateManagement/model'
import ModalComponent from './ModalForm'
import {  Formik, Form } from 'formik'
import { imageSchema, initialValues } from '../FormUtil'
import { useUpdateSubject } from '../../../api/subject'
import { appendData } from '../../../api/helper/useFormData'


function EditModal() {
  const {mutate} = useUpdateSubject()
  const { isOpenEdit, record,toggleModalEdit } = useModalStore()

  const handelSubmit = (values:any )=>{

    // const EditedData = new FormData();
    // EditedData.append('id', '1');
    // EditedData.append('name', values.name);
    // EditedData.append('image', values?.image);
    const sendData = new FormData();
    appendData(sendData, values);
 mutate({...sendData,"_method":"PUT",id:record.id})

  }

  

  return (
    <>
<Modal
        open={isOpenEdit}
        onCancel={toggleModalEdit}
        footer={false}
   
      >
      <Formik
        initialValues={initialValues(record)}
        validationSchema={imageSchema}
        onSubmit={handelSubmit}
      >
    
          <Form>
            <ModalComponent />
            <Button 
            
            htmlType='submit' type="primary">Submittttttttttttt</Button>
          </Form>

      </Formik>
  
      </Modal>

    </>
  )
}

export default EditModal;