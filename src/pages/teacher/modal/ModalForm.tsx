import { Form, Input, Select } from 'antd'
import { useFormikContext } from 'formik';
import { useGetTeachers } from '../../../api/select';
import { useState } from 'react';
const ModalComponent = () => {

  const { data, isLoading } = useGetTeachers();


  const { setFieldValue, values } = useFormikContext<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFieldValue(name, value)
    console.log(value);


  }



  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.files?.[0];
    console.log(value,"value");
    
    const name = e.target.name;
    setFieldValue("image", value)

  }
  function handleChangeSelect(value: any) {
    console.log(`selected ${values}`);
    setFieldValue('select', value);

  }
  const onSearch = (value: string) => {
    console.log('search:', value);
  };
  console.log(data?.data?.[1]?.id);

  

  return (<>

    <div>
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={handleChangeImage}  name='image' placeholder="Inter A file"
      />
    </div>
    <Form.Item
      name="Text" label="text"

    >
      <Input onChange={handleChange} value={values?.name} name='name' placeholder="Inter A Text" />
    </Form.Item>

    <Form.Item
    >
      <Select
        showSearch
        placeholder="Select a person"
        optionFilterProp="name"
        fieldNames={{label:"name",value:"id"}}
        value={values?.select }
        loading={isLoading}
        onChange={handleChangeSelect}
        onSearch={onSearch}
        options={data?.data ?? []}
        style={{ width: 200 }}

        
      />


    </Form.Item>

  </>
  );
};

export default ModalComponent;





