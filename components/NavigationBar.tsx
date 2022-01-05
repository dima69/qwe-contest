import Link from "next/link";
import { useRouter } from "next/router";

const NavigationBar = () => {
  const { asPath } = useRouter();

  // @@@ disable clicking links if url === item
  const linkClass = "w-32 px-5 py-1 text-xl text-gray-400 hover:text-black";
  const activeLinkClass = "w-32 px-5 py-1 text-xl text-gray-900 font-bold";

  return (
    <header className="">
      <div className="flex flex-row max-w-3xl justify-around mx-auto text-center">
        <Link href="/">
          <a className={asPath === "/" ? activeLinkClass : linkClass}>Vs.</a>
        </Link>
        <Link href="/catalog">
          <a className={asPath === "/catalog" ? activeLinkClass : linkClass}>
            Catalog
          </a>
        </Link>
        <Link href="/stats">
          <a className={asPath === "/stats" ? activeLinkClass : linkClass}>
            Stats
          </a>
        </Link>
      </div>
    </header>
  );
};

export default NavigationBar;
