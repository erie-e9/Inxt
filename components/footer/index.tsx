import * as React from "react";
import Link from "next/link";

const Footer: React.FunctionComponent = () => (
  <footer>
    <hr />
    <Link href="/">
      <a>Home</a>
    </Link>{" "}
    | <span>I"m here to stay (Footer)</span>
  </footer>
);

export default Footer;
