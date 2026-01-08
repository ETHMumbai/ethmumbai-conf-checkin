"use client";

interface IconItem {
  src: string;
  title: string;
}

export default function Icons({ icons }: { icons: IconItem[] }) {
  return (
    <section className="w-full bg-[#63A8E8] py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="
                mx-auto
                w-full
                max-w-[280px] sm:max-w-none
                bg-[#E2231A]
                rounded-[14px]
                flex flex-col items-center justify-center
                gap-3 sm:gap-4 md:gap-6
                h-[180px] sm:h-[210px] md:h-[240px]
              "
            >
              {/* ICON */}
              <img
                src={icon.src}
                alt={icon.title}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
              />

              {/* TEXT */}
              <p className="text-white text-lg sm:text-xl md:text-2xl font-medium text-center px-2">
                {icon.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
