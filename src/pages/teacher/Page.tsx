import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import Table from './Table';
import EditModal from './modal/EditModal';
import AddModal from './modal/AddModal';

const Page = () => {

  return (
    <div className='App'>
      <AddModal/>
           <Table/>
           <EditModal/>
        </div>
  )
}

export default Page