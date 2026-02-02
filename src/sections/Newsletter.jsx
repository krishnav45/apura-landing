export default function Newsletter() {
  return (
    
<section className="w-full bg-lime py-20">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">

    {/* Left */}
    <div>
      <h3 className="font-['Radio_Canada_Big'] font-normal text-[36px] leading-normal mb-4">
  Subscribe to our Newsletter
</h3>


      <p className="font-['Radio_Canada_Big'] font-normal text-[18px]  max-w-md">
        If you want to follow our progress on developing what Europeans
        want and need, done by Europeans.
      </p>
    </div>

    {/* Right */}
    <div className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-md outline-none"
      />
      <button className="bg-white px-6 py-3 rounded-md whitespace-nowrap">
        Subscribe to our newsletter
      </button>
    </div>

  </div>
</section>
  )
}
