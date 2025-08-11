import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const getAllTodo = () => {
  return useQuery<GETALL.GetAllRes, GETALL.GetAllReq>({
    queryKey: ["getAllTodo"],
    queryFn: async () => {
      const response = await api.get("/todo/get-all");
      return response.data;
    },
  });
};

export { getAllTodo };
