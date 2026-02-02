export default function Hero() {
  return (
    <section className="bg-lime overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-20 md:pt-32 md:pb-28">

        {/* ================= HEADING ================= */}
        <div className="text-left md:text-center">
          <h1 className="  text-[50px]  md:text-[92px] font-[500] leading-[115%] md:leading-[110%]">
            By Europeans,<br className="md:hidden" />
            for Europeans
          </h1>

          <p className="  mt-10 max-w-xl md:max-w-3xl mx-auto text-[22px] font-[400]  ">
            Privacy and security that europeans need, demand and expect.
            Without giving other nations control over our our data.
          </p>
        </div>

        {/* ================= MOBILE FEATURE ROW ================= */}
        <div className="mt-16 md:hidden overflow-x-hidden">
          <div className="flex gap-6 overflow-x-auto text-xs px-4 -mx-4">

            <MobileFeature
              title="No interference"
              desc="No third-party interference"
            />

            <MobileFeature
              title="1st cloud platform"
              desc="To allow data control and ownership"
            />

            <MobileFeature
              title="1st cloud infrastructure"
              desc="To provide transparency over your data streams"
            />

            <MobileFeature
              title="Dynamic infrastructure"
              desc="Cloud, hybrid, or on-prem form"
            />

          </div>
        </div>

        {/* ================= DESKTOP FEATURE GRID ================= */}
        <div className="mt-24 hidden md:grid grid-cols-4 gap-10 text-xs text-left">

          <DesktopFeature
            title="No interference"
            desc="No third-party interference"
          />

          <DesktopFeature
            title="1st cloud platform"
            desc="To allow data control and ownership"
          />

          <DesktopFeature
            title="1st cloud infrastructure"
            desc="To provide transparency over your data streams"
          />

          <DesktopFeature
            title="Dynamic infrastructure"
            desc="Cloud, hybrid, or on-prem form"
          />

        </div>

      </div>
    </section>
  )
}


function MobileFeature({ title, desc }) {
  return (
    <div className="min-w-[220px] shrink-0">
      <div className="w-full border-t border-black mb-3"></div>
      <p className="font-semibold">{title}</p>
      <p className="mt-1">{desc}</p>
    </div>
  )
}


function DesktopFeature({ title, desc }) {
  return (
    <div>
      <div className="w-[220px] border-t border-black mb-4"></div>
      <p className="font-[700] text-[13px]">{title}</p>
      <p className="mt-2 font-[500] text-[13px]">{desc}</p>
    </div>
  )
}
