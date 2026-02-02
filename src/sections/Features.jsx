export default function Features() {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold">
            {/* SECTION TITLE FROM PDF */}
            Designed for teams that care
          </h2>
          <p className="mt-4 text-gray-600">
            {/* SECTION DESCRIPTION FROM PDF */}
            Supporting text that explains the features section.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg">
              Feature One
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Feature description from PDF.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg">
              Feature Two
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Feature description from PDF.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-medium text-lg">
              Feature Three
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Feature description from PDF.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
