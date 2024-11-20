import React from "react";
import { getBoardByCategory } from "@/lib/data";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;

  const data = await getBoardByCategory(decodeURIComponent(slug));
  console.log("data", data);
  return <div>{data}</div>;
};

export default page;
