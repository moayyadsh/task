import { baseURL, userskey } from "../config/axios";
import useAddMutation from "../function/useAddMutation";
import useDeleteQuery from "../function/useDeleteMutation";
import useGetQuery from "../function/useGetQuery";
import useUpdateQuery from "../function/useUpdateQuery";

export const API = {
    GET: "/subject?course_id=4",
    ADD: "/subject",
    UPDATE: "/subject",
    DELETE: "/teacher/",

  };


export const useGetTeachers = (param?:any) => useGetQuery(userskey ,  API.GET ,param);
export const useDeleteTeachers=(param?:any) => useDeleteQuery(userskey ,API.DELETE, param)
export const useUpdateTeachers=(param?:any) => useUpdateQuery(userskey ,API.UPDATE, param)
export const useLogin=() => useAddMutation(userskey ,API.ADD)
