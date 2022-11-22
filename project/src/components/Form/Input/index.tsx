import { InputHTMLAttributes } from "react"

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    width: number;
    height: number;
    register: any
}
const Input = ({type, placeholder, height, width, register}:IInputProps) => {
    return(
        <input type={type} placeholder={placeholder} width={width} height={height} {...register}/>
    )
}
export default Input