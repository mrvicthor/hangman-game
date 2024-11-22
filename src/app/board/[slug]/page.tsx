import React from "react";
import { getBoardByCategory } from "@/lib/data";
import BoardHeader from "@/components/BoardHeader";
import Board from "@/components/Board";
import {
  getRandomItemFromCategory,
  randomlyReplaceStringWithSpaces,
} from "@/helpers";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const title = decodeURIComponent(slug);

  const data = await getBoardByCategory(title);
  const randomSelectedCategory = getRandomItemFromCategory(JSON.parse(data));
  const randomSelectedCategoryName = randomlyReplaceStringWithSpaces(
    randomSelectedCategory.name
  );

  return (
    <section className="container mx-auto px-6 flex flex-col gap-12">
      <BoardHeader title={title} />
      <p>{randomSelectedCategoryName}</p>
      <div className="">
        <Board />
      </div>
    </section>
  );
};

export default page;
