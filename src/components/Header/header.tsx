import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-gray-700 hover:text-black">KraftonIT</Link>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="text-gray-700 hover:text-black">Services</Link>
          <Link href="/about-us" className="text-gray-700 hover:text-black">About Us</Link>
          <Link href="#work" className="text-gray-700 hover:text-black">Work</Link>
          <Link href="#pricing" className="text-gray-700 hover:text-black">Pricing</Link>
          <Link href="#blog" className="text-gray-700 hover:text-black">Blog</Link>
        </nav>
        <button className="hidden md:block bg-black text-white px-4 py-2 rounded">Contact Us</button>
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* Add an icon for mobile menu here */}
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
