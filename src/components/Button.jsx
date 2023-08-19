import {Link} from "react-router-dom"

const Button = ({children, to, className, target, rel}) => {
  return (
    <Link className={`py-3 px-5 bg-onyx hover:bg-zinc-800 text-primary hover:text-white transition-all inline-flex gap-2 rounded font-medium ${className}`} to={to} target={target} rel={rel}>
        {children}
    </Link>
  )
}

export default Button