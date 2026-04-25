import Image from "next/image";

export default function Navbar(){
    return(
        <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-wrap items-center gap-3 sm:gap-6">
                <Image src="/logo.png" alt="logo" width={40} height={40} className="sm:w-[50px] sm:h-[50px] border-2 border-[#793fff] rounded-full"/>
                
                <span className="font-medium text-base sm:text-xl md:text-2xl tracking-wide sm:tracking-wider">Uzaib Bashir Malik</span>
                <div className="w-full sm:w-auto sm:ml-auto flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-400">
                    <a href="#skill" className="hover:text-white transition">Skills</a>
                    <a href="#skill" className="hover:text-white transition">Experience</a>
                    <a href="#about" className="hover:text-white transition">About</a>
                    <a href="#contact" className="hover:text-white transition">Contact</a>
                </div>
            </div>
        </nav>
    );
}