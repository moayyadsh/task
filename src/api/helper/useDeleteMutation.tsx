import { useMutation} from 'react-query';
import axios from 'axios';
import { baseURL } from '../../config/axios';


function useDeleteQuery(
  KEY: string ,
  url: string,
  params: Record<string, any> = {},
) {

    return useMutation( 
        async (DataToSend:any) => {
        const id  = DataToSend?.id
      const {data} = await axios.delete( baseURL+ url +id ,params);
      return {...data,DataToSend};
    
  },
)
  
}

export default useDeleteQuery;