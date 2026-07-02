"use client";

import "@videojs/react/video/skin.css";
import { createPlayer, videoFeatures } from "@videojs/react";
import { VideoSkin, Video } from "@videojs/react/video";

const Player = createPlayer({ features: videoFeatures });

interface PlayerProps {
  src: string;
}

export const PlayerUI = ({ src }: PlayerProps) => {
  return (
    <Player.Provider>
      <VideoSkin>
        <Video className="w-175" src={src} playsInline />
      </VideoSkin>
    </Player.Provider>
  );
};
