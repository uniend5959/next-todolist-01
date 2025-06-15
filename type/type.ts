
export interface DeviceTypes {
    isMobile: boolean;
}

export type Todo = {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
};


export type TodoDetailType = {
  id: number;
  name: string;
  memo?: string;
  imageUrl?: string;
  isCompleted: boolean;
};