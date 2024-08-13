import { useMutation } from 'react-query';
import axios from 'axios';
import { baseURL } from '../config/axios';



function useAddMutation(
  KEY: string ,
  url: string,
) {

 return useMutation( 
  async (dataToSend:any) => {
    const { data } = await axios.post(baseURL+url , dataToSend,{
      headers:{
        "Content-Type":"application/json",
        Authorization:'Bearer FVKuMLqSwyKTEUQTDNXdtFE2aK0G9oQyHFkg6mlk2f63654a',
        "x-cycle-id": 1,
         "x-branch-id": 1,
         "x-term-id": 1,
      }
    });
    return data;
  },
{
  onSuccess(data) {
    console.log(data);
    
  },
  onError(error, variables, context) {
    
  },
}
)
}

export default useAddMutation;