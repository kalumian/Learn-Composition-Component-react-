import { cloneElement, Children } from "react";

function RowTow({ data = [] }) {
  return (
    <>
      {data.map((item) => {
        return <li key={item.id}>{item.id}:2</li>;
      })}
    </>
  );
}

export default RowTow;
