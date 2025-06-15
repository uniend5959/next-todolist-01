    import { Children } from "react"

    // props에따라 색상과 타입이 변경되는 기본 버튼 
    
    type Props = {
        theme: "add" | "complete" | "edit" | "delete";
        children: React.ReactNode;
        className?: string;
        onClick?: () => void;
        type?: "button" | "submit" | "reset";
    };

    const Button = ({
        type = "button",
        theme,
        children,
        className = '',
        onClick,
        }: Props) => {

        const buttonBaseClass = "w-[168px] h-[56px] px-8 py-4 border-2 rounded-3xl cursor-pointer "

        const buttonTheme = {
            add: "bg-[var(--color-slate-2)] text-[#000] hover:bg-[var(--color-lime-3)]",
            complete: "bg-[var(--color-lime-3)] text-[#000]",
            edit: "bg-[var(--color-slate-3)] text-[#000] hover:bg-[var(--color-lime-3)]",
            delete: "bg-[var(--color-rese-5)] text-[#000] hover:text-white",
        };

        return(
            <>
            <button
                type={type}
                onClick={onClick}
                className={`${buttonBaseClass} ${buttonTheme[theme]} ${className}`}
            > 
                    {children}        
                </button> 
            </>
        )
    }

    export default  Button