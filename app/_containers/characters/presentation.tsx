import { ImageListContainer } from "@/app/_components/lists/imageList";
import { Wrapper } from "@/app/_components/wrapper/Wrapper";
import { Species } from "@/app/_graphql/generated";
import { PropsWithChildren } from "react";

type CharactersPresentationProps = PropsWithChildren<{ allSpecies: Species[] }>;

export const CharactersPresentation = ({
  children,
  allSpecies,
}: CharactersPresentationProps) => {
  return (
    <Wrapper>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center">Star Wars Characters</h1>
        <div className="flex flex-wrap gap-2 py-8">
          {allSpecies.map((species) => (
            <span
              key={species.id}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {species.name}
            </span>
          ))}
        </div>
        <ImageListContainer />
      </div>
    </Wrapper>
  );
};
