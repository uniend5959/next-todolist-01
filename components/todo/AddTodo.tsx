import useInput from "@/hook/useInput";
import { getTodo, postTodo } from "@/lib/api/todoApi";
import Button from "../button/boxButton";


// 할일을 등록하는 컴포넌트 

const AddTodo = ({ onAdd }: { onAdd: () => void }) => {

    // 재상용을 위한 커스텀 INPUT 훅을 제작하여, 코드를 재사용성을 높이고 가독성을 올렸습니다. 
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
