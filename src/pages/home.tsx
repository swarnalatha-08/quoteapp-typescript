import { activeAuthor } from "../atoms/ activeAuthor";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { GetStaticProps } from "next";

export default function Home({ data }: any) {
  const setActiveAuthor = useSetRecoilState(activeAuthor);
  const router = useRouter();
  const handleAuthor = (each: string) => {
    setActiveAuthor(each);
    router.push(`quotes/${each}`);
  };

  const handleRandomQuote = () => {
    router.push("/random-quote-gen");
  };

  const handleAllQuotes = () => {
    router.push("/quotes");
  };
  const handleMyQuotes = () => {
    router.push("/my-quotes");
  };

  return (
    <>
      <div style={{ padding: "20px", display: "flex", columnGap: "16px" }}>
        <button onClick={handleRandomQuote} style={{ padding: "10px 20px" }}>
          New Quote
        </button>
        <button onClick={handleAllQuotes} style={{ padding: "10px 20px" }}>
          all quotes
        </button>
        <button onClick={handleMyQuotes} style={{ padding: "10px 20px" }}>
          my quotes
        </button>
      </div>

      <div className="authorsCards">
        {data &&
          data.results &&
          data.results.map((eachAuthor: any, index: number) => {
            return (
              <div
                key={index}
                onClick={() => handleAuthor(eachAuthor.name)}
                className="authorCard"
              >
                {eachAuthor.name}
              </div>
            );
          })}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.quotable.io/authors");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

// data fetching using useEffect and fetch

// import { activeAuthor } from "../atoms/ activeAuthor";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import { useRecoilValue, useSetRecoilState } from "recoil";

// export default function Home() {
//   const [author, setAuthor] = useState<any>();
//   const setActiveAuthor = useSetRecoilState(activeAuthor);
//   const router = useRouter();

//   useEffect(() => {
//     fetch("https://api.quotable.io/authors")
//       .then((response) => response.json())
//       .then((data) => setAuthor(data));
//   }, []);

//   const handleAuthor = (each: string) => {
//     setActiveAuthor(each);
//     router.push(`quotes/${each}`);
//   };

//   const handleRandomQuote = () => {
//     router.push("/random-quote-gen");
//   };

//   const handleAllQuotes = () => {
//     router.push("/quotes");
//   };
//   const handleMyQuotes = () => {
//     router.push("/my-quotes");
//   };

//   return (
//     <>
//       <div style={{ padding: "20px", display: "flex", columnGap: "16px" }}>
//         <button onClick={handleRandomQuote} style={{ padding: "10px 20px" }}>
//           New Quote
//         </button>
//         <button onClick={handleAllQuotes} style={{ padding: "10px 20px" }}>
//           all quotes
//         </button>
//         <button onClick={handleMyQuotes} style={{ padding: "10px 20px" }}>
//           my quotes
//         </button>
//       </div>

//       <div className="authorsCards">
//         {author &&
//           author.results &&
//           author.results.map((eachAuthor: any, index: number) => {
//             return (
//               <div
//                 key={index}
//                 onClick={() => handleAuthor(eachAuthor.name)}
//                 className="authorCard"
//               >
//                 {eachAuthor.name}
//               </div>
//             );
//           })}
//       </div>
//     </>
//   );
// }
