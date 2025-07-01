import React from "react";

const BentoCard = ({ src, title, description, isComingSoon }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />

      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            A World Broken by the Past
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Years after society crumbled, nature has reclaimed cities and
            humanity has turned on itself. Explore abandoned towns, overgrown
            highways, and chilling ruins of what once was. Fractured delivers a
            world rich in detail, mystery, and danger around every corner.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Su<b>r</b>viv<b>e</b>
              </>
            }
            description="In a world where the weak don’t last, survival isn’t just instinct—it’s a choice. Scavenge, fight, and endure against impossible odds."
            isComingSoon
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <div className="bento-title_1 row-span-1 md:col-span-1 md:row-span-2">

            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
