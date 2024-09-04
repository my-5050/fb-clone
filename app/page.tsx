import face from "../../public/face.svg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="text-2xl w-1/2 px-8">
        <Image src="face.svg" alt="facebook" width={400} height={100} />
        <p className="ml-10 -mt-5">
          Facebook helps you connect and share with the people in your life...
        </p>
      </div>
      <div className="bg-white flex flex-col cursor-pointer p-10 rounded-xl w-1/3">
        <input
          className="my-2 border border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-400"
          type="text"
          placeholder="Email Address or PhoneNumber"
        />
        <input
          className="my-2 border border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-400"
          type="password"
          placeholder="password"
        />
        <button className="bg-blue-700 rounded-md p-3 my-2 py-2 text-lg font-bold text-white hover:bg-blue-800">
          Log in
        </button>
        <p className="text-center text-blue-600 py-2 hover:underline">
          Forgetten Password?
        </p>
        <span className="my-2 ">
          <hr />
        </span>
        <button className="bg-green-500 rounded-md p-3 my-2 py-2 px-2 mx-auto text-lg font-bold text-white hover:bg-green-600 max-w-fit ">
          Create new account
        </button>
      </div>
    </div>
  );
}
