import { NavLink } from "react-router-dom";
import '../styles/hamburg.css';
import { X } from "lucide-react";
const Hamburg = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <nav>
                <div className="hamburg">
                    <div className="hamburg-logo">
                        <NavLink to="/">Hydro Tracker</NavLink>
                    </div>
                    <div>
                        <X size={24} className="hamburg-close" />
                    </div>
                    {isOpen && <div className="hamburg-links">
                        <NavLink to="/homepage">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/help">Help</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </div>}
                </div>
            </nav>
        </>
    )
}

export default Hamburg;