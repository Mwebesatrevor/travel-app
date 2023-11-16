import { type } from "os"

type ButtonProps = {
    type : "button" | "submit"; 
    title : string;
    icon? : string;
    variant : "btn_dark_green" ;
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button
        className={`flexCenter gap-3 rounded-full border ${variant}`}
        type={type}
    >
        {icon && <img src={icon} alt={title} height={24} width={24} />}
        <label>{title} </label>
    </button>
  )
}

export default Button