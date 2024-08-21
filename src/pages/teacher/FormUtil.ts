
import * as yup from "yup"

export const   initialValues = {
    name: '', image: null ,select:null
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