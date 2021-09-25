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
          <a className="text-gray-400 hover:text-red-400 text-3xl">Muhammad Zourdy</a>
        </Link>
      </div>
      <nav className="text-gray-100 text-lg mt-4 sm:mt-0">
        <ul>
          <li className="inline-flex">
            <Link href="/">
              <a
                className={`${
                  pathname === "/"
                    ? "text-red-400  hover:text-red-400"
                    : "text-gray-100 hover:text-red-400 "
                }`}>
                Home
              </a>
            </Link>
          </li>
          <li className="inline-flex ml-3">
            <Link href="/blog">
              <a
                className={`${
                  pathname === "/blog"
                    ? "text-red-400 hover:text-red-400"
                    : "text-gray-100 hover:text-red-400 "
                }`}>
                Blog
              </a>
            </Link>
          </li>
          <li className="inline-flex ml-3">
            <Link href="/about">
              <a
                className={`${
                  pathname === "/about"
                    ? "text-red-400 hover:text-red-400"
                    : "text-gray-100 hover:text-red-400 "
                }`}>
                About
              </a>
            </Link>
          </li>
          <li className="inline-flex ml-3">
            <Link href="/code">
              <a
                className={`${
                  pathname === "/code"
                    ? "text-red-400 hover:text-red-400"
                    : "text-gray-100 hover:text-red-400 "
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
