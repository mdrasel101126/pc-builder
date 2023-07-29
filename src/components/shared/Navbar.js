import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const items = (
    <>
      <li>
        <Link href="/processor">Processor</Link>
        <Link href="/motherboard">Motherboard</Link>
        <Link href="/ram">RAM</Link>
        <Link href="/power-supply">Power Supply Unit</Link>
        <Link href="/storage-device">Storage Device</Link>
        <Link href="/monitor">Monitor</Link>
        <Link href="/">Others</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-primary text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary text-white rounded-box w-52"
          >
            <li>
              <a>Categroies</a>
              <ul className="p-2">{items}</ul>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          PCBUILDER
        </Link>
        <div className="hidden lg:flex  ml-10">
          <ul className="menu menu-horizontal px-1 z-10">
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 bg-primary w-52">{items}</ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <button className="btn btn-primary">
          <Link href="/pc-builder">PC BUILDER</Link>
        </button>
        {session?.user?.email ? (
          <button onClick={() => signOut()} className="btn btn-primary">
            Logout
          </button>
        ) : (
          <button className="btn btn-primary">
            <Link href="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
