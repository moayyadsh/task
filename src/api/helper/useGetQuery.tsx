import { useQuery } from 'react-query';
import axios from 'axios';
import { baseURL } from '../../config/axios';


function useGetQuery(
  KEY: string ,
  url: string,
  params: Record<string, any> = {},
) {

  return useQuery({
    queryKey: [KEY], 
    queryFn: async () => {
      const response = await axios.get( baseURL+ url, { 
        headers:{
          "Content-Type":"application/json",
          Authorization:'Bearer FVKuMLqSwyKTEUQTDNXdtFE2aK0G9oQyHFkg6mlk2f63654a'
        }
       });
      return response?.data ?? [];
    },
    
  }
);
}

export default useGetQuery;