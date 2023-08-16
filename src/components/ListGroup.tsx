import { useState } from "react";

function ListGroup() {
  // let = variable value can be changed/reassigned
  // const = variable value cannot be changed/reassigned
  let volleyballBookings = ["V1", "V2"];
  //   volleyballBookings = [];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  const noItemFoundMessage = (items: Array<{}>) => {
    return items.length == 0 && <p> Nothing Found Here </p>;
  };

  const selectItem = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      {noItemFoundMessage(volleyballBookings)}
      <ul>
        {volleyballBookings.map((volleyballBooking, index) => (
          <div>
            <li
              key={volleyballBooking}
              className={
                selectedIndex == index
                  ? "border-2 border-indigo-600"
                  : "border-2"
              }
              onClick={() => {
                selectItem(index);
              }}
            >
              {volleyballBooking}
            </li>
            <button>Hi</button>
          </div>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
