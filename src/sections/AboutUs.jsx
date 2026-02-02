export default function AboutUs() {
  return (
    <section className="w-full px-4 md:px-8 py-24">
      <div
        className="
          max-w-7xl mx-auto rounded-[32px]
          bg-[#232323]
          min-h-[90vh] md:min-h-0
          p-8 md:p-16
          flex flex-col md:flex-row gap-12 items-center
          relative overflow-hidden
          md:bg-[#232323]
          bg-[url('/europe-map.png')] md:bg-none
          bg-cover bg-center
        "
      >

        {/* LEFT — UNCHANGED */}
        <div className="flex-1 text-white">
          <span className="text-sm opacity-70">About us</span>

          <h2 className="mt-6 text-[40px] md:text-[72px] font-medium leading-[110%] text-lime">
            By Europeans,<br />for Europeans
          </h2>

          <p className="mt-6 max-w-md text-white/80 leading-relaxed">
            Our vision is to empower governments, organizations and individuals
            with control and independence in the online realm.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 bg-lime text-black px-6 py-3 rounded-xl font-medium">
            Read more about us →
          </button>
        </div>

        {/* RIGHT IMAGE — DESKTOP ONLY (UNCHANGED) */}
        <div className="flex-1 relative hidden md:block">
          <img
            src="/europe-map.png"
            alt="Europe map"
            className="w-full opacity-80"
          />
        </div>

      </div>
    </section>
  );
}
