import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      {/* LEFT */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={500}
          height={500}
          className="absolute top-[-30px] left-[-5px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 text-gray-900 lg:bold-88">Kazi Camping Site</h1>
        <p className="regular-16 mt-16 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, i) => (
              <Image
                key={i} 
                src="/star.svg"
                alt="star"
                width={20}
                height={20}
              />
            ))}
          </div>

          <p className="regular-16 text-gray-30">4.8 (1.2k reviews)</p>
        </div>

        <div className="flex flex-col gap-3 w-full sm:flex-row">
          <Button
          type="button"
          title="Download App"
          variant="btn_green"
          />
          <Button
          type="button"
          title="How we work?"
          icon="/play.svg"
          variant="btn_white_text"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Location</p>
                <Image 
                src="/close.svg"
                alt="close"
                width={20}
                height={20}
                />
              </div>
              <p className="bold-20 text-white">Kazi-kazi</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Distance</p>
                <p className="bold-20 text-white">12 km</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Elevation</p>
                <p className="bold-20 text-white">2 km</p>
              </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
