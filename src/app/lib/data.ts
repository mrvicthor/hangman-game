export async function getCategories() {
  try {
    const response = await fetch("http://localhost:3000/data.json");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error", err);
  }
}
