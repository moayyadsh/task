import useDeleteQuery from "./helper/useDeleteMutation";
import useGetQuery from "./helper/useGetQuery";
import useUpdateQuery from "./helper/useUpdateQuery";

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