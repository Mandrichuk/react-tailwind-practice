import React from "react";

function ChannelChats({iconHashtag, chatName}) {
  return (
    <div className="flex items-center ml-8 cursor-pointer hover:text-white">
      {iconHashtag}
      {chatName}
    </div>
  );
}

export default ChannelChats;