import React from "react";
import { BiChevronLeft, BiDotsHorizontalRounded, BiChevronDown, BiHash } from "react-icons/bi";
import Chat from './Chat';


function Channels() {
  return (
    <div className="flex flex-col bg-gray-700 ml-16 h-screen w-52 text-gray-400">
      <section className="ml-5 mt-3">
        <p className="font-bold text-2xl mb-9">Channels</p>
      </section>
      <ChannelTitle iconArrow={<BiChevronLeft size="18"/>} iconDots={<BiDotsHorizontalRounded size="16" />} titleName={"Topics"} />
      <ChannelTitle iconArrow={<BiChevronLeft size="18"/>} iconDots={<BiDotsHorizontalRounded size="16" />} titleName={"Questions"} />
      <ChannelTitle iconArrow={<BiChevronDown size="18"/>} iconDots={<BiDotsHorizontalRounded size="16" />} titleName={"Random"} />

    </div>
  );
}

const ChannelTitle = ({ iconArrow, iconDots, titleName }) => {
  const arrowType = iconArrow.type.name;

  switch (arrowType) {
    case 'BiChevronLeft':
      return (
        <div className="flex justify-between mr-3 items-center ">
          <div className="channel-title">
            {iconArrow}
            <p className="title-name">{titleName}</p>
          </div>
          {iconDots}
        </div>
      );
    case 'BiChevronDown':
      return (
        <>
          <div className="flex justify-between mr-3 items-center ">
            <div className="channel-title">
              {iconArrow}
              <p className="title-name">{titleName}</p>
            </div>
            {iconDots}
          </div>
          <Chat iconHashtag={<BiHash size="18" />} chatName="variants" />
          <Chat iconHashtag={<BiHash size="18" />} chatName="plugins" />
        </>
      );
  }
}


export default Channels;
