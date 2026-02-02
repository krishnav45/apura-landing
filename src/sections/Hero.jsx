export default function Hero() {
  return (
    <section className="bg-lime">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 md:pt-32 md:pb-28">

        {/* Heading */}
        <div className="text-left md:text-center">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            By Europeans,<br className="md:hidden" />
            for Europeans
          </h1>

          {/* Paragraph */}
          <p className="mt-10 max-w-xl md:max-w-3xl mx-auto text-sm md:text-lg">
            Privacy and security that europeans need, demand and expect.
            Without giving other nations control over our our data.
          </p>
        </div>

        {/* Bottom feature row */}
        <div className="mt-24 hidden md:grid grid-cols-4 gap-10 text-xs text-left">

          {/* Item 1 */}
          <div>
            <div className="w-[220px] border-t-[0.5px] border-black opacity-100 mb-4"></div>
            <p className="font-semibold">No interference</p><br />
            <p>No third-party interference</p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="w-[220px] border-t-[0.5px] border-black opacity-100 mb-4"></div>
            <p className="font-semibold">1st cloud platform</p><br />
            <p>To allow data control and<br /> ownership</p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="w-[220px] border-t-[0.5px] border-black opacity-100 mb-4"></div>
            <p className="font-semibold">1st cloud infrastructure</p><br />
            <p >To provide transparency over your data<br /> streams</p>
          </div>

          {/* Item 4 */}
          <div>
            <div className="w-[220px] border-t-[0.5px] border-black opacity-100 mb-4"></div>
            <p className="font-semibold">Dynamic infrastructure</p><br />
            <p>Cloud, hybrid, or on-prem form</p>
          </div>

        </div>

      </div>
    </section>
  )
}
