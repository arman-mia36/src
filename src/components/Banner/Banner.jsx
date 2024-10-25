

export default function Banner({ handleCoin }) {
  return (
    <div className="container mx-auto mt-12">
      <div
        className="flex flex-col items-center justify-center gap-4"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('/images/bg-shadow.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          borderRadius: "15px",
        }}
      >
        <img className="w-[250px]" src="/images/banner-main.png" alt="" />
        <h1 className="text-4xl font-bold text-white text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h3 className="text-2xl font-medium text-[#FFFFFFB3]">
          Beyond Boundaries Beyond Limits
        </h3>
        <div className="border-2 rounded-xl p-2 border-yellow-300">
          <button onClick={ handleCoin} className="btn bg-[#E7FE29]">
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
}
