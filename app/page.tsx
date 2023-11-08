import { getBlogs } from "@/server/blogs";
import ListBlog from "../components/ListBlog";
import Filter from "@/components/Filter";

export default function Home() {
  // const blogs = await getBlogs();
  // let tags: string[] = [];
  // for (const blog of blogs) {
  //   for (const tag of blog.tags) {
  //     if (!tags.includes(tag)) {
  //       tags.push(tag);
  //     }
  //   }
  // }

  return (
    <main className="w-screen h-screen overflow-auto flex flex-col items-center bg-zinc-800 text-neutral-300">
      <title>Home page</title>
      <section>
        <div className="mt-3 text-center">
          <h1 className="text-[3rem]">welcome to dev blog a</h1>
          <p>
            {" "}
            A full-stack blog made with next.js, tailwindCSS, Github GraphQL
          </p>
          {/* <Filter tags={tags} /> */}
          {/* <ListBlog blogs={blogs} /> */}
          {/* <p>{JSON.stringify(blogs)}</p> */}
        </div>
      </section>
    </main>
  );
}
