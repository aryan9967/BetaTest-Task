import { useState, useRef, useEffect } from "react";
import affirmation_img from "../assets/affirmation_image.png"

export default function Affirmation() {
  return (
    <div className="affirmation font-poppins">
      <h3 className=" text-lg text-zinc-800 font-semibold">Affirmations</h3>
      <div className="audio_player mt-2">
        <img src={affirmation_img} className="h-[700px] md-[756px] w-full" alt="" />
      </div>
    </div>
  );
}
