import { components } from "@/components/CustomComponent";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import Image from "next/image";
import CommentSec from "./commentSec/page";

<<<<<<< HEAD
// Define the Props interface
interface PageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 10;  // seconds

// This is an async function that will properly handle async params
const Page = async ({ params }: PageProps) => {
  // Ensure params are awaited properly (use destructuring here)
  const slug = params?.slug;

  if (!slug) {
    return <div>Error: slug not found</div>;
  }

=======
// Revalidate interval in seconds
export const revalidate = 10;

interface Params {
  slug: string;
}

// Ensure to pass the correct type for the page function
const Page = async ({ params }: { params: Params }) => {
  // Query to fetch post data
>>>>>>> f72c8c53c2dc3567a31d081629e91029c2131f90
  const query = `*[_type=='post' && slug.current==$slug]{
    title, summary, image, content,
    author->{bio, image, name}
  }[0]`;

<<<<<<< HEAD
  // Fetch post data using the resolved slug
  const post = await client.fetch(query, { slug });
=======
  // Fetch the post data
  const post = await client.fetch(query, { slug: params.slug });
>>>>>>> f72c8c53c2dc3567a31d081629e91029c2131f90

  // If post is not found, handle it accordingly
  if (!post) {
    return <div>Post not found</div>;
  }

<<<<<<< HEAD
=======
  // Return JSX with post data
>>>>>>> f72c8c53c2dc3567a31d081629e91029c2131f90
  return (
    <>
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        {/* Blog Title */}
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>

        {/* Featured Image */}
        <Image
          src={urlFor(post.image).url()}
          width={500}
          height={500}
          alt="AI for everyone"
          className="rounded"
        />

        {/* Blog Summary Section */}
        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-rose-900 mb-10">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post.summary}
          </p>
        </section>

        {/* Author Section */}
        <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
          <Image
            src={urlFor(post.author.image).url()}
            width={200}
            height={200}
            alt="author"
            className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-bold text-dark dark:text-light">{post.author.name}</h3>
            <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
              {post.author.bio}
            </p>
          </div>
        </section>

        {/* Main Body of Blog */}
        <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
          <PortableText value={post.content} components={components} />
        </section>
      </article>
      <CommentSec />
    </>
  );
};

export default Page;
