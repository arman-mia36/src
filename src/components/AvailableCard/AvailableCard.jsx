
export default function AvailableCard({ playerr, handleSelectPlayer }) {
  // console.log(playerr);
  const { name, country, image, rating, battingType, biddingPrice } = playerr;
  return (
    <div>
      <div className="card card-compact bg-base-100  shadow-xl">
        <figure>
          <img
            className="w-full h-[300px] rounded-xl"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <img src="images/icons8-user-30.png" alt="" /> {name}
          </h2>
          <div className="flex justify-between items-center">
            <h3>
              <i className="fa-solid fa-flag"></i> {country}
            </h3>
            <button className="btn">All-Rounder</button>
          </div>
          <hr />
          <div className="flex justify-between items-center">
            <h3>Rating</h3>
            <h2>{rating}</h2>
          </div>
          <div className="flex justify-between items-center">
            <h3>Batting Type</h3>
            <h2>{battingType}</h2>
          </div>
          <div className="flex justify-between items-center">
            <h3>Price: {biddingPrice}</h3>
            <button onClick={ ()=> handleSelectPlayer(playerr)} className="btn">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
