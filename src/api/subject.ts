
import useAddMutation from "../function/useAddMutation";
import useDeleteQuery from "../function/useDeleteMutation";
import useGetQuery from "../function/useGetQuery";
import useUpdateQuery from "../function/useUpdateQuery";

export const API = {
    GET: "/subject?course_id=4",
    ADD: "/subject",
    UPDATE: "/subject",
    DELETE: "/subject/",

  };

  const KEY = "subject";

export const useGetSubject = (param?:any) => useGetQuery(KEY ,  API.GET ,param);
export const useDeleteSubject=(param?:any) => useDeleteQuery(KEY ,API.DELETE, param)
export const useUpdateSubject=(param?:any) => useUpdateQuery(KEY ,API.UPDATE, param)
export const useAddSubject=() => useAddMutation(API.ADD)

// export const useLogin=() => useAddMutation(userskey ,API.ADD)
