import { Button, Modal } from 'antd'
import useModalStore from '../../../statemangment/model'
import ModalComponent from './ModalForm'
import { Formik, Form } from 'formik'
import { addSchema, initialValues } from '../FormUtil'
import { useAddTeacher } from '../../../api/teachers'
import { useAddSubject } from '../../../api/subject'
import { useState } from 'react'

function AddModal() {
  const [image, setImage] = useState<File | null>(null);
  const {mutate} = useAddSubject()

  
  const handleSubmit = (values: any) => {
    console.log('Form data:', values);

    const sendData = new FormData();
    sendData.append('id', '1');
    sendData.append('name', values.name);

    if (image) {
      sendData.append('image', image);
      console.log('Image appended to FormData:', image);
    } else {
      console.error('No image selected.');
    }

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

