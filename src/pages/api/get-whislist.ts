import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const wishlist = [
    {
      id: 1,
      title: "PlayStation 5",
      category: "Electronics",
      estimatedPrice: 7500000,
      priority: "High", // High, Medium, Low
      isPurchased: false,
      url: "https://tokopedia.com/...",
    },
    {
      id: 2,
      title: "Mechanical Keyboard Custom",
      category: "Electronics",
      estimatedPrice: 1500000,
      priority: "Medium",
      isPurchased: true,
      url: "https://shopee.co.id/...",
    },
    {
      id: 3,
      title: "Sepatu Running Nike",
      category: "Fashion",
      estimatedPrice: 1200000,
      priority: "Low",
      isPurchased: false,
      url: "",
    },
  ];

  return new Response(
    JSON.stringify({
      message: "hallow dari backend astro",
      data: wishlist,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
};
