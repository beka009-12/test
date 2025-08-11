"use client";
import { type FC, useState } from "react";
import { getAllTodo } from "@/api/getQuery/indext";
import { useQueryClient } from "@tanstack/react-query";
import scss from "./TodoList.module.scss";
import UpdateForm from "./update/UpdateForm";

const TodoList: FC = () => {
  const { data: getAll } = getAllTodo();
  const queryClient = useQueryClient();

  const [selectedTodo, setSelectedTodo] =
    useState<UPDATETODO.UpdateTodoReq | null>(null);

  return (
    <div className={scss.list}>
      <div className="container">
        <h1 style={{ marginBottom: "40px" }}>This is legend team</h1>
        <div className={scss.content}>
          {getAll?.data.map((item) => (
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              key={item.id}
              className={scss.item}
            >
              <h3 className={scss.title}>{item.title}</h3>
              <p className={scss.description}>{item.description}</p>
              <button onClick={() => setSelectedTodo(item)}>Update</button>
            </div>
          ))}
        </div>

        {selectedTodo && (
          <UpdateForm
            todo={selectedTodo}
            onClose={() => setSelectedTodo(null)}
            queryClient={queryClient}
          />
        )}
      </div>
    </div>
  );
};

export default TodoList;
