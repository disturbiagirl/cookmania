import Link from "next/link";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-between p-6 bg-gray-200 gap-4">
      <h3 className="text-l font-bold">Categories</h3>
      <div className="flex justify-evenly w-full flex-wrap gap-6 text-sm">
        <div className="flex flex-col items-center justify-center gap-2 ">
          <Image
            src="/Healthy.jpeg"
            alt="Healthy"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-blue-500">
            HEALTHY
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <Image
            src="/Quick.jpeg"
            alt="Quick"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-blue-500">
            QUICK
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src="/Vegan.jpeg"
            alt="Vegeterian"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-blue-500">
            VEGETERIAN
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <Image
            src="/Salads.jpeg"
            alt="Salads"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-blue-500">
            SALADS
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <Image
            src="/Soups.jpeg"
            alt="Soups"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-blue-500">
            SOUPS
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <Image
            src="/Main.jpeg"
            alt="Main dishes"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-blue-500">
            MAINS
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ">
          <Image
            src="/Dessert.jpg"
            alt="Desserts"
            width={100}
            height={100}
            className="rounded-full"
          />
          <Link href="/" className="hover:text-blue-500">
            DESSERTS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
