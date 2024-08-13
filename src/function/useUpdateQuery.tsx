import { useMutation } from 'react-query';
import axios from 'axios';
import { baseURL } from '../config/axios';



function useUpdateQuery(
  KEY: string ,
  url: string,
  params: Record<string, any> = {},
) {
  // https://school-demo-back.point-dev.net/api/subject?course_id=4
 return useMutation( 
  async (updatData:any) => {
    const { data } = await axios.post( baseURL+ url, { 
      headers:{
       Authorization:'Bearer FVKuMLqSwyKTEUQTDNXdtFE2aK0G9oQyHFkg6mlk2f63654a'
      }
     });
    return data;
  },)
}

export default useUpdateQuery;