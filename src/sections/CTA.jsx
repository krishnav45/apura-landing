export default function CTA() {
  return (

    <section className="w-full bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">

        {/* CTA ROW */}
        <div className="hidden md:grid grid-cols-3 items-center">
  {/* Left text */}
  <h3 className="text-xl font-medium">
    Join the future of data sovereignty
  </h3>

  {/* Center email */}
  <div className="flex justify-center">
    <div className="flex w-[380px]">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 bg-gray-100 rounded-l-md outline-none"
      />
      <button className="px-6 py-2 bg-gray-200 rounded-r-md font-medium">
        Join
      </button>
    </div>
  </div>

  {/* Right spacer */}
  <div></div>
</div>

{/* Mobile */}
<div className="md:hidden flex flex-col gap-4">
  <h3 className="text-lg font-medium">
    Join the future of data sovereignty
  </h3>

  <div className="flex">
    <input
      type="email"
      placeholder="Enter your email"
      className="flex-1 px-4 py-2 bg-gray-100 rounded-l-md outline-none"
    />
    <button className="px-6 py-2 bg-gray-200 rounded-r-md font-medium">
      Join
    </button>
  </div>
</div>


        {/* LONG LINE */}
        <div className="mt-10 border-t border-black/40"></div>

        {/* BIG TEXT */}
        <div className="py-24">
          <h2
            className="
              font-radio
              font-normal
              text-[42px]
              md:text-[86px]
              leading-[110%]
              tracking-normal
              max-w-6xl
            "
          >
            APURA is an ecosystem dedicated to the privacy and security of their users; completely build from scratch.
          </h2>
        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-black/40"></div>

        {/* LABEL BELOW LINE */}
        <div className="flex justify-end mt-2">
          <span className="text-sm">
            Dynamic infrastructure
          </span>
        </div>

      </div>
    </section>

  )
}
