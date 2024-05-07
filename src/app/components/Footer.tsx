import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-wrap items-center justify-between p-6 bg-gray-200">
      <h3>CookMania 2024 ©</h3>
      <Link href="/privacy" className="hover:text-blue-500">
        Privacy Policy
      </Link>
    </footer>
  );
};

export default Footer;
