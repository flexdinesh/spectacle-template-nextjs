import type { NextPage } from "next";
import Head from "next/head";
// import Presentation from "../src/components/Presentation";
import dynamic from 'next/dynamic'

const PresentationWithNoSSR = dynamic(
  () => import('../src/components/Presentation/code'),
  { ssr: false }
)

const Home: NextPage = () => {
  return <PresentationWithNoSSR />;
};

// const Home: NextPage = () => {
//   return <Presentation />;
// };

export default Home;
