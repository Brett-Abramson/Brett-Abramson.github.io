const Button = ({customClassname, buttonText}) => {
    return (
        <button className={`my-1 rounded bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500 px-2 py-1 text-xs font-semibold text-slate-50 lg:text-base ${customClassname}`}>
        {buttonText}
      </button>
    )
}
export default Button