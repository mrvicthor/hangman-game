import fsPromises from "fs/promises";
import path from "path";

export async function getCategories() {
  const filePath = path.join(process.cwd(), "/lib/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const data = JSON.parse(jsonData.toString());
  return data;
}

export async function getBoardByCategory(category: string) {
  const data = await getCategories();
  return JSON.stringify(data.categories[category]);
}
