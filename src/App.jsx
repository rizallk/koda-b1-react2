export default function App() {
  return (
    <div className="bg-fuchsia-300 m-4 rounded-2xl p-14 flex justify-center items-center flex-col font-bold gap-11">
      <h1 className="text-7xl text-center">
        <span className="text-fuchsia-900">R</span>eact{' '}
        <span className="text-fuchsia-900">T</span>ailwind
      </h1>
      <p className="text-center">
        A utility-first CSS framework packed with classes like flex, pt-4,
        text-center and rotate-90 that can be composed to build any design,
        directly in your markup.
      </p>
      <div className="grid md:grid-cols-3 gap-3 w-full">
        <div className="flex justify-center items-center bg-fuchsia-400 h-[50px] rounded-2xl">
          1
        </div>
        <div className="flex justify-center items-center bg-fuchsia-400 h-[50px] rounded-2xl">
          2
        </div>
        <div className="flex justify-center items-center bg-fuchsia-400 h-[50px] rounded-2xl">
          3
        </div>
      </div>
      <div className="flex justify-around gap-3  w-full">
        <button className="text-fuchsia-800">Mulai Sekarang!</button>
        <button className="text-fuchsia-500">Nanti Dulu.</button>
      </div>
    </div>
  );
}
