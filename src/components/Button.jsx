import {Link} from "react-router-dom"

const Button = ({children, props, to, className}) => {
  return (
    <Link className={`py-3 px-5 bg-onyx hover:bg-zinc-800 text-primary hover:text-white transition-all inline-flex gap-2 rounded font-medium ${className}`} {...props} to={to}>
        {children}
    </Link>
  )
}

export default Button