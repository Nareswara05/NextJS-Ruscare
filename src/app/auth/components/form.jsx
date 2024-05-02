
function Form({label, value, onChange, placeholder, type}) {
    return (
        <div className="flex flex-col w-full items-start">
            <h2 className="text-primaryText text-sm lg:text-base mb-2 text-textPrimary">{label}</h2>
            <input
                className="w-full border-b py-2 border-black focus:outline-none text-textPrimary lg:text-xl"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
            />
        </div>
    );
}

export default Form;