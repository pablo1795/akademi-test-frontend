function Button({
    children,
    disabled,
    icon,
    onClick,
    title = '',
    type = 'button',
}) {
    return <button
        className={`${disabled ? 'bg-stone-500 text-stone-100' : 'bg-stone-100 hover:bg-blue-500 hover:text-stone-100 active:bg-blue-500 active:text-stone-100'} ? border-2 border-stone-800 font-bold text-lg p-2 rounded-xl flex gap-1`}
        disabled={disabled}
        onClick={onClick}
        title={title}
        type={type}
    >
        <span>{icon}</span>
        <span>{children}</span>
    </button>
}

export default Button;
