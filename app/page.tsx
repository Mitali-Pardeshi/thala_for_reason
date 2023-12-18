import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import CheckForThala from "./components/CheckForThala";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[42vh] flex justify-center items-center flex-col">
        <VideoPlayer/>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-6xl font-bold z-10">Thala For A Reason</h1>
          <p className="mt-4 text-2xl text-center text-gray-300 max-w-lg">
            type and check weather your input is a{" "}
            <span className="font-bold text-blue-400">Thala For A Reason</span>{" "}
            or not
          </p>
        </div>
      </div>
      <CheckForThala/>
    </div>
  );
}
