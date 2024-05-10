import Image from "next/image";
import { Dancing_Script } from "next/font/google";

const dance = Dancing_Script({
  subsets: ["latin"],
});

const Latest = () => {
  return (
    <div className="flex flex-col flex-wrap bg-white justify-center items-center p-6 gap-4">
      <h3 className="text-xl font-bold">Latest recipes</h3>
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-col justify-center gap-2">
          <Image
            src="/Burger.jpeg"
            alt="Burger"
            width={300}
            height={300}
            className="rounded-md"
          />
          <h4 className={`${dance.className} text-red-600 font-bold`}>QUICK</h4>
          <h3 className="text-xl">Homemade juicy burger</h3>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Image
            src="/CreamSoup.jpeg"
            alt="Cream Soup"
            width={270}
            height={270}
            className="rounded-md"
          />
          <h4 className={`${dance.className} text-red-600 font-bold`}>SOUPS</h4>
          <h3 className="text-xl">Mushroom light cream soup</h3>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Image
            src="/Caesar.jpeg"
            alt="Caesar Salad"
            width={300}
            height={300}
            className="rounded-md"
          />
          <h4 className={`${dance.className} text-red-600 font-bold`}>
            SALADS
          </h4>
          <h3 className="text-xl">Caesar salad with chicken</h3>
        </div>
      </div>
    </div>
  );
};

export default Latest;
