import React from "react";
import { getBoardByCategory } from "@/lib/data";
import BoardHeader from "@/components/BoardHeader";
const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const title = decodeURIComponent(slug);

  const data = await getBoardByCategory(title);
  console.log("data", data);
  return (
    <section className="container mx-auto px-6">
      <BoardHeader title={title} />
      {data}
    </section>
  );
};

export default page;
