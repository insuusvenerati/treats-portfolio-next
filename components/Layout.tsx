import Head from "next/head";
import Link from "next/link";
import { Sidebar } from "./Sidebar";

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Laura Norwood</title>
      <meta name="Description" content="Portfolio for Laura Norwood" />
    </Head>
    <nav>
      <header className="text__large">
        <Link href="/">
          <a>Laura Norwood</a>
        </Link>
      </header>
      <Sidebar />
    </nav>
    {children}
  </>
);
