
import useAddMutation from "../function/useAddMutation";
import useDeleteQuery from "../function/useDeleteMutation";
import useGetQuery from "../function/useGetQuery";
import useUpdateQuery from "../function/useUpdateQuery";

export const API = {
    GET: "/teacher",
    ADD: "/teacher",
    UPDATE: "/teacher",
    DELETE: "/teacher/",

  };

  const KEY = "Teacher";

export const useGetTeacher = (param?:any) => useGetQuery(KEY ,  API.GET ,param);
export const useDeleteTeacher=(param?:any) => useDeleteQuery(KEY ,API.DELETE, param)
export const useUpdateTeacher=(param?:any) => useUpdateQuery(KEY ,API.UPDATE, param)
export const useAddTeacher=() => useAddMutation(API.ADD)

// export const useLogin=() => useAddMutation(userskey ,API.ADD)
