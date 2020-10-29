import Link from "next/link";

export const Sidebar = (): JSX.Element => (
  <div>
    <Link href="bgs">
      <a className="mr-2">bg & illustration</a>
    </Link>
    <Link href="visdev">
      <a className="mr-2">visdev</a>
    </Link>
    <Link href="contact">
      <a>contact</a>
    </Link>
  </div>
);
