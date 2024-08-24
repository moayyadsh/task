
import { Button, Modal } from 'antd'
import useModalStore from '../../../stateManagement/model'
import ModalComponent from './ModalForm'
import {  Formik, Form } from 'formik'
import { imageSchema, initialValues } from '../FormUtil'
import { useUpdateSubject } from '../../../api/subject'
import { useState } from 'react'
import { useGetTeachers } from '../../../api/select'


function EditModal() {
  const { data, isLoading } = useGetTeachers();

  const[image,setImage]=useState('')
  // const { mutate: addImage } = useAddMutation(baseURL, API.ADD)
  const {mutate} = useUpdateSubject()
  const { isOpenEdit, record,toggleModalEdit } = useModalStore()

  const handelSubmit = (values:any )=>{

    const EditedData = structuredClone(values);
  console.log();
  const Id = data?.data?.[1]?.id;
  
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