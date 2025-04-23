"use client";
import React, { useState } from "react";
import Image from "@/components/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Link from "next/link";

export function FlipTile({
  frontText,
  backText,
  frontStyle,
  backStyle,
}: {
  frontText: React.ReactNode;
  backText: React.ReactNode;
  frontStyle: string;
  backStyle: string;
}) {
  const [flipped, setFlipped] = React.useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`m-2 flex h-40 w-40 cursor-pointer items-center justify-center rounded-lg bg-blue-800 text-white shadow-lg transition-transform duration-300 hover:scale-105 ${flipped ? "rotate-y-180" : ""}`}
      onClick={handleClick}
    >
      <div
        className={`m-2 text-center ${flipped ? `${backStyle} rotate-y-180` : `${frontStyle}`}`}
      >
        <h3>{flipped ? backText : frontText}</h3>
      </div>
    </div>
  );
}

export function HoverImage({
  text,
  imagePath,
}: {
  text: string;
  imagePath: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutReference = React.useRef<NodeJS.Timeout | null>(null);

  const handleHover = () => {
    if (timeoutReference.current) {
      clearTimeout(timeoutReference.current);
    }
    setIsHovered(true);
  };
  const handleLeave = () => {
    timeoutReference.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  const handleClick = () => {
    setIsHovered(true);
    setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  return (
    <div className="relative inline-block">
      <div
        className="cursor-pointer text-white underline"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        onClick={handleClick}
      >
        {text}
      </div>
      {isHovered && (
        <div className="absolute bottom-5 left-full h-54 w-54 rounded-lg shadow-lg">
          <Image
            className="absolute bottom-0 left-0 rounded-lg object-contain shadow-lg"
            src={imagePath}
            alt="Revealed Image"
            width={200}
            height={200}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
        </div>
      )}
    </div>
  );
}

export function SkillsChart({
  skillsData,
}: {
  skillsData: { name: string; value: number }[];
}) {
  return (
    <div className="m-5 flex justify-center">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={skillsData} layout="vertical" barSize={20} barGap={5}>
          <XAxis type="number" tickCount={6} />
          <YAxis type="category" dataKey="name" width={100} />
          <Tooltip />
          <Bar dataKey="value" fill="#193cb8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Resume() {
  const [droppedDown, setDroppedDown] = useState(false);

  const handleClick = () => {
    setDroppedDown(!droppedDown);
  };

  return (
    <div className="m-10 flex flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="cursor-pointer text-white underline"
      >
        Click to Show Resume!
      </button>
      <div className="m-5">
        {droppedDown && (
          <Link
            download={true}
            href="/images/carter/LeitchCarter_Resume.pdf"
            target="_blank"
          >
            <Image
              className="transform-transition rounded-lg duration-300 hover:scale-105"
              src="/images/carter/LeitchCarter_Resume.jpg"
              alt="Resume"
              width={500}
              height={500}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
