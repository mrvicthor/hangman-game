import React from "react";
import { getBoardByCategory } from "../../../../lib/data";
import Board from "@/components/Board";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const title = decodeURIComponent(slug);

  const data = await getBoardByCategory(title);

  return (
    <section className="container px-6 flex flex-col gap-12">
      <Board data={data} title={title} />
    </section>
  );
};

export default page;
