import LoginLayout from "@/Layouts/loginLayout";
import { activeAuthor } from "@/atoms/ activeAuthor";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Home() {
  const [author, setAuthor] = useState<any>();
  console.log("author", author);
  const active_author = useRecoilValue(activeAuthor);
  const setActiveAuthor = useSetRecoilState(activeAuthor);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.quotable.io/authors")
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  }, []);

  const handleAuthor = (each: string) => {
    setActiveAuthor(each);
    router.push(`quotes/${each}`);
  };
  return (
    <>
      <div className="authorsCard">
        {author &&
          author.results &&
          author.results.map((eachAuthor: any, index: number) => {
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
