const Button = (props) => {
    return (
        <button className="my-1 rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-2 py-1 text-xs font-semibold text-white lg:text-base" >
        {props.buttonText}
      </button>
    )
}
export default Button