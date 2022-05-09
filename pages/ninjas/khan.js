import { useState, useEffect } from "react";
import NewLoader from "./../../components/Loader";

const Khan = () => {
  const [isLoading, setIsLoading] = useState(true);

  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    let randomMilliseconds = getRandomNumberBetween(500, 800);
    setTimeout(() => {
      setIsLoading(false);
    }, randomMilliseconds);
  }, []);
  return (
    <>
      {isLoading ? (
        <NewLoader />
      ) : (
        <div className="forMeContainer">
          <h1>Zokirkhon Kotibkhonv</h1>
          <a
            className="forMe"
            href="mailto:zokirxonkotibxanov@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            zokirxonkotibxanov@gmail.com
          </a>
          <a
            className="forMe"
            href="https://mernstack-porfolio-1002.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            PortFolio
          </a>

          <a
            className="forMe"
            href="http://kko.to/bL_nf2l9H"
            target="_blank"
            rel="noreferrer"
          >
            전남 여수시 미평동 700-4 301호. (만성로95)
          </a>
        </div>
      )}
    </>
  );
};

export default Khan;
