
import { Button, Modal } from 'antd'
import useModalStore from '../../../stateManagement/model'
import ModalComponent from './ModalForm'
import {  Formik, Form } from 'formik'
import { imageSchema, initialValues } from '../FormUtil'
import { useUpdateSubject } from '../../../api/subject'


function EditModal() {
  // const { mutate: addImage } = useAddMutation(baseURL, API.ADD)
  const {mutate} = useUpdateSubject()
  const { isOpenEdit, record,toggleModalEdit } = useModalStore()

  const handelSubmit = (values:any )=>{

    const EditedData = structuredClone(values);
  
    mutate({...EditedData,"_method":"PUT"})

  }
  console.log(record);
  

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