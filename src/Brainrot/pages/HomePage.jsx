import React, { useEffect, useState } from "react";
import logo from "../imgs/logo-brainrot-2.png";
import "./HomePage.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import characters from "../data/characters.json";
export default function HomePage() {
  // Tailwind cần thấy các class này để giữ lại
  //   const _bgSafeList = `
  //   bg-gradient-to-b from-green-200 to-lime-400
  // bg-gradient-to-b from-orange-500 to-amber-800
  // bg-gradient-to-b from-yellow-200 to-lime-200
  // bg-gradient-to-b from-slate-100 to-neutral-400
  // bg-gradient-to-b from-cyan-300 to-blue-500
  // bg-gradient-to-b from-amber-600 to-amber-900
  // bg-gradient-to-b from-red-400 to-rose-500
  // bg-gradient-to-b from-orange-600 to-orange-400
  // bg-gradient-to-b from-amber-700 to-amber-900
  // `;
  useEffect(() => {
    const _bgSafeList = `${characters
      .map((character) => character.bg)
      .join(" \n")}`;
    console.log(_bgSafeList);
  });

  const [character, setCharacter] = useState({});
  const [backgroundColor, setBackroundColor] = useState("");

  function click(e) {
    // console.log(e.target.src);
    document.documentElement.classList.toggle("show-modal");
  }

  function showModal(character) {
    document.documentElement.classList.toggle("show-modal");
    setCharacter(character);
    setBackroundColor(character.bg);
    console.log(character.bg);

    return console.log("render thanh cong");
  }

  return (
    <div className="w-screen overflow-y-auto h-100 pb-1 bg-no-repeat bg-center relative bg-gradient-to-b from-emerald-300 to-cyan-400 select-none ">
      <div
        id="modal"
        className={`pb-16 show top-0 right-0 left-0 bottom-0 absolute overflow-y-auto  z-0 ${backgroundColor}`}
      >
        <div className="container grid gap-6 grid-cols-12 text-center mr-auto ml-auto md:pt-[250px] sm:pt-[150px] pt-[100px]">
          <div className="md:col-span-6 col-span-12  h-100  ">
            <img
              src={character.img}
              alt=""
              className="w-auto max-h-[200px] sm:max-h-[400px]"
            />
          </div>
          <div className="md:col-span-6 col-span-12  h-100 flex flex-col justify-center sm:items-start">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-10 font-bold">
              {character.name}
            </h1>
            <span className="text-start text-black text-sm sm:text-xl font-bold bg-white/50 px-5 py-4 rounded-xl">
              {character.story}
            </span>
          </div>

          <div className="mt-10 col-span-12 ">
            <button
              type="button"
              className="text-white font-medium bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={click}
            >
              Back
            </button>
          </div>
        </div>
      </div>

      <div className="container mr-auto ml-auto z-100 h-screen">
        <div className="header w-full text-center h-[100px] sm:h-[250px] ">
          <div className="header__logo cursor-pointer" onClick={click}>
            <img
              className="max-w-[300px] sm:max-w-[500px]  "
              src={logo}
              alt="logo brainrot"
            />
          </div>

          <div className="header__navbar duration-1000 sm:flex justify-center space-x-10 hidden ">
            <div className="whitespace-nowrap font-bold opacity-70 hover:opacity-100 ease-in-out header__btn cursor-pointer pt-2 pb-2 text-white text-xl ">
              About us
            </div>
            <div className="font-bold opacity-70 hover:opacity-100 ease-in-out header__btn cursor-pointer pt-2 pb-2 text-white  text-xl ">
              Resource
            </div>
            <div className="font-bold opacity-70 hover:opacity-100 ease-in-out header__btn cursor-pointer pt-2 pb-2 text-white text-xl ">
              Community
            </div>
            <div className="font-bold opacity-70 hover:opacity-100 ease-in-out header__btn cursor-pointer pt-2 pb-2 text-white  text-xl ">
              Media
            </div>
            <div className="font-bold opacity-70 hover:opacity-100 ease-in-out header__btn cursor-pointer pt-2 pb-2 text-white  text-xl ">
              Shop
            </div>
          </div>
        </div>
        <div className="main sm:pt-[200px] pt-[100px] select-none hidden sm:block">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={100}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[]}
            className="mySwiper "
          >
            {characters.map((character) => (
              <SwiperSlide
                onClick={() => showModal(character)}
                className="cursor-pointer !w-auto max-w-fit"
              >
                <img
                  src={character.img}
                  className=" md:max-h-[200px] max-h-[300px]"
                ></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="main--mobile pt-[100px] select-none block sm:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper "
          >
            {characters.map((character) => (
              <SwiperSlide
                onClick={() => showModal(character)}
                className="cursor-pointer text-center"
              >
                <img src={character.img} className=" max-h-[150px]"></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="footer">
        <div className="footer__social-list space-x-10 flex justify-center">
          <div className="footer__social-icon pt-1 cursor-pointer opacity-70 hover:opacity-100 w-[48px] h-[48px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z" />
                </g>
              </g>
            </svg>
          </div>

          <div className="footer__social-icon pt-1 cursor-pointer opacity-70 hover:opacity-100 w-[48px] h-[48px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M19,3h-14c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM9,17h-2.523v-7h2.523zM7.694,8.717c-0.771,0 -1.286,-0.514 -1.286,-1.2c0,-0.686 0.514,-1.2 1.371,-1.2c0.771,0 1.286,0.514 1.286,1.2c0,0.686 -0.514,1.2 -1.371,1.2zM18,17h-2.442v-3.826c0,-1.058 -0.651,-1.302 -0.895,-1.302c-0.244,0 -1.058,0.163 -1.058,1.302c0,0.163 0,3.826 0,3.826h-2.523v-7h2.523v0.977c0.325,-0.57 0.976,-0.977 2.197,-0.977c1.221,0 2.198,0.977 2.198,3.174z" />
                </g>
              </g>
            </svg>
          </div>
          <div className="footer__social-icon pt-1 cursor-pointer opacity-70 hover:opacity-100 w-[48px] h-[48px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M12,2c-5.52344,0 -10,4.47656 -10,10c0,5.52344 4.47656,10 10,10c5.52344,0 10,-4.47656 10,-10c0,-5.52344 -4.47656,-10 -10,-10zM12,4c4.41016,0 8,3.58984 8,8c0,0.46875 -0.04687,0.92969 -0.125,1.375c-0.24609,-0.05469 -0.60937,-0.12109 -1.03125,-0.125c-0.3125,-0.00391 -0.70312,0.04688 -1.03125,0.09375c0.11328,-0.34766 0.1875,-0.73047 0.1875,-1.125c0,-0.96094 -0.46875,-1.85547 -1.21875,-2.59375c0.20703,-0.76953 0.41016,-2.08984 -0.125,-2.625c-1.58203,0 -2.45703,1.12891 -2.5,1.1875c-0.48828,-0.11719 -0.99219,-0.1875 -1.53125,-0.1875c-0.69141,0 -1.35156,0.125 -1.96875,0.3125l0.1875,-0.15625c0,0 -0.87891,-1.21875 -2.5,-1.21875c-0.56641,0.57031 -0.30859,2.01563 -0.09375,2.75c-0.76562,0.73047 -1.25,1.59375 -1.25,2.53125c0,0.32813 0.07813,0.64063 0.15625,0.9375c-0.27734,-0.03125 -1.27734,-0.125 -1.6875,-0.125c-0.36328,0 -0.92578,0.08594 -1.375,0.1875c-0.0625,-0.39844 -0.09375,-0.80469 -0.09375,-1.21875c0,-4.41016 3.58984,-8 8,-8zM5.46875,13.28125c0.39453,0 1.59375,0.14063 1.75,0.15625c0.01953,0.05469 0.03906,0.10547 0.0625,0.15625c-0.42969,-0.03906 -1.26172,-0.09766 -1.8125,-0.03125c-0.36719,0.04297 -0.83594,0.17578 -1.25,0.28125c-0.03125,-0.125 -0.07031,-0.24609 -0.09375,-0.375c0.4375,-0.09375 1.01172,-0.1875 1.34375,-0.1875zM18.84375,13.5c0.39844,0.00391 0.76172,0.07031 1,0.125c-0.01172,0.06641 -0.04687,0.12109 -0.0625,0.1875c-0.25391,-0.05859 -0.67187,-0.14453 -1.15625,-0.15625c-0.23437,-0.00391 -0.60937,0.00781 -0.9375,0.03125c0.01563,-0.03125 0.01953,-0.0625 0.03125,-0.09375c0.33984,-0.04687 0.77344,-0.09766 1.125,-0.09375zM6.09375,13.78125c0.5625,0.00391 1.08984,0.04297 1.3125,0.0625c0.52344,0.97656 1.58203,1.69922 3.21875,2c-0.40234,0.22266 -0.76172,0.53516 -1.03125,0.90625c-0.23437,0.01953 -0.48047,0.03125 -0.71875,0.03125c-0.69531,0 -1.12891,-0.62109 -1.5,-1.15625c-0.375,-0.53516 -0.83594,-0.59375 -1.09375,-0.625c-0.26172,-0.03125 -0.35156,0.11719 -0.21875,0.21875c0.76172,0.58594 1.03516,1.28125 1.34375,1.90625c0.27734,0.5625 0.85938,0.875 1.5,0.875h0.125c-0.01953,0.10938 -0.03125,0.21094 -0.03125,0.3125v1.09375c-2.30859,-0.93359 -4.06641,-2.90625 -4.71875,-5.34375c0.41016,-0.10156 0.87109,-0.20703 1.21875,-0.25c0.16016,-0.01953 0.36328,-0.03516 0.59375,-0.03125zM18.625,13.90625c0.44922,0.01172 0.84766,0.09766 1.09375,0.15625c-0.55078,2.07031 -1.91016,3.79297 -3.71875,4.84375v-0.59375c0,-0.85156 -0.67187,-1.94531 -1.625,-2.46875c1.58203,-0.28906 2.61328,-0.98047 3.15625,-1.90625c0.37891,-0.02734 0.82422,-0.03906 1.09375,-0.03125zM12.5,18c0.27344,0 0.5,0.22656 0.5,0.5v1.4375c-0.32812,0.04297 -0.66016,0.0625 -1,0.0625v-1.5c0,-0.27344 0.22656,-0.5 0.5,-0.5zM10.5,19c0.27344,0 0.5,0.22656 0.5,0.5v0.4375c-0.33594,-0.04297 -0.67578,-0.10547 -1,-0.1875v-0.25c0,-0.27344 0.22656,-0.5 0.5,-0.5zM14.5,19c0.24219,0 0.45313,0.17578 0.5,0.40625c-0.32422,0.13281 -0.65625,0.25391 -1,0.34375v-0.25c0,-0.27344 0.22656,-0.5 0.5,-0.5z" />
                </g>
              </g>
            </svg>
          </div>
          <div className="footer__social-icon pt-1 cursor-pointer opacity-70 hover:opacity-100 w-[48px] h-[48px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth={1}
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={10}
                strokeDasharray=""
                strokeDashoffset={0}
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M10.053,7.988l5.631,8.024h-1.497l-5.621,-8.024zM21,6v12c0,1.657 -1.343,3 -3,3h-12c-1.657,0 -3,-1.343 -3,-3v-12c0,-1.657 1.343,-3 3,-3h12c1.657,0 3,1.343 3,3zM17.538,17l-4.186,-5.99l3.422,-4.01h-1.311l-2.704,3.16l-2.207,-3.16h-3.85l3.941,5.633l-3.737,4.367h1.333l3.001,-3.516l2.458,3.516z" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
