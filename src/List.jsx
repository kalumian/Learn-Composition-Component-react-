import React from "react";

function List({ children, data }) {
  const reFactComponent = (chaild) => {
    return React.cloneElement(chaild, { data: data });
  };
  const component = React.Children.map(children, reFactComponent);
  return (
    <div>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          border:"solid 1px"
        }}
      >
        {component}
      </ul>
    </div>
  );
}

export default List;
