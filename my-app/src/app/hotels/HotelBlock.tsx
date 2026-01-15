"use client";
import Image, { type ImageLoaderProps } from "next/image";

interface HotelBlockProps {
  id: number;
  name: string;
  capacity: number;
}

export default function HotelBlock({ id, name, capacity }: HotelBlockProps) {
  const imageLoader = ({ src }: ImageLoaderProps) => {
    return `${src}.jpeg`;
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
      <Image
        src={`hotels/${id}`}
        height={300}
        width={300}
        loader={imageLoader}
        alt="image"
      />
    </div>
  );
}
