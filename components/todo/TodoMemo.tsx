import { useEffect } from "react";


type memoProps = {
  memoInput: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };
  todoDetail: any
};




const TodoMemo = ({memoInput, todoDetail} : memoProps) => {



    useEffect(() => {
      if (todoDetail.memo) {
        memoInput.setValue(todoDetail.memo);
      }
    }, [todoDetail.memo]);



    return(
        <>
             <div className="relative w-full h-[300px] rounded-xl bg-[url('/assets/memo.png')] bg-cover bg-no-repeat p-4" >
                     <h2 className="text-center text-sm text-amber-900 font-semibold mb-2">Memo</h2>


                     <textarea
                         value={memoInput.value}
                         onChange={memoInput.handleChange}
                         placeholder="메모를 입력하세요..."
                         className="w-full h-full bg-transparent resize-none outline-none text-center text-gray-700 font-normal overflow-y-auto"
                     />
                </div>    
        </>
    )
}

export default  TodoMemo