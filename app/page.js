import Link from "next/link";
import Loading from "./loading";

export default function Home() {
  return (
    <div className="flex h-full flex-col space-y-4 items-center justify-center">
      <h1 className="text-4xl font-bold text-black">Recipe Website</h1>
      <Link
        href="/recipes"
        className="flex p-8 items-center space-x-2 bg-black hover:bg-white hover:text-black text-gray-100 px-4 py-2 mt-6 rounded transition duration-150"
      >
        Explore Now
      </Link>
    </div>
  );
}
