export default function AuthLayout({ children }) {
    return (
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
            <img
                src="../../background-netflix.jpg"
                alt="background image"
                className="hidden sm:flex sm:absolute sm:inset-0 sm:h-full sm:w-full object-cover z-[-10]"

                fill
            />
            <img src="../../netflix-name.png"
                alt="logo"
                width="120px"
                height="120px"

                className="absolute left-4 top-4 object-contain md:left-10 md:top-6"

            />
            {children}
        </div>
    );
}
