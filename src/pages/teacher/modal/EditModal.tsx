
import { Button, Modal } from 'antd'
import useModalStore from '../../../statemangment/model'
import ModalComponent from './ModalForm'
import {  Formik, Form } from 'formik'
import { imageSchema, initialValues } from '../FormUtil'


function EditModal() {
  // const { mutate: addImage } = useAddMutation(baseURL, API.ADD)

  const handleSubmit = (values: any) => {
    console.log('Form data:', values);
  };
const { isOpenEdit, toggleModalEdit } = useModalStore()
  return (
    <>
<Modal
        open={isOpenEdit}
        onCancel={toggleModalEdit}
        footer={false}
      // onOk={handleImage}
      >
      <Formik
        initialValues={initialValues}
        validationSchema={imageSchema}
        onSubmit={handleSubmit}
      >
    
          <Form>
            {/* <ModalComponent /> */}
            <Button 
            
            htmlType='submit' type="primary">Submittttttttttttt</Button>
          </Form>

      </Formik>
  
      </Modal>

    </>
  )
}

export default EditModal;