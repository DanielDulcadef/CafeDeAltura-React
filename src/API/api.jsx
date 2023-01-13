export default async function api() {
    const response = await fetch('https://cafe-de-altura-api.vercel.app/api/products');
    const data = await response.json();
    return data;
  }