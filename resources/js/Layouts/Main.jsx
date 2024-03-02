import Footer from "@/Pages/Partial/Footer";
import Navbar from "@/Pages/Partial/Navbar";

export default function Main({ children }) {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </>)
}
