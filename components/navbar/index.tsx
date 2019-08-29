import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import { global } from "../../utils/constants";

/* Styled-Components */
const InxtNav = styled.nav`
  background: #e8e8e8;
`;

const InxtLink = styled.a`
  font-size: 14px;
  padding: 0.25em 0.5em;
  font-family: sans-serif;
  cursor: pointer;

  color: ${props => props.theme.PRIMARY}
`;
/* /Styled-Components */
export interface Inxtlink {
  section: string;
  link: string;
}

interface IState {
  sections: Inxtlink[];
  ewe: string;
}

interface IProps {

}

export default class Navbar extends Component<IProps, IState> {
  // @ts-ignore
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  public state: IState;
  // public props: IProps;
  // @ts-ignore
  constructor(props) {
    super(props);
    this.state = {
      ewe: "ñeñe",
      sections: [
        {
          section: global.COMPANYNAME,
          link: "/"
        },
        {
          section: "About",
          link: "/about"
        }
        // {
        //   section: "Initial props",
        //   link: "/initial-props"
        // },
        // {
        //   section: "Contact",
        //   link: "/contact"
        // },
        // {
        //   section: "Auth",
        //   link: "/auth"
        // }
      ]
    };
  }

  componentDidMount() {
    this.setState({});
  }

  render() {
    const { sections } = this.state;
    return (
      <InxtNav>
        {
          // @ts-ignore
          sections.map((element, i) => {
            return (
              <Link href={element.link} replace key={i}>
                <InxtLink>{element.section}</InxtLink>
              </Link>
            );
          })
        }
      </InxtNav>
    );
  }
}