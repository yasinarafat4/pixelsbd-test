import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../../images/logo-1.png"
import Dropdown from "@/Components/Dropdown";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
    const [navToggle, setNavToggle] = useState(false);
    return (
        <nav className="sticky top-0 z-50 lg:flex bg-white justify-around items-center py-3 px-2 shadow-lg">
            <div className="grid grid-cols-2 items-center" >
                <div className="flex justify-start items-center gap-6">
                    {/* Menu for small devices */}

                    <button onClick={() => setNavToggle((pre) => !pre)} className="swap-rotate swap ml-2 bg-white lg:hidden">
                        {navToggle ? <RxCross2 /> : <HiMenu />
                        }
                    </button>
                    <div className="flex items-center gap-1 text-slate-600">
                        <img className="w-5 md:w-7" src={logo} alt="Logo" />
                        <h1 className="text-sm md:text-2xl">Pixels</h1>
                    </div>
                    {/* NavItems */}
                    <div className={`absolute ${navToggle ? "left-0" : "left-[-120%]"
                        } top-[3rem] md:top-[4rem] flex w-full flex-col  gap-6 bg-white px-4 py-3 space-y-5 transition-all duration-300 lg:static lg:w-[unset] lg:flex-row lg:bg-transparent lg:pb-0 lg:pt-0 lg:space-y-0`}>
                        {/* Item-1 */}
                        <div className="group relative">
                            <div className="flex items-center text-sm gap-1 text-slate-600 cursor-pointer"><span>Photo Editing Tools</span><RiArrowDownSLine />
                                <div className="grid grid-cols-2 p-4 absolute z-50 top-5 w-[50rem] bg-white rounded-md shadow-lg text-slate-600 invisible group-hover:visible">
                                    <div className="space-y-4">
                                        <h2 className="text-xl ps-4">Online Photo Editor</h2>
                                        <div className="grid grid-cols-4 gap-4 pr-4">
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p> <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p> <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p> <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                            <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                                Items
                                            </p>
                                        </div>

                                    </div>
                                    <div className="border-l-2 space-y-4">
                                        <h2 className="text-xl ps-4">Other Platforms</h2>
                                        <div className="hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            <h3>Lorem ipsum dolor sit.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, rerum.</p>
                                        </div>
                                        <div className="hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            <h3>Lorem ipsum dolor sit.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, rerum.</p>
                                        </div>
                                        <div className="hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            <h3>Lorem ipsum dolor sit.</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, rerum.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Item-2 */}
                        <div className="group relative">
                            <div className="flex items-center text-sm gap-1 text-slate-600 cursor-pointer"><span>Create</span><RiArrowDownSLine />
                                <div className="grid grid-cols-3 p-4 absolute z-50 top-5 w-[35rem] bg-white rounded-md shadow-lg text-slate-600 invisible group-hover:visible">
                                    <div className="space-y-4">
                                        <h2 className="text-xl">Marketing</h2>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p> <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>

                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-xl">Social Media</h2>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p> <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>

                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-xl">Events</h2>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item-3 */}
                        <div className="group relative">
                            <div className="flex items-center text-sm gap-1 text-slate-600 cursor-pointer"><span>AI Tools</span><RiArrowDownSLine />
                                <div className="absolute z-50 top-5 w-[10rem] space-y-4 bg-white rounded-md shadow-lg text-slate-600 p-4 invisible group-hover:visible">
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Item-4 */}
                        <div className="group relative">
                            <div className="flex items-center text-sm gap-1 text-slate-600 cursor-pointer"><span>Templates</span><RiArrowDownSLine />
                                <div className="grid grid-cols-3 p-4 absolute z-50 top-5 w-[35rem] bg-white rounded-md shadow-lg text-slate-600 invisible group-hover:visible">
                                    <div className="space-y-4">
                                        <h2 className="text-xl">Marketing</h2>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p> <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>

                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-xl">Social Media</h2>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p> <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>

                                    </div>
                                    <div className="space-y-4">
                                        <h2 className="text-xl">Themes</h2>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                        <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                            Items
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item-5 */}
                        <div className="group relative">
                            <div className="flex items-center text-sm gap-1 text-slate-600 cursor-pointer"><span>AI Tools</span><RiArrowDownSLine />
                                <div className="absolute z-50 top-5 w-[10rem] space-y-4 bg-white rounded-md shadow-lg text-slate-600 p-4 invisible group-hover:visible">
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                    <p className="block hover:bg-slate-200 hover:text-slate-600 px-4 py-1 rounded-sm">
                                        Items
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-end items-center gap-3">
                <a className="font-semibold text-xs px-2 py-1 md:px-4 md:py-2 bg-blue-500 rounded-sm text-white md:hidden" href={route('register')}>Open in App</a>
                    <a className="font-semibold text-xs" href={route('login')}>
                        Sign up
                    </a>
                    <a className="font-semibold px-4 py-2 bg-blue-500 rounded-full text-white hidden md:block" href={route('register')}>
                        Sign in
                    </a>
                </div>
            </div>
        </nav>)
}
