export async function getCategories() {
  try {
    const response = await fetch("http://localhost:3000/data.json");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error", err);
  }
}

export async function getBoardByCategory(category: string) {
  const data = await getCategories();
  return JSON.stringify(data.categories[category]);
}
