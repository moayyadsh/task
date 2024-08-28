
import useAddMutation from "./helper/useAddMutation";
import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

export const API = {
    GET: "/subject?course_id=4",
    ADD: "/subject",
    UPDATE: "/subject",
    DELETE: "/subject/",

  };

  const KEY = "subject";

export const useGetSubject = (param?:any) => useGetQuery(KEY ,  API.GET ,param);
export const useDeleteSubject=(param?:any) => useDeleteQuery(KEY ,API.DELETE, param)
export const useUpdateSubject=() => useUpdateQuery(KEY ,API.UPDATE)
export const useAddSubject=() => useAddMutation(API.ADD)

// export const useLogin=() => useAddMutation(userskey ,API.ADD)
