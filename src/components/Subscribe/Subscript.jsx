

export default function Subscript() {
  return (
    <div className="container mx-auto mt-36 border-2 p-4 border-gray-400 rounded-xl relative top-32 z-30">
      <div
        className="w-full h-[500px] rounded-xl flex space-y-3 flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/images/bg-shadow.png')`,
          objectFit: "cover",
          backgroundSize: "cover",
        //   background: "#FFFFFF",
        }}
      >
        <h2 className="text-3xl font-semibold text-center">
          Subscribe to our Newsletter
        </h2>
        <p className="text-xl font-medium text-center">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="flex gap-1">
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
}
