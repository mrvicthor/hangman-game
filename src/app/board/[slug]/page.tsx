import React from "react";
import { getBoardByCategory } from "@/lib/data";
import BoardHeader from "@/components/BoardHeader";
import Board from "@/components/Board";
import { getRandomItemFromCategory } from "@/helpers";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const title = decodeURIComponent(slug);

  const data = await getBoardByCategory(title);
  const randomSelectedCategory = getRandomItemFromCategory(JSON.parse(data));

  return (
    <section className="container mx-auto px-6 flex flex-col gap-12">
      <BoardHeader title={title} />
      <p>{randomSelectedCategory.name}</p>
      <div className="">
        <Board />
      </div>
    </section>
  );
};

export default page;
