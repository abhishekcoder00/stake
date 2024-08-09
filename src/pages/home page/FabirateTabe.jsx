import React, { useState } from "react";
import Slider from "react-slick";
import TabeSlider from "../../tabeslide";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  absolute top-[-10%] translate-y-[-50%] right-[25px] z-9999 cursor-pointer slick__slider__custome`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg> */}

      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M6 12L11 7M6 12L11 17"
          stroke="#FFFFFF"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}  absolute top-[-10%] translate-y-[-50%] left-[55rem] z-10 cursor-pointer`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg> */}

      <svg
        width="30px"
        height="30px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12H18M18 12L13 7M18 12L13 17"
          stroke="#ffffff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}

export default function FabirateTabe() {
  const [activeTab, setActiveTab] = useState("Lobby");

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="f p-2 bg-[#2d4454] rounded-full text-white max-w-[62%] mt-5">
        <div className="flex justify-center space-x-4">
          {["Lobby", "My Bets", "Favourites", "Starting Soon"].map((tab) => (
            <button
              key={tab}
              className={`p-2 px-4 rounded-3xl flex gap-2 ${
                activeTab === tab ? "bg-[#213743]" : "bg-transparent"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {/* SVG Path based on the tab */}
                <path
                  d={
                    tab === "Lobby"
                      ? "M12 6.253v13.059m0-13.059l-5.471 5.472m5.471-5.472L21 12m-5.471 5.472L12 21"
                      : tab === "My Bets"
                      ? "M3 10.5h18M3 13.5h18"
                      : tab === "Favourites"
                      ? "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26.95.69l-1.519 4.674c-.3.921-1.603.921-1.902 0l-1.519-4.674a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-.26-.95-.69l1.519-4.674z"
                      : "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  }
                />
              </svg>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-10 fabrate">
        {activeTab === "Lobby" && (
          <div className="">
            <div className="flex gap-2 mb-3 ml-2 text-white">
              <span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 96 96"
                  width="20px"
                  class="svg-icon"
                  aria-labelledby="iconTitle iconDesc"
                  role="img"
                >
                  <title id="iconTitle">Icon Title</title>
                  <desc id="iconDesc">
                    Description of the icon for accessibility
                  </desc>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    strokeWidth="20px"
                    d="M14.287 13.917c16.599 6.854 30.869 15.965 43.231 27.143l-.001.002.126.11-.125-.112C64.262 31 65.501 17.31 60.63 1.865 56.773.739 52.34.092 47.758.092c-13.046 0-24.87 5.249-33.47 13.748v.077Zm79.997 46.514a46.803 46.803 0 0 1-7.907 15.996v-.003c-2.275-3.87-4.709-7.622-7.185-11.295l-.137.08c4.463-2.823 9.63-4.63 15.307-5.11l-.078.332ZM80.986 82.734c-4.75 4.553-10.46 8.116-17.124 10.458h-.003l.006-.108a38.977 38.977 0 0 1 9.137-22.842l-.281-.41c2.838 3.924 5.478 8.005 8.265 12.902Zm0 0 .016-.014-.015.015ZM12.017 64.772a83.99 83.99 0 0 0 9.697.599h.003l-.117-.006c.832.039 1.674.06 2.518.06 12.98 0 24.848-4.766 33.883-12.589a132.455 132.455 0 0 1 9.859 11.137 47.738 47.738 0 0 0-11.975 31.216l.284-.042c-2.68.49-5.44.751-8.269.76-21.022-.012-38.88-13.566-45.416-32.75 3.102.685 6.287 1.224 9.931 1.654l-.398-.039Zm-9.533-1.614c-.226-.05-.45-.1-.675-.152l.667.129.008.023Zm65.376.815.045-.051-.045.05ZM58 52.836l-.009-.009.01.01Zm-5.59-5.706A140.354 140.354 0 0 0 9.776 20.677l-.952-.332C3.305 28.021 0 37.61 0 47.97v.038c.018 2.3.192 4.539.512 6.733l-.033-.266c3.542.97 7.889 1.823 12.325 2.386l.488.05c16.526 1.797 30.138-1.637 39.12-9.78Zm21.58 11.182a149.73 149.73 0 0 0-10.601-11.7c7.864-10.897 10.059-25.19 6.466-41.155l.267.126C85.46 13.537 95.953 29.542 96 48.007c0 .604-.048 1.247-.097 1.904-.051.688-.104 1.393-.104 2.087h-.042c-8.002.159-15.445 2.596-21.552 6.586l-.215-.272Zm-10.601-11.7-.003-.003.003.003Z"
                  />
                </svg>
              </span>
              <span>Top Sports</span>
            </div>
            <Slider {...sliderSettings}>
              {TabeSlider.map((item, index) => (
                <div key={index} className="">
                  <span className="absolute p-2 py-2 text-white rounded bg-slate-600 top-8">
                    {item.id}
                  </span>
                  <img className="rounded" src={item.image} alt="" />
                </div>
              ))}
            </Slider>

            <div className="mt-10 rounded-md ">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.75 19.5L12 16.5 9.25 19.5M12 16.5L12 12M12 12l.01 0 1.5 1.5M12 12l.01 0 -1.5 1.5"
                    />
                  </svg>
                  <h2 className="ml-2 text-xl font-bold text-white">
                    Live Events
                  </h2>
                </div>
                <div className="flex items-center">
                  <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>
                  <button className="px-4 py-2 font-bold text-white bg-gray-800 rounded hover:bg-gray-700">
                    Winner
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid justify-center grid-cols-12 gap-3 px-2 py-5 overflow-auto bg-gray-900 ">
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Baseb...</p>
                </div>
                {/* <div className="flex flex-col items-center col-span-1">
      <svg
        className="w-5 h-8 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l3 3m0 0l3-3m-3 3V12"
        />
      </svg>
      <p className="text-sm text-gray-400">Tennis</p>
    </div> */}
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Soccer</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Cricket</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Volley...</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Table ...</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Badmi...</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Aussi...</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Rugby</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Darts</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Leagu...</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">CS2</p>
                </div>
                <div className="flex flex-col items-center col-span-1">
                  <svg
                    className="w-5 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">FIFA</p>
                </div>
              </div>
            </div>

   
            <div className="container mx-auto">
            <div className="py-3 px-2 text-white bg-[#213743] mt-8 ">
            <Accordion className="menu-accordion">
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    <h2 className="text-2xl font-bold text-white">Japan / NPB</h2>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <div className="py-3 px-2 text-white bg-[#213743] ">
    {/* <h2 className="text-2xl font-bold text-white">Japan / NPB</h2> */}
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center mb-2">
          <div className="px-2 py-1 mr-2 text-white bg-red-500 rounded-md">
            Live
          </div>
          <p>5th Inning Bottom</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Hanshin Tigers</p>
          <p className="text-lg font-bold">0</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Hiroshima Toyo Carp</p>
          <p className="text-lg font-bold">4</p>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <p className="mb-2 text-lg font-bold text-center">
          Winner (Incl. Extra Innings)
        </p>
        <div className="p-4 bg-gray-700 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <p>Hanshin Tigers</p>
            <p className="text-lg font-bold">+775</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <p>Hiroshima Toyo Carp</p>
          <p className="text-lg font-bold">-1,667</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">+10</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center mb-2">
          <div className="px-2 py-1 mr-2 text-white bg-red-500 rounded-md">
            Live
          </div>
          <p>Break Top 6 Bottom 5</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Yokohama Dena Baystars</p>
          <p className="text-lg font-bold">2</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Tokyo Yakult Swallows</p>
          <p className="text-lg font-bold">2</p>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <p className="mb-2 text-lg font-bold text-center">
          Winner (Incl. Extra Innings)
        </p>
        <div className="p-4 bg-gray-700 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <p>Yokohama Dena Baystars</p>
            <p className="text-lg font-bold">-154</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <p>Tokyo Yakult Swallows</p>
          <p className="text-lg font-bold">+120</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">+10</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center mb-2">
          <div className="px-2 py-1 mr-2 text-white bg-red-500 rounded-md">
            Live
          </div>
          <p>5th Inning Bottom</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Chunichi Dragons</p>
          <p className="text-lg font-bold">9</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Yomiuri Giants</p>
          <p className="text-lg font-bold">1</p>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <p className="mb-2 text-lg font-bold text-center">Winner</p>
        <div className="p-4 bg-gray-700 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <p>Chunichi Dragons</p>
            <p className="text-lg font-bold">Suspended</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <p>Yomiuri Giants</p>
          <p className="text-lg font-bold">Suspended</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">+8</p>
        </div>
      </div>
    </div>
  </div>



                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Is free will real or just an illusion?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
        </div>


            {/* <div className="container mx-auto">
  <div className="py-3 px-2 text-white bg-[#213743] mt-8 ">
    <h2 className="text-2xl font-bold text-white">Japan / NPB</h2>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center mb-2">
          <div className="px-2 py-1 mr-2 text-white bg-red-500 rounded-md">
            Live
          </div>
          <p>5th Inning Bottom</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Hanshin Tigers</p>
          <p className="text-lg font-bold">0</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Hiroshima Toyo Carp</p>
          <p className="text-lg font-bold">4</p>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <p className="mb-2 text-lg font-bold text-center">
          Winner (Incl. Extra Innings)
        </p>
        <div className="p-4 bg-gray-700 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <p>Hanshin Tigers</p>
            <p className="text-lg font-bold">+775</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <p>Hiroshima Toyo Carp</p>
          <p className="text-lg font-bold">-1,667</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">+10</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center mb-2">
          <div className="px-2 py-1 mr-2 text-white bg-red-500 rounded-md">
            Live
          </div>
          <p>Break Top 6 Bottom 5</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Yokohama Dena Baystars</p>
          <p className="text-lg font-bold">2</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Tokyo Yakult Swallows</p>
          <p className="text-lg font-bold">2</p>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <p className="mb-2 text-lg font-bold text-center">
          Winner (Incl. Extra Innings)
        </p>
        <div className="p-4 bg-gray-700 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <p>Yokohama Dena Baystars</p>
            <p className="text-lg font-bold">-154</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <p>Tokyo Yakult Swallows</p>
          <p className="text-lg font-bold">+120</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">+10</p>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center mb-2">
          <div className="px-2 py-1 mr-2 text-white bg-red-500 rounded-md">
            Live
          </div>
          <p>5th Inning Bottom</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Chunichi Dragons</p>
          <p className="text-lg font-bold">9</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p>Yomiuri Giants</p>
          <p className="text-lg font-bold">1</p>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <p className="mb-2 text-lg font-bold text-center">Winner</p>
        <div className="p-4 bg-gray-700 rounded-md">
          <div className="flex items-center justify-between mb-2">
            <p>Chunichi Dragons</p>
            <p className="text-lg font-bold">Suspended</p>
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-md">
        <div className="flex items-center justify-between mb-2">
          <p>Yomiuri Giants</p>
          <p className="text-lg font-bold">Suspended</p>
        </div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-lg font-bold">+8</p>
        </div>
      </div>
    </div>
  </div>
</div> */}





            
          </div>

           



        )}

        {activeTab === "My Bets" && <div></div>}
      </div>
    </>
  );
}
