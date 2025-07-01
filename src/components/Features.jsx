import React from "react";
import { IoGameController } from "react-icons/io5";

const BentoCard = ({ src, title, description}) => {
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
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
              <BentoCard
                src="videos/feature-2.mp4"
                title={<>L<b>o</b>ss</>}
                description="Everyone’s lost something. Family, hope, identity. In Fractured, pain isn’t a backstory—it’s the present." 
              />
            </div>

            <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
              <BentoCard
                src="videos/feature-3.mp4"
                title={<>H<b>o</b>pe</>}
                description="In the ruins of yesterday, a flicker remains. Fragile, fleeting, but powerful enough to change everything."
              />
            </div>

            <div className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
              <BentoCard
                src="videos/feature-4.mp4"
                title={<>D<b>e</b>c<b>a</b>y</>}
                description="Civilization has rotted away. Every cracked wall, overgrown street, and silent ruin tells a story of what we lost."
              />
            </div>

            <div className="bento_tilt_2">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                <h1 className="bento-title special-font max-w-64 text-black">M<b>O</b>RE <br/> C<b>O</b>MING <br/> S<b>O</b><b>O</b>N! </h1>

                <IoGameController className="m-5 scale-[5] self-end"/>
              </div>
            </div>

            <div className="bento-tilt_2">
              <video
                src="videos/hero-4.mp4"
                loop
                muted
                autoPlay
                className="size-full object-cover object-center"
              />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
