import { Button, Modal } from 'antd'
import useModalStore from '../../../stateManagement/model'
import ModalComponent from './ModalForm'
import { Formik, Form } from 'formik'
import { addSchema, initialValues } from '../FormUtil'
import { useAddSubject } from '../../../api/subject'

function AddModal() {
  const {mutate} = useAddSubject()

  
  const handleSubmit = (values: any) => {
    console.log('Form data:', values);
    console.log(values?.image,"values?.image");

    const sendData = new FormData();
    sendData.append('id', '1');
    sendData.append('name', values.name);
   sendData.append('image', values?.image);


    mutate(sendData);
  };

  const { isOpenAdd, toggleModalAdd } = useModalStore()
  return (
    <>

      <Modal
        open={isOpenAdd}
        onCancel={toggleModalAdd}
        footer={false}
      >

        <Formik
          initialValues={initialValues}
          validationSchema={addSchema}
          onSubmit={handleSubmit}
        >
          {({ }) => (
            <Form>
              <ModalComponent/>
              <Button

                htmlType='submit' type="primary">Submit</Button>
            </Form>
          )}
        </Formik>
      </Modal>

    </>
  )
}

export default AddModal

