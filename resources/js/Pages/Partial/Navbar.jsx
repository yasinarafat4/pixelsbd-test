import { RiArrowDownSLine } from "react-icons/ri";
import logo from "../../../images/logo-1.png"
import Dropdown from "@/Components/Dropdown";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-3">
            <div className="flex justify-start items-center gap-6">
                <div className="flex items-center gap-1 text-slate-600">
                    <img className="w-7" src={logo} alt="Logo" />
                    <h1 className="text-2xl">Pixels</h1>
                </div>
                {/* NavItems-2 */}
                {/* <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="ms-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="flex items-center text-sm gap-1 text-slate-600 cursor-pointer"><span>Photo Editing Tools</span><RiArrowDownSLine />
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <div className="grid grid-cols-3 gap-4">
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div> */}
                {/* Item-2 */}
                {/* <div className="hidden sm:flex sm:items-center sm:ms-6">
                    <div className="ms-3 relative">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="flex items-center text-sm gap-1 text-slate-600 cursor-pointer"><span>Create</span><RiArrowDownSLine />
                                </div>
                            </Dropdown.Trigger>

                            <Dropdown.Content>
                                <div className="grid grid-cols-3 gap-4">
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div> */}


                {/* NavItems */}
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
