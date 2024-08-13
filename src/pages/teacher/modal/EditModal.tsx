import React, { ChangeEvent, useState } from 'react'
import {Modal} from 'antd'
import useModalStore from '../../../statemangment/model'
import ModalComponent from './ModalForm'
import useAddMutation from '../../../function/useAddMutation'
import { API } from '../../../api/teachers'
import { baseURL } from '../../../config/axios'
import { Formik, useFormikContext } from 'formik'
import { Form } from 'react-router-dom'


function EditModal() {
  // const {setFieldValue} = useFormikContext();
  // const handelChange =(e:ChangeEvent<HTMLInputElement>)=>{
  //   setFieldValue("name",e.target.value)
  // }

  const[image,setImage]=useState('')
  const {mutate:addImage}=useAddMutation(baseURL,API.ADD)
  function handleImage(){
   const img = {image,id:4}
   const sendData = new FormData()
       sendData.append('id','4')
       sendData.append('image',image)
   
       addImage(sendData);

  }

 const { isOpen, toggleModal } = useModalStore()
    return (
      <>
      {/* <Formik
      initialValues={{photo1:""}}
      onSubmit={(values)=>{
        console.log(values);
        
      }}
      validationSchema={{}}
      /> */}

      {/* <Form>
        <input  onChange={(event)=>handelChange(event)} name='file' type='file'></input>
      </Form> */}
        <Modal
        open={isOpen}
        onCancel={toggleModal}
        onOk={handleImage}
        >
            
      <ModalComponent/>
        </Modal>

        </>
)
}

export default EditModal


    // const [isEdating, setIsEdating] = useState(false)
    // const { mutate: updatData } = useUpdateTeachers({})
    // const onEdit = (record: any) => {

    //     setIsEdating(true)
    // }

    // (record: any) => {
    //     return <>
    //         <EditOutlined onClick={() => {
    //             onEdit(record)
    //         }} />
    //     </>
    // }