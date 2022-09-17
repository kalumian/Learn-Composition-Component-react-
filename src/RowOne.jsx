import { cloneElement, Children } from "react";

function RowOne({ data = [] }) {
  return (
    <>
      {data.map((item) => {
        return <li key={item.id}>{item.id}:1</li>;
      })}
    </>
  );
}

export default RowOne;
