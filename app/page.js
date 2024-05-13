import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full flex-col space-y-4 items-center bg-pink-200 justify-center">
      <h1 className="text-4xl font-bold text-black">Recipe Website</h1>
      <Link
        className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
        href="/recipes"
      >
        <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
          Explore Now
        </span>
      </Link>
    </div>
  );
}
