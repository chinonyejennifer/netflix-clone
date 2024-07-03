import { Dropdown } from './ui/dropdown'
import Link from "next/link";

export function Navbar() {
    return (
        <div className="px-6 bg-black-500">
            <div className="h-12 w-full flex justify-between items-center">
                {/* Left side */}
                <div className="flex items-center">
                    <div>
                        <img
                            className="h-10"
                            src="../netflix-name.png"
                            alt="Netflix Name"
                        />
                    </div>
                    <Link className="pl-4 text-[0.65rem] font-bold" href="/"> Home </Link>
                    <div className="pl-4 text-[0.65rem] font-bold">
                        <span>TV Shows</span>
                    </div>
                    <div className="pl-4 text-[0.65rem] font-bold">
                        <span>Movies</span>
                    </div>
                    <div className="pl-4 text-[0.65rem] font-bold">
                        <span>New & Popular</span>
                    </div>
                    <div className="pl-4 text-[0.65rem] font-bold">
                        <span>My List</span>
                    </div>
                    <div className="pl-4 font-bold text-[0.7rem]">
                        <span>Browse Languages</span>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center">
                    <img
                        className="h-10 rounded-lg my-0.5"
                        src="../netflix-profile.webp"
                        alt="Netflix Profile"
                    />
                </div>
            </div>
        </div >
    );
}

