
import * as yup from "yup"
import useModalStore from "../../stateManagement/model"



export const   initialValues =(record:any)=> 
{
    // console.log(record);
    
    return ({
        name:record?.name, image: record?.image ,select:record?.select
    })
    
}
export const addSchema =yup.object().shape({

})

export const imageSchema =yup.object().shape({
    // name: yup.string().required('Name is required'),
    // image: yup.mixed().required('An image is required')
})

export const slecteSchema =yup.object().shape({
// Select: yup.string()
// .required()
})