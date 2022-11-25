import { IInputProps } from "../../../interfaces/components"
const Input = ({type, placeholder, height, width, register}:IInputProps) => {
    return(
        <input type={type} placeholder={placeholder} width={width} height={height} {...register}/>
    )
}
export default Input