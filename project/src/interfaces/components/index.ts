import { ButtonHTMLAttributes, InputHTMLAttributes, FormHTMLAttributes} from "react"

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    name?: string
    width: number,
    height: number,
    b_color: "white" | "black" | "red" 
    color: "white" | "black" | "red"
}
export interface IInputProps extends InputHTMLAttributes<HTMLInputElement>  {
    width: number;
    height: number;
    register: any
}

export interface ILabelProps {
    text: string
    html: string
}

export interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode 
    text: string
    handleSubmit?: any
    onClick?: () => void
}
