import React, { useEffect, useState } from "react";

// type QuoteProps = {
//   count: number;
// };

interface QuoteProps {
    count: number;
}
function MyQuote() {
  const [myQuote, setMyQuote] = useState<string[]>([]);
  const [TotalQuotes, setTotalQuotes] = useState<QuoteProps>({ count: 0 });

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setMyQuote([...myQuote, event.currentTarget.value]);
      setTotalQuotes({ count: myQuote.length + 1 });
      event.currentTarget.value = "";
    }
  };
  useEffect(() => {
    localStorage.setItem("myQuotes", JSON.stringify(myQuote));
  }, [myQuote]);

  useEffect(() => {
    const storedQuotes = localStorage.getItem("myQuotes");
    if (storedQuotes) {
      setMyQuote(JSON.parse(storedQuotes));
    }
  }, []);

 



  return (
    <div style={{ padding: "20px 0" }}>
      <label>Write a new quote: </label>
      <input type="text" onKeyDown={handleKeyDown} placeholder="new quote..." />
      <p>
        total quotes: <b>{TotalQuotes.count}</b>
      </p>
      <h3 style={{ textDecoration: "underline" }}>My Quotes</h3>
      <div>
        {myQuote.map((each) => {
          return <li>{each}</li>;
        })}
      </div>
    </div>
  );
}

export default MyQuote;
