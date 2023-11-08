"use client";

import BlogHeader from "./BlogHeader";

const BlogReview = (props:any) => {
  const blogData = props?.blog;
  const previewText: string = blogData?.bodyText?.substring(0, 150) + "...";
  // console.log("blogData: ", blogData);

  return (
    <section className="flex flex-col items-center text-[1.15rem] mt-1">
      {/* <div className=" flex gap-3 mb-12"></div> */}
      <a href={blogData.url} target="_blank" rel="noreferrer">
        <div className="max-w-[28em] max-h-[20em] overflow-hidden mx-6 mb-6 bg-neutral-300 text-zinc-800 rounded-lg p-4 hover:bg-neutral-500 hover:text-neutral-300 transition-all duration-300">
          <BlogHeader blogData={blogData} />
          <h2 className=" font-bold">{blogData?.title}</h2>
          <p className=" mt-2">{previewText}</p>

          <div className="flex gap-3 ">
            {blogData.tags.map((tag:any, index:any) => {
              return <p className=" bg-sky-600 px-2 mt-2 font-semibold rounded-x1 text-zinc-800" key={index}>{tag}</p>;
            })}
          </div>
        </div>
      </a>
    </section>
  );
};
export default BlogReview;
