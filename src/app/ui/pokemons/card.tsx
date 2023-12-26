import Image from "next/image";

export default function Card({
  pokemonID,
  pokemonName,
  pokemonHeight,
  pokemonWeight,
}) {
  return (
    <div className="bg-sky-200 p-5 m-2 rounded-lg">
      <div className="flex flex-col justify-items-center justify-center items-center  rounded">
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`}
          alt="Pokemonter"
          width={100}
          height={100}
          className="object-contain md:object-scale-down"
        />
        <h4 className="font-mono text-lg bold">{pokemonName}</h4>
        <p>{pokemonID}</p>
      </div>
      <div className="Card-group">
        <div className="flex justify-between">
          <div className="p-1 m-1 text-center font-thin text-xs	">
            <p>Height</p>
            <p>{pokemonHeight} m</p>
          </div>
          <div className="p-1 m-1 text-center font-thin text-xs	">
            <p>Weight</p>
            <p>{pokemonWeight} kg</p>
          </div>
        </div>
      </div>
    </div>
  );
}
