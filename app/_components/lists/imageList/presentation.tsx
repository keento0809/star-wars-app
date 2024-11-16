import { PropsWithChildren } from "react";
import { ImageCard } from "../../cards/imageCard/ImageCard";
import { SAMPLE_IMAGES } from "./_constants/imageList";

export const ImageListPresentation = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
        {SAMPLE_IMAGES.map((imageUrl, index) => (
          <ImageCard
            key={index}
            name={`Character ${index + 1}`}
            imageUrl={imageUrl}
          />
        ))}
      </div>
      {children}
    </>
  );
};
