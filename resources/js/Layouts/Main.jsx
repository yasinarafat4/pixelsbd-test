import Footer from "@/Pages/Partial/Footer";
import Navbar from "@/Pages/Partial/Navbar";

export default function Main({ children }) {
    return (
        <>
            <div>
                <Navbar />
                <div className="min-h-[calc(100vh-330px)]">
                    {children}
                </div>
            </div>
            <Footer />
        </>)
}
