import React from "react";

export default function ContainCard() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {arr.map((elem) => (
        <Card vertical={true} />
      ))}
    </div>
  );
}
