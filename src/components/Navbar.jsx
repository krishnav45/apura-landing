import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-lime">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 relative flex items-center">

        {/* Logo */}
        <div className="font-semibold text-sm z-10">
          APURA
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm items-center">
          <span className="cursor-pointer">Products</span>
          <span className="cursor-pointer">Road map</span>
          <span className="cursor-pointer">Our mission</span>
          <span className="cursor-pointer">For devs</span>
          <span className="cursor-pointer">Contact us</span>
        </nav>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="ml-auto md:hidden flex flex-col gap-1"
        >
          <span className="block w-5 h-[2px] bg-black"></span>
          <span className="block w-5 h-[2px] bg-black"></span>
          <span className="block w-5 h-[2px] bg-black"></span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-lime border-t">
          <nav className="flex flex-col px-4 py-4 gap-4 text-sm">
            <span>Products</span>
            <span>Road map</span>
            <span>Our mission</span>
            <span>For devs</span>
            <span>Contact us</span>
          </nav>
        </div>
      )}
    </header>
  )
}
