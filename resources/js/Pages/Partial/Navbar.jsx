import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../../images/logo-1.png"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-3">
            <div className="flex justify-start items-center gap-6">
               <div className="flex items-center gap-1 text-slate-600">
                <img className="w-7" src={logo} alt="Logo" />
               <h1 className="text-2xl">Pixels</h1>
               </div>
                <a className="flex items-center text-sm gap-1 text-slate-600" href="Nav1"><span>Photo Editing Tools</span> <RiArrowDownSLine /></a>
                <a className="flex items-center text-sm gap-1 text-slate-600" href="Nav1"><span>Create</span> <RiArrowDownSLine /></a>
                <a className="flex items-center text-sm gap-1 text-slate-600" href="Nav1"><span>AI Tools</span> <RiArrowDownSLine /></a>
                <a className="flex items-center text-sm gap-1 text-slate-600" href="Nav1"><span>Template</span> <RiArrowDownSLine /></a>
                <a className="flex items-center text-sm gap-1 text-slate-600" href="Nav1"><span>Support</span> <RiArrowDownSLine /></a>
            </div>
            <div className="flex items-center gap-3">
                <a className="font-semibold" href={route('login')}>
                    Sign up
                </a>
                <a className="font-semibold px-4 py-2 bg-blue-500 rounded-full text-white" href={route('register')}>
                    Sign in
                </a>
            </div>
        </nav>)
}
