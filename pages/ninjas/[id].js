import { useState, useEffect } from "react";
import NewLoader from "./../../components/Loader";


const URL = "https://jsonplaceholder.typicode.com/users";
export const getStaticPaths = async () => {
  const res = await fetch(URL);
  const data = await res.json();

  const paths = data.map((ninja) => ({ params: { id: ninja.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({params}) => {
  const id = params.id;
  const res = await fetch(`${URL}/${id}`);
  const data = await res.json();
  return {
    props: {
      ninja: data,
    },
  };
};

const Details = ({ ninja }) => {
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

  console.error = function () {}

  return (
    <>
      {isLoading ? (
        <NewLoader />
      ) : (
        <div>
          <h1>Details</h1>
          <h1>{ninja.name}</h1>
          <p>{ninja.email}</p>
          <p>{ninja.website}</p>
          <p>{ninja.address.city}</p>
        </div>
      )}
    </>
  );
};

export default Details;
