import { activeAuthor } from "../../atoms/ activeAuthor";
import { useRecoilValue } from "recoil";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Quotes({ person }: any) {
  const active_author = useRecoilValue(activeAuthor);

  return (
    <div>
      {active_author}
      {person &&
        person.results.map((eachQuote: any, index: number) => {
          return (
            <div key={index} className="eachQuote">
              {eachQuote.content}
            </div>
          );
        })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const res = await fetch(
    `https://api.quotable.io/quotes?author=${params.active_author}`
  );
  const person = await res.json();
  return {
    props: {
      person,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://api.quotable.io/authors");
  const datas = await res.json();
  console.log("datas", datas.results);
  const paths = datas.results.map((each: any) => ({
    params: { active_author: each.name },
  }));
  return { paths, fallback: false };
};

// data fetching using useEffect and fetch method

// import { activeAuthor } from "../../atoms/ activeAuthor";
// import { useEffect, useState } from "react";
// import { useRecoilValue } from "recoil";
// export default function Quotes() {
//   const [quotes, setQuotes] = useState<any>("");
//   console.log("quotes", quotes);
//   const active_author = useRecoilValue(activeAuthor);
//   useEffect(() => {
//     fetch(`https://api.quotable.io/quotes?author=${active_author}`)
//       .then((response) => response.json())
//       .then((data) => setQuotes(data));
//   }, []);

//   return (
//     <div>
//       {active_author}
//       {quotes &&
//         quotes.results.map((eachQuote: any, index: number) => {
//           return (
//             <div key={index} className="eachQuote">
//              {eachQuote.content}
//             </div>
//           );
//         })}
//     </div>
//   );
// }
