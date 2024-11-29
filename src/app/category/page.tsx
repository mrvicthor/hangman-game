import { getCategories } from "../../../lib/data";

import CategoryClient from "@/components/CategoryClient";

const page = async () => {
  const data = await getCategories();
  const categories = Object.keys(data.categories);

  return <CategoryClient categories={categories} />;
};

export default page;
