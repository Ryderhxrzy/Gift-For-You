export interface MemoryImage {
  url: string;
  title: string;
}

export interface Memory {
  id: string;
  title: string;
  date: string;
  letter: string;
  imagePlaceholder?: string;
  images: MemoryImage[];
}

export const memories: Memory[] = [
  {
    id: "qc-memorial-circle",
    title: "QC Memorial Circle",
    date: "April 18, 2025",
    letter: "I still remember how nervous I was that day. Everything felt so new, but talking to you felt so natural. You looked absolutely beautiful, and I knew right then that you were someone special.",
    imagePlaceholder: "QC Memorial Circle",
    images: [
      { url: "/qc-april-18/qc-apr-18-1.jpg", title: "Arrival at QC" },
      { url: "/qc-april-18/qc-apr-18-2.jpg", title: "Flowers with You" },
      { url: "/qc-april-18/qc-apr-18-3.jpg", title: "Golden Hour" },
      { url: "/qc-april-18/qc-apr-18-4.jpg", title: "Best Smile" },
      { url: "/qc-april-18/qc-apr-18-5.jpg", title: "QC Lights" },
      { url: "/qc-april-18/qc-apr-18-6.jpg", title: "End of the Night" }
    ]
  },
  {
    id: "late-night",
    title: "Late Night Talks",
    date: "December 12, 2023",
    letter: "Talking to you at 2AM became my favorite habit. Those hours where the world feels quiet and it's just us... those are the moments I cherish most. Thank you for listening and sharing your world with me.",
    imagePlaceholder: "2AM Conversations",
    images: [
      { url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7", title: "Soft Light" },
      { url: "https://images.unsplash.com/photo-1501901642c55-1f143719001b", title: "Stars" }
    ]
  },
  {
    id: "random-laughs",
    title: "Random Laughs",
    date: "February 14, 2024",
    letter: "You made even the most boring days feel special. Whether it's a silly joke or just catching each other's eyes across the room, your laugh is my favorite sound in the world.",
    imagePlaceholder: "Inside Jokes",
    images: [{ url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70", title: "That Silly Face" }]
  },
  {
    id: "the-little-things",
    title: "The Little Things",
    date: "March 05, 2024",
    letter: "It's the way you hold my hand, how you remember the coffee I like, and the way you smile when you're thinking. These little things make my life so much brighter.",
    imagePlaceholder: "Sweet Moments",
    images: [
      { url: "https://images.unsplash.com/photo-1534531173927-aeb928d54385", title: "Holding Hands" },
      { url: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94", title: "Peaceful Times" }
    ]
  },
  {
    id: "our-future",
    title: "Our Future",
    date: "Always & Forever",
    letter: "I can't wait to see all the many more birthdays we get to celebrate together. 24 is just the beginning of another amazing chapter of your life, and I'm so lucky to be in it.",
    imagePlaceholder: "To Always",
    images: [{ url: "https://images.unsplash.com/photo-1513273395968-997e73d3997f", title: "Our Dream" }]
  }
];
