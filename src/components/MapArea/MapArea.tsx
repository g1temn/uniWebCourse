import React from "react";

interface MapAreaProps {
  shape: string;
  baseCoords: number[];
  alt: string;
  tooltip: string;
  scaleX: number;
  scaleY: number;
  onClick: (e: React.MouseEvent<HTMLAreaElement>) => void;
}

export const MapArea: React.FC<MapAreaProps> = ({
  shape,
  baseCoords,
  alt,
  tooltip,
  scaleX,
  scaleY,
  onClick,
}) => {
  const scaledCoords = baseCoords.map((coord, index) => {
    if (shape === "circle" && index === 2) {
      return Math.round(coord * ((scaleX + scaleY) / 2));
    }
    return Math.round(coord * (index % 2 === 0 ? scaleX : scaleY));
  });

  return (
    <area
      shape={shape}
      coords={scaledCoords.join(",")}
      alt={alt}
      title={tooltip}
      href="#"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};
