"use client";

const BlogHeader = (props:any) => {
  const {author, createdAt} = props?.blogData;
  const createdAtTime = new Date(createdAt);
  const options: Intl.DateTimeFormatOptions  = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
  return (
    <div className="flex">
      <img src={author?.avatar || author?.avatarUrl} alt="avatar" className=" rounded-[50%] mb-4 mr-4" width={50} height={50} />
      <div className="flex flex-col items-start ">
        <p className=" font-semibold text-[1rem]">{author.name}</p>
        <div className="flex gap-4">
          <li className=" list-none font-normal text-[0.85rem]">{author.url}</li>
          <li className="font-normal m1-2 text-[0.85rem]">{createdAtTime.toLocaleDateString('en-US', options)}</li>
        </div>
      </div>
    </div>
  );
};
export default BlogHeader;
