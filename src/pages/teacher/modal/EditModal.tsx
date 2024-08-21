
import { Button, Modal } from 'antd'
import useModalStore from '../../../statemangment/model'
import ModalComponent from './ModalForm'
import {  Formik, Form } from 'formik'
import { imageSchema, initialValues } from '../FormUtil'
import { useUpdateSubject } from '../../../api/subject'


function EditModal() {
  // const { mutate: addImage } = useAddMutation(baseURL, API.ADD)
  const {mutate} = useUpdateSubject()
  const { isOpenEdit, toggleModalEdit } = useModalStore()

  const handelSubmit = (values:any )=>{

    const EditedData = structuredClone(values);
  
    mutate({...EditedData})

  }

  return (
    <>
<Modal
        open={isOpenEdit}
        onCancel={toggleModalEdit}
        footer={false}
   
      >
      <Formik
        initialValues={initialValues}
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