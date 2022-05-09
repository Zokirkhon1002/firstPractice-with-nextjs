import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="forMeContainer">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          natus dicta. Necessitatibus hic esse, voluptatem nulla fuga, totam eos
          eius commodi provident dolorem natus, harum molestiae quas nam
          perferendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquid
          natus dicta. Necessitatibus hic esse, voluptatem nulla fuga, totam eos
          eius commodi provident dolorem natus, harum molestiae quas nam
          perferendis.
        </p>
      </div>
    </>
  );
};

export default about;
