"use client";
import { type FC, useEffect } from "react";
import scss from "./UpdateForm.module.scss";
import { useUpdateTodo } from "@/api/updateTodo";
import { useForm } from "react-hook-form";
import { QueryClient } from "@tanstack/react-query";

interface Props {
  todo: UPDATETODO.UpdateTodoReq;
  onClose: () => void;
  queryClient: QueryClient;
}

const UpdateForm: FC<Props> = ({ todo, onClose, queryClient }) => {
  const { register, handleSubmit, reset } = useForm<UPDATETODO.UpdateTodoReq>();
  const updateTodo = useUpdateTodo();

  useEffect(() => {
    reset(todo);
  }, [todo, reset]);

  const onSubmit = (data: UPDATETODO.UpdateTodoReq) => {
    updateTodo.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getAllTodo"] });
        onClose();
      },
    });
  };

  return (
    <section className={scss.UpdateForm}>
      <div className="container">
        <div className={scss.content}>
          <h2>Update Todo</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" {...register("id")} />
            <input type="text" placeholder="Title" {...register("title")} />
            <input type="number" placeholder="Age" {...register("age")} />
            <input type="text" placeholder="Name" {...register("name")} />
            <textarea placeholder="Description" {...register("description")} />
            <input type="text" placeholder="Image URL" {...register("image")} />
            <div className={scss.actions}>
              <button type="submit">Update</button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdateForm;
