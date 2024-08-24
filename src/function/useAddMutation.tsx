import { useMutation } from 'react-query';
import axios from 'axios';
import { baseURL } from '../config/axios';


function useAddMutation(
  url: string,
) {

 return useMutation( 
  async (dataToSend:any) => {
    console.log(dataToSend,"dataToSend");
    
    const { data } = await axios.post(baseURL+url , dataToSend,{
      headers:{
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

}
)
}

export default useAddMutation;