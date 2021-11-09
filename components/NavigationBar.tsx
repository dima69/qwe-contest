import Link from "next/link";

const NavigationBar = () => {
  return (
    // max width and items between and center
    <header className="bg-gray-50">
      <div className="flex flex-col md:flex-row text-2xl md:text-3xl max-w-3xl md:justify-between mx-auto text-center">
        <Link href="/">
          <a className="text-blue-500 hover:bg-green-50 py-2 px-5 rounded-md hover:shadow-md hover:text-green-600">
            Face-to-face
          </a>
        </Link>
        <Link href="/individual">
          <a className="text-blue-500 hover:bg-pink-50 py-2 px-5 rounded-md hover:shadow-md hover:text-pink-600">
            Individual ratings
          </a>
        </Link>
        <Link href="/leaderboard">
          <a className="text-blue-500 hover:bg-yellow-50 py-2 px-5 rounded-md hover:shadow-md hover:text-yellow-600">
            Leaderboard
          </a>
        </Link>
      </div>
    </header>
  )
};

export default NavigationBar;