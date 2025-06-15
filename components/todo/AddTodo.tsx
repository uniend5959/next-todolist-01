import useInput from "@/hook/useInput";
import { getTodo, postTodo } from "@/lib/api/todoApi";
import Button from "../button/boxButton";



const AddTodo = ({ onAdd }: { onAdd: () => void }) => {
    const {value,setValue, handleChange }  = useInput('')

    const handleSubmit = async  (e : React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
 
         try {
            await postTodo({ name: value }); // 서버로 데이터 전송
            setValue(''); 
            onAdd()
        } catch (err) {
            console.error('에러 발생:', err);
            alert('등록 실패!');
        }

    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-between items-center w-full gap-2">
                        <input 
                            type="text" 
                            value={value}
                            placeholder="할 일을 입력하세요"
                            onChange={handleChange}
                            className="w-5/6  h-[50px] border px-2 py-1 rounded "
                            />
                        <Button 
                            theme="add"
                            type="submit"
                            className="w-1/6" 
                            >추가하기
                        </Button>
                </div>
            </form>
        </>
    )
}

export default AddTodo; 
