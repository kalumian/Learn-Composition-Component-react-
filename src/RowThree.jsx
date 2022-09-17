import { cloneElement, Children } from "react";

function RowThree({ data = [] }) {
  return (
    <>
 {data.map((item) => {
        return <li key={item.id}>{item.id}:3</li>;
      })}
    </>
  );
}

export default RowThree;
