import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-stone-800 text-stone-100 min-w-full flex justify-between items-center p-4">
            <a href="/" title="ir a inicio">
                <h1 className="text-2xl font-bold uppercase">
                    abm empleados
                </h1>
                <h2 className="text-xl font-bold">
                    crud employees
                </h2>
            </a>

            <div className="sm:hidden">
                {
                    <button>➰</button> ||
                    <button>〰</button>
                }
            </div>

            <ul className="hidden sm:flex gap-4">
                <li>
                    <Link
                        className="font-bold hover:bg-stone-100 px-4 py-2 hover:text-stone-900"
                        title="ir a inicio"
                        to="/home"
                    >Inicio</Link>
                </li>
                <li>
                    <Link
                        className="font-bold hover:bg-stone-100 px-4 py-2 hover:text-stone-900"
                        to="/employee"
                        title="ir a empleados"
                    >Empleados</Link>
                </li>
                <li>
                    <Link
                        className="font-bold hover:bg-stone-100 px-4 py-2 hover:text-stone-900"
                        to="/asset"
                        title="ir a activos"
                    >Activos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
