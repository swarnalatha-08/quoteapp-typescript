import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { Button } from "../../components/atoms/button/Button";
import btnStyles from "../../components/atoms/button/button.module.css";
export default function RandomQuoteGen({ data }: any) {
  const router = useRouter();
  const handleClick_to_nav_to_home = () => {
    router.push("/home");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 0",
          height: "77vh",
        }}
      >
        {data &&
          data.map((eachRandomQuote: any, index: number) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <div
                  style={{
                    padding: "20px 40px",
                    width: "60%",
                    boxShadow: "1px 2px 9px #F4AAB9",
                  }}
                >
                  <h2>
                    {eachRandomQuote.content} -
                    <span style={{ fontSize: "16px" }}>
                      {eachRandomQuote.author}
                    </span>
                  </h2>
                  {/* <button
                    style={{ alignItems: "end" }}
                    onClick={handleClick_to_nav_to_home}
                  >
                    home
                  </button> */}
                  <Button
                    variant={`${btnStyles["primary-button"]}`}
                    onClick={handleClick_to_nav_to_home}
                  >
                    submit
                  </Button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://api.quotable.io/quotes/random");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

// data fetching using useEffect and fetch

// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// export default function RandomQuoteGen() {
//   const [randomQuote, setRandomQuote] = useState("");
//   const router = useRouter();
//   useEffect(() => {
//     fetch("https://api.quotable.io/quotes/random")
//       .then((res) => res.json())
//       .then((data) => setRandomQuote(data));
//   }, []);

//   const handleClick_to_nav_to_home = () => {
//     router.push("/home");

//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: "40px 0",
//           height: "77vh",
//         }}
//       >
//         {randomQuote &&
//           randomQuote.map((eachRandomQuote, index) => {
//             return (
//               <div
//                 key={index}
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   alignContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     padding: "20px 40px",
//                     width: "60%",
//                     boxShadow: "1px 2px 9px #F4AAB9",
//                   }}
//                 >
//                   <h2>
//                     {eachRandomQuote.content} -
//                     <span style={{ fontSize: "16px" }}>
//                       {eachRandomQuote.author}
//                     </span>
//                   </h2>
//                   <button
//                     style={{ alignItems: "end" }}
//                     onClick={handleClick_to_nav_to_home}
//                   >
//                     home
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }
