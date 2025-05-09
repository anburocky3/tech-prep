import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

// import { getTableOfContents } from "@/lib/toc";
// import { DocsPageHeader } from "@/components/page-header";
// import { DocsPager } from "@/components/pager";
// import { DashboardTableOfContents } from "@/components/toc";

// import "@/styles/mdx.css";
import { Metadata } from "next";
import { Mdx } from "@/src/components/mdx-components";

import { env } from "@/env.mjs";
// import { absoluteUrl } from "@/lib/utils";

interface DocPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getDocFromParams(params) {
  const slug = params.slug?.join("/") || "";
  const doc = allPosts.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateMetadata(props: DocPageProps): Promise<Metadata> {
  const params = await props.params;
  const doc = await getDocFromParams(params);

  if (!doc) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", doc.description ?? doc.title);
  ogUrl.searchParams.set("type", "Documentation");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      //   url: absoluteUrl(doc.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  };
}

export async function generateStaticParams(): Promise<
  DocPageProps["params"][]
> {
  //   return allPosts.map((doc) => ({
  //     slug: doc.slugAsParams.split("/"),
  //   }));
  return allPosts.map((doc) => {
    return {
      slug: doc.slugAsParams.split("/"),
    };
  });
}

export default async function DocPage(props: DocPageProps) {
  const params = await props.params;
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px] z-0">
      <div className="mx-auto w-full min-w-0 p-10">
        heading
        {/* <DocsPageHeader heading={doc.title} text={doc.description} /> */}
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        {/* <DocsPager doc={doc} /> */}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          {/* <DashboardTableOfContents toc={toc} /> */}
          <h2>Dashboard</h2>
        </div>
      </div>
    </main>
  );
}
