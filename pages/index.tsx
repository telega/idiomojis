import { FC, useState, useEffect } from "react";
import Head from "next/head";
import { IdiomojiData } from "../interfaces/IdiomojiData";
import { ResultContainer } from "../components/result/ResultContainer";
import { sample } from "lodash";
import { Header } from "../components/Header";
import { SearchSection } from "../components/search/SearchSection";
import { PseudoFooter } from "../components/PseudoFooter";
import { RandomButton } from "../components/RandomButton";

const data: IdiomojiData[] = require("../public/data.json");

const Home: FC = () => {
  const [results, setResults] = useState<IdiomojiData[]>([]);
  const getRandomResult = () => [].concat(sample(data));
  const setRandomResult = () => setResults(getRandomResult());
  useEffect(() => {
    setRandomResult();
  }, []);

  return (
    <>
      <Head>
        <title>Idiomojis</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😀</text></svg>"
        />
      </Head>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 pt-24">
          <Header />
        </div>
        <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col lg:items-start md:items-start sm:items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <SearchSection setResults={setResults} data={data} />
            <RandomButton setRandomResult={setRandomResult} />
            <PseudoFooter />
          </div>
          <ResultContainer results={results} />
        </div>
      </section>
    </>
  );
};

export default Home;

/*

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Header />
            <SearchSection setResults={setResults} data={data} />
            <RandomButton setRandomResult={setRandomResult} />
            <PseudoFooter />
          </div>
          <ResultContainer results={results} />
        </div>
      </section>*/
