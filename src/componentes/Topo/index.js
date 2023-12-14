import { Link } from "react-router-dom";
import "./style.css"

export default function Topo() {
    return (
        <header>
            <div className="limitar-secao">
                <img src="../assets/logo.png" alt="" />
                <nav>
                    <Link to="/" className="link-topo">Home</Link>
                    <Link to="/sabores" className="link-topo">Sabores</Link>
                    <Link to="/sobre" className="link-topo">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}