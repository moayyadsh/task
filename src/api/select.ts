import useDeleteQuery from "../function/useDeleteMutation";
import useGetQuery from "../function/useGetQuery";
import useUpdateQuery from "../function/useUpdateQuery";

export const API = {
    GET: "/teacher",
    ADD: "/teacher",
    UPDATE: "/teacher",
    DELETE: "/teacher/",

  };

  const KEY = "teacher";
export const useGetTeachers = (param?:any) => useGetQuery(KEY ,  API.GET ,param);
export const useDeleteTeachers=(param?:any) => useDeleteQuery(KEY ,API.DELETE, param)
export const useUpdateTeachers=(param?:any) => useUpdateQuery(KEY,API.UPDATE, param)