export default function Products() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">

        <h2 className="  text-[28px] md:text-[40px] font-[400] mb-8">
          Our products
        </h2>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
          
          {/* Card 1 */}
          <div className="min-w-[85%] md:min-w-0 snap-center bg-lime rounded-3xl p-8 flex flex-col justify-between min-h-[520px]">
            <div>
              <p className="  text-[28px] md:text-[40px] font-[400] text-black/70">Run safely.</p>
              <h3 className="text-[28px] md:text-[40px] font-[600] ">
                Apura IaaS.
              </h3>

              <p className="text-black/80 leading-relaxed text-[18px] md:text-[16px] font-[400]">
                Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button className="bg-white py-3 rounded-xl font-medium flex items-center justify-center gap-2">
                Read more →
              </button>
              <button className="bg-black text-white py-3 rounded-xl font-medium">
                Book a demo
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="min-w-[85%] md:min-w-0 snap-center bg-gray-100 rounded-3xl p-8 flex flex-col justify-between min-h-[520px]">
            <div>
              <p className="text-[28px] md:text-[40px] font-[400] text-gray-400">Work privately.</p>
              <h3 className="text-[28px] md:text-[40px] font-[600]">
                Apura Workspace.
              </h3>

              <p className="text-gray-700 leading-relaxed text-[18px] md:text-[16px] font-[400]">
                Apura Workspace is our alternative for Google workspace or Microsoft Teams. Giving the tools to effectively communicate with your organization without compromising on security and privacy.
              </p>
            </div>

            <button className="bg-gray-200 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
              Read more →
            </button>
          </div>

          {/* Card 3 */}
          <div className="min-w-[85%] md:min-w-0 snap-center bg-gray-100 rounded-3xl p-8 flex flex-col justify-between min-h-[520px]">
            <div>
              <p className="text-[28px] md:text-[40px] font-[400] text-gray-400">Share confidently.</p>
              <h3 className="text-[28px] md:text-[40px] font-[600]">
                Apura Socials.
              </h3>

              <p className="text-gray-700 leading-relaxed text-[18px] md:text-[16px] font-[400]">
                Is our introduction of social media applications that are essential to us these days.
              </p>
            </div>

            <button className="bg-gray-200 py-3 rounded-xl font-medium flex items-center justify-center gap-2">
              Read more →
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
