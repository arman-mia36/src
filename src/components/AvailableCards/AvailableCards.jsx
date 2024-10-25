import AvailableCard from "../AvailableCard/AvailableCard";


export default function AvailableCards({ player, handleSelectPlayer }) {
  // console.log(player);
  return (
    <div className="container mx-auto mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {player.map((playerr) => (
          <AvailableCard
            key={playerr.playerId}
            playerr={playerr}
            handleSelectPlayer={handleSelectPlayer}
          />
        ))}
      </div>
    </div>
  );
}
