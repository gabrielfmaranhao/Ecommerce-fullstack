
interface ILabelProps {
    text: string
    html: string
}
const Label = ({text, html}:ILabelProps) => {
    return <label htmlFor={html}>{text}</label>
    
}

export default Label