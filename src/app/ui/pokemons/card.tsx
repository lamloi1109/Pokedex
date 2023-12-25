import Image from "next/image"

export default function Card({ pokemonID }) {
    return (

        <div>
            <div className="Card-group">
                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`} alt="Pokemonter" width={100} height={100} />
            </div>
            <div className="Card-group">

            </div>
        </div>

    )
}