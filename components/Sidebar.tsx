import Link from "next/link";

export const Sidebar = (): JSX.Element => (
  <div>
    <Link href="/">
      <a className="mr-2">bg & illustration</a>
    </Link>
    <Link href="/visdev">
      <a className="mr-2">visdev</a>
    </Link>
    <Link href="/contact">
      <a className="mr-2">contact</a>
    </Link>
  </div>
);
