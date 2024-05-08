import Categories from "./components/Categories";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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
      <p>Home</p>;
    </div>
  );
}
