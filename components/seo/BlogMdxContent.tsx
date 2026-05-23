import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

type BlogMdxContentProps = {
  source: string;
};

export async function BlogMdxContent({ source }: BlogMdxContentProps) {
  const { content } = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
    components: {
      h2: (props) => (
        <h2
          {...props}
          className="mt-10 font-radio text-3xl font-black tracking-[-0.05em] text-black dark:text-white sm:text-5xl"
        />
      ),
      h3: (props) => (
        <h3
          {...props}
          className="mt-8 text-2xl font-bold tracking-[-0.03em] text-black dark:text-white sm:text-3xl"
        />
      ),
      p: (props) => (
        <p
          {...props}
          className="mt-4 text-base font-semibold leading-8 text-black/70 dark:text-white/85"
        />
      ),
      ul: (props) => (
        <ul
          {...props}
          className="mt-4 grid gap-2 text-sm font-semibold leading-7 text-black/70 dark:text-white/85"
        />
      ),
      li: (props) => (
        <li {...props} className="ml-5 list-disc marker:text-[#ff5a45]" />
      ),
      a: (props) => (
        <Link
          href={props.href ?? "#"}
          className="font-bold text-[#ff5a45] underline decoration-[#ff5a45]/45 underline-offset-4"
        >
          {props.children}
        </Link>
      ),
      blockquote: (props) => (
        <blockquote
          {...props}
          className="mt-6 rounded-2xl border-l-4 border-[#ff5a45] bg-[#fff4f2] p-5 text-base font-semibold leading-7 text-black/80 dark:bg-[#201416] dark:text-white/90"
        />
      ),
    },
  });

  return <div className="[&_h2:first-of-type]:mt-0">{content}</div>;
}
