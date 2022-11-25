import { ILabelProps } from "../../../interfaces/components"

const Label = ({text, html}:ILabelProps) => {
    return <label htmlFor={html}>{text}</label>
    
}

export default Label