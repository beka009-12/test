namespace UPDATETODO {
  type UpdateTodoRes = {
    success: boolean;
    data: {
      id: number;
      title: string;
      age: number;
      name: string;
      description: string;
      image: string;
    };
  };

  type UpdateTodoReq = {
    id: number;
    title?: string;
    age?: number;
    name?: string;
    description?: string;
    image?: string;
  };
}
