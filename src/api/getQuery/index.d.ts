namespace GETALL {
  type GetAllRes = {
    success: boolean;
    data: {
      id: number;
      title: string;
      age: number;
      name: string;
      description: string;
      image: string;
    }[];
  };
  type GetAllReq = void;
}
