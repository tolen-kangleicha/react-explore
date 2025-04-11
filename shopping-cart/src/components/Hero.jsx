import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 px-8 xl:px-48 bg-gradient-to-br from-gray-800 to-black">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Left Text Content */}
        <div className="flex flex-col gap-4 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Find Your Favorites
          </h1>
          <p className="text-gray-300 text-lg">
            Explore our exclusive collection and make shopping simple, fun, and fast. 🛍️
          </p>
          <div className="flex gap-4 mt-4">
            <Button
              buttonText="Shop Now"
              primary={true}
              onClick={(e) => {
                e.preventDefault();
                navigate("/shop");
              }}
            />
            <Button
              buttonText="Learn More"
              primary={false}
            />
          </div>
        </div>

        {/* Right Image */}
        <img
          src="/images/shopping-hero.svg"
          alt="Shopping illustration"
          className="w-full md:w-[50%] rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
