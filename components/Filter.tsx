"use client";
import { useState } from "react";
import BlogReview from "./BlogReview";

const Filter = (props:any) => {
  const tags = props?.tags;
  const [filterWords, setFilterWords] = useState([] as any);
  const [selectedIndex, setSelectedIndex] = useState([] as any);
  console.log("selectedIndex: ", selectedIndex);
  // console.log('props: ', props);

  const filterLabel = (tag:any, idx: any) => {
    if (selectedIndex.includes(idx)) {
      setSelectedIndex(selectedIndex.filter((id:any) => id !== idx));
    } else {
      setSelectedIndex([...selectedIndex, idx]);
    }
  };

  return (
    <div className=" flex gap-3 mb-12">
      {tags.map((tag:any, index:any) => {
        return (
          <button
            className={selectedIndex.includes(index) ? 'label-selected':'label'}
            // className=" label hover:bg-sky-400 transition-all duration-300"
            key={index}
            onClick={() => filterLabel(tag, index)}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
};
export default Filter;
