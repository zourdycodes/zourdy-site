import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div
      className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-8 pb-14 px-4
    sm:px-6 md:px-8 max-w-3xl mx-auto">
      <div>
        <Link href="/">
          <a className="bg-gradient-to-r text-transparent to-red-500 from-pink-400 bg-clip-text hover:from-red-400 hover:to-pink-600 text-3xl font-bold font-mono">
            Muhammad Zourdy
          </a>
        </Link>
      </div>
      <nav className="text-gray-100 text-lg mt-4 sm:mt-0">
        <ul>
          <li className="inline-flex pr-3 pl-3 border-r border-l border-gray-600">
            <Link href="/">
              <a
                className={`${
                  pathname === "/"
                    ? "bg-gradient-to-r text-transparent to-pink-600 from-red-400 bg-clip-text  hover:from-red-400 hover:to-pink-600 font-mono font-bold "
                    : "text-gray-100 hover:text-red-400 uppercase text-base font-mono"
                }`}>
                Home
              </a>
            </Link>
          </li>
          <li className="inline-flex  pr-3 pl-3 border-r border-gray-600">
            <Link href="/blog">
              <a
                className={`${
                  pathname === "/blog"
                    ? "bg-gradient-to-r text-transparent to-pink-600 from-red-400 bg-clip-text  hover:from-red-400 hover:to-pink-600 font-mono font-bold"
                    : "text-gray-100 hover:text-red-400 uppercase text-base font-mono"
                }`}>
                Blog
              </a>
            </Link>
          </li>
          <li className="inline-flex pr-3 pl-3 border-r border-gray-600">
            <Link href="/about">
              <a
                className={`${
                  pathname === "/about"
                    ? "bg-gradient-to-r text-transparent to-pink-600 from-red-400 bg-clip-text  hover:from-red-400 hover:to-pink-600 font-mono font-bold"
                    : "text-gray-100 hover:text-red-400 uppercase text-base font-mono"
                }`}>
                About
              </a>
            </Link>
          </li>
          <li className="inline-flex pr-3 pl-3 border-r border-gray-600">
            <Link href="/code">
              <a
                className={`${
                  pathname === "/code"
                    ? "bg-gradient-to-r text-transparent to-pink-600 from-red-400 bg-clip-text  hover:from-red-400 hover:to-pink-600 font-mono font-bold"
                    : "text-gray-100 hover:from-red-400 hover:to-pink-600 uppercase text-base font-mono"
                }`}>
                Snippets
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
