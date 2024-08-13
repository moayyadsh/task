import { Button, Table, Modal, Form, Input, Select, Checkbox, CheckboxProps, SelectProps, DatePickerProps, DatePicker, UploadProps, message, Upload } from 'antd'

import useModalStore from '../../../statemangment/model';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';


const ModalComponent = () => {
  const[image,setImage]=useState('')

  const options: SelectProps['options'] = [];

  for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
  }
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeDate: DatePickerProps<DatePickerProps>['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };
  function handleImage(){
    const img = {image,id:4}
    const sendData = new FormData()
        sendData.append('id','4')
        sendData.append('image',image)
        sendData.append('_method','PUT')
 
    // updateImage(sendData);
 
   }
  
  
  return (

    <>
     tField.js
<Input
  type="file"
  name="file"
/>
      <Form.Item
        name="Text" label="text"

      >
        <Input placeholder="Inter A Text" />
      </Form.Item>

      <Form.Item
        name="Date" label="Date"

      >
        <DatePicker onChange={onChangeDate} needConfirm />
      </Form.Item>
      <Form.Item>
        <Select
          defaultValue="lucy"
          style={{ width: 120 }}
          loading
          options={[{ value: 'lucy', label: 'Lucy' }]}
        />
      </Form.Item>
      <Form.Item>
        <Select
          mode="multiple"
          disabled
          style={{ width: '100%' }}
          placeholder="Please select"
          // defaultValue={['a10', 'c12']}
          onChange={handleChange}
          options={options}
        />
      </Form.Item>
      <Form.Item>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>
      </Form.Item>
    </>
  );
};

export default ModalComponent;