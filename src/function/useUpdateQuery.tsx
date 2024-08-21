import { useMutation } from 'react-query';
import axios from 'axios';
import { baseURL } from '../config/axios';



function useUpdateQuery(
  KEY: string ,
  url: string,
  params: Record<string, any> = {},
) {
 return useMutation( 
  async (EditedData:any) => {
    const { data } = await axios.post( baseURL+ url+"/" +EditedData?.id,EditedData,{ 
      headers:{
        "Content-Type":"application/json",
        Authorization:'Bearer FVKuMLqSwyKTEUQTDNXdtFE2aK0G9oQyHFkg6mlk2f63654a',
       "x-cycle-id": 1,
       "x-branch-id": 1,
       "x-term-id": 1,
      }
     });
    return data;
  },)
}

export default useUpdateQuery;