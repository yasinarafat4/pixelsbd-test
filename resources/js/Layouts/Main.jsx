import Footer from "@/Pages/Partial/Footer";
import Navbar from "@/Pages/Partial/Navbar";

export default function Main({ children }) {
    return (
        <>
            <div className="max-w-[95rem] mx-auto">
                <Navbar />
                {children}
            </div>
            <Footer />
        </>)
}
