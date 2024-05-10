import Categories from "./components/Categories";
import Latest from "./components/Latest";
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dance = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div className="flex justify-center p-8 bg-white">
        <h2>
          SIMPLE RECIPES MADE FOR THE{"  "}
          <span className={`${dance.className} text-red-600 text-5xl`}>
            real, actual, everyday life.
          </span>
        </h2>
      </div>
      <div
        className="flex items-center space-around gap-4 bg-gray-300 w-full
      "
      >
        <Image
          src="/Roast.jpeg"
          alt="Healthy"
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: "50%", height: "auto" }}
        />
        <div className="flex flex-col items-center justify-center w-1/2">
          <h1 className="text-gray-700">
            Learn the secret for the best roast chicken!
          </h1>

          <Link href="/" className="hover:text-blue-500">
            read now...
          </Link>
        </div>
      </div>
      <Categories />
      <Latest />
    </div>
  );
}
