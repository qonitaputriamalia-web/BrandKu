import "react"

const Header = () => (
        
        <header className="flex text-center justify-between px-8 my-6 ">
        <h1 className="text-xl font-black bg-gradient-to-r from-pink-600 to-purple-700 bg-clip-text text-transparent">
            BrandKu</h1>
        <nav className="flex gap-8 font-medium">
            <a href="/">Beranda</a>
            <a href="/">Fitur</a>
            <a href="/">Harga</a>
        </nav>
    </header>
 
        
    )

export default Header