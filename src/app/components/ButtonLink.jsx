import { Link } from "react-router-dom";

function ButtonLink({
    children,
    href = '',
    icon,
    title = '',
}) {
    return (
        <Link
            className='bg-stone-100 border-2 border-stone-800 font-bold text-lg p-2 rounded-xl flex gap-1 hover:bg-stone-800 hover:text-stone-100 fill-stone-100'
            title={title}
            to={href}
        >
            <span>{icon}</span>
            <span>{children}</span>
        </Link>
    );
}

export default ButtonLink;
