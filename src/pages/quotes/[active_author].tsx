import LoginLayout from "@/Layouts/loginLayout";
import { activeAuthor } from "@/atoms/ activeAuthor";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
export default function Quotes() {
  const [quotes, setQuotes] = useState<any>("");
  console.log("quotes", quotes);
  const active_author = useRecoilValue(activeAuthor);
  useEffect(() => {
    fetch(`https://api.quotable.io/quotes?author=${active_author}`)
      .then((response) => response.json())
      .then((data) => setQuotes(data));
  }, []);
  return (
    <div>
      {active_author}
      {quotes &&
        quotes.results.map((eachQuote: any, index: number) => {
          return (
            <div key={index} className="eachQuote">
             {eachQuote.content}
            </div>
          );
        })}
    </div>
  );
}
