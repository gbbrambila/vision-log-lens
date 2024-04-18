import Link from "next/link";

export function NavBar() {
  return (
    <nav className="border-gray-200  dark:bg-gray-800 dark:border-gray-700 mb-10">
      <div className="flex w-11/12 pb-10 pt-10 mx-auto dark:text-white">
        <Link href="/" className="text-xl font-bold">
          Vision Log Lens
        </Link>
      </div>
    </nav>
  );
}
