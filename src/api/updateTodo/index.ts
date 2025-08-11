import { useMutation } from "@tanstack/react-query";
import { api } from "..";

const useUpdateTodo = () => {
  return useMutation<UPDATETODO.UpdateTodoRes, Error, UPDATETODO.UpdateTodoReq>(
    {
      mutationKey: ["getAllTodo"],
      mutationFn: async ({ id, ...data }) => {
        const response = await api.put(`/todo/update/${id}`, data);
        return response.data;
      },
    }
  );
};

export { useUpdateTodo };
