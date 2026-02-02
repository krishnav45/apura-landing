export default function Roadmap() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-medium text-center max-w-4xl mx-auto mb-16">
          Our Road to Creating Data Ownership and Security
        </h2>

        {/* Divider (mobile only) */}
        <div className="block md:hidden w-full h-px bg-gray-400 mb-10" />

        <div className="flex flex-col">

          {/* ================= STAGE 1 ================= */}
          <div className="md:grid md:grid-cols-[100px_240px_1fr_180px] md:items-center md:px-10 md:py-8 border-b mb-12 md:mb-0">

            {/* Stage */}
            <p className="text-lg md:text-gray-500">Stage 1</p>

            {/* Title */}
            <h3 className="font-['Radio_Canada_Big'] font-semibold text-[40px] leading-[150%] mt-1 md:mt-0">
  Cloud <br className="md:hidden" />
  infrastructure
</h3>


            {/* Description (desktop center col only) */}
            <div className="hidden md:block text-center"></div>

            {/* Action */}
            <div className="flex items-center justify-between mt-8 md:mt-0">
              <button className="border px-5 py-3 rounded-md font-medium">
                Book a demo
              </button>
              <span className="text-2xl">→</span>
            </div>
          </div>

          {/* ================= STAGE 2 ================= */}
          <div className="bg-lime rounded-3xl p-6 md:px-10 md:py-6 md:my-6 md:grid md:grid-cols-[100px_240px_1fr_180px] md:items-center mb-12">

            {/* Stage + Pilot */}
            <div className="flex justify-between md:block">
              <p className="text-lg">Stage 2</p>
              <p className="text-sm md:mt-1">In Pilot</p>
            </div>

            {/* Title */}
<h3 className="font-['Radio_Canada_Big'] font-semibold text-[40px] mt-2 md:mt-0">
  Collaboration
</h3>


            {/* Description (CENTER ONLY ON DESKTOP) */}
            <div className="md:text-center mt-4 md:mt-0">
              <p className="text-sm">
                EU alternative to Google Workspace Teams, Meet a.o.
              </p>
            </div>

            {/* Action */}
            <div className="flex items-center justify-between mt-8 md:mt-0">
              <button className="bg-white px-6 py-3 rounded-md font-medium">
                Try it
              </button>
              <span className="text-2xl">→</span>
            </div>
          </div>

          {/* ================= STAGE 3 ================= */}
          <div className="md:grid md:grid-cols-[100px_240px_1fr_180px] md:items-center md:px-10 md:py-8 border-b mb-12 md:mb-0 text-gray-500">

            <p className="text-lg">Stage 3</p>

            <h3 className="text-2xl font-medium text-black mt-1 md:mt-0">
              Communication
            </h3>

            <div className="md:text-center mt-4 md:mt-0">
              <p className="text-sm text-black/70 max-w-md mx-auto">
                Apura IaaS is our service allowing customers to develop
                applications on our secured data ownership focused platform.
              </p>
            </div>

            <p className="text-sm mt-6 md:mt-0 md:text-right">
              Coming soon
            </p>
          </div>

          {/* ================= STAGE 4 ================= */}
          <div className="md:grid md:grid-cols-[100px_240px_1fr_180px] md:items-center md:px-10 md:py-8 border-b mb-12 md:mb-0 text-gray-500">

            <p className="text-lg">Stage 4</p>

            <h3 className="text-2xl font-medium text-black mt-1 md:mt-0">
              Connectivity
            </h3>

            <div className="md:text-center mt-4 md:mt-0">
              <p className="text-sm text-black/70">
                EU alternative to LinkedIn, Instagram
              </p>
            </div>

            <p className="text-sm mt-6 md:mt-0 md:text-right">
              Coming soon
            </p>
          </div>

          {/* ================= STAGE 5 ================= */}
          <div className="md:grid md:grid-cols-[100px_240px_1fr_180px] md:items-center md:px-10 md:py-8 border-b text-gray-500">

            <p className="text-lg">Stage 5</p>

            <h3 className="text-2xl font-medium text-black mt-1 md:mt-0">
              Entertainment
            </h3>

            <div className="md:text-center mt-4 md:mt-0">
              <p className="text-sm text-black/70">
                EU alternative to Youtube, Tiktok
              </p>
            </div>

            <p className="text-sm mt-6 md:mt-0 md:text-right">
              Coming soon
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
