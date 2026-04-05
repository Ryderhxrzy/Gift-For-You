export interface MemoryImage {
  url: string;
  title: string;
  description?: string;
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
    letter: "Mahal ko, Sobrang memorable ng araw na 'to. Ito yung unang gala ko na malayo at may kasama pang kasing ganda mo, oh panis HAHAHA. Muntikan pa tayo nito maligaw mahal, hirap kasi hanapin ng circle na yan e HAHAH buti na lang talaga nakita mo yung underpass, muntik pa tayo tumawid sa highway HAHAHA. Sobrang saya ko nung mga panahon na 'to mahal dahil sa loob ng ilang taon ay nakagala na at kasama kapa, sobrang na enjoy ko yung paglalakad lakad natin dito at pag punta sa museum. Sobrang na enjoy ko sya kahit na saglit lang tayo doon. Sana makabalik uli tayo sa lugar na 'to mahal kasi ito yung unang gala aat lugar na napuntahan natin na magkasama. Sana mas marami pa tayong mapuntahan na lugar na magkasama at mas marami pa tayong magagawang memorable na mga bagay na magkasama. I love you mahal.",
    imagePlaceholder: "QC Memorial Circle",
    images: [
      { url: "/qc-april-18/qc-apr-18-1.jpg", title: "Ganda mo dito", description: "Grabe naman ang pag kindat na yan HAHAHA mas lalo akong naiinlove e." },
      { url: "/qc-april-18/qc-apr-18-2.jpg", title: "Ang ganda ng view", description: "Isa 'to sa mga magagandang kuha mo huhu" },
      { url: "/qc-april-18/qc-apr-18-4.jpg", title: "Ang cute ng mga mata mo", description: "My Favourite. Ang ganda ganda ng mga mata mo." },
      { url: "/qc-april-18/qc-apr-18-5.jpg", title: "Panira mga kotse HAHA", description: "Ang ganda ng paligid kaso panira ang mga kotse mahal HAHAHHA" },
      { url: "/qc-april-18/qc-apr-18-6.jpg", title: "Lakad yarn? HAHAHA", description: "Ang sipag natin mag lakad dine HAHAHA nag picture ka pala nyan haaa" }
    ]
  },
  {
    id: "intramuros",
    title: "Intramuros, Manila",
    date: "April 20, 2025",
    letter: "Mahal ko, ito naman yung sumunod nating gala, pangalawang beses na kasama ka pero sa Intramuros naman hehe Grabe yung init dito nun mahal HAHAHA para akong naliligo sa sarili kong pawis. Na enjoy ko sobra yung gala natin na 'to kahit na may pasok ako ng tanghali HAHAHHA sobrang nakakamiss mahal kahit sobrang nakakapagod. Crush pa lang kita nung mga panahon na 'to e HAHHAHA panis crush agad HAHA. Naalala mo yung papunta natin dito? yung sumandal ako sa balikat mo? ang galing ko no HAHHAHA hindi ako inaantok non mahal, gusto ko lang sumandal sa balikat mo. Ang sarap sumandal doon huhu at inulit ko pa yon nung tumambay tayo sa Rizal Park bago umuwi HAHAHA nakakamiss. I love you always!",
    imagePlaceholder: "Intramuros",
    images: [
      { url: "/intramuros-april-20/intramuros-apr-20-1.jpg", title: "Para tayong nasa Spain", description: "Ang ganda ng sahig dito mahal, pero mas maganda ka pa rin HAHAHA." },
      { url: "/intramuros-april-20/intramuros-apr-20-2.jpg", title: "Kabayo cutie", description: "Ang cute cute ng kabayo huhu sakay nga tayo jan sa susunod HAHAHA" },
      { url: "/intramuros-april-20/intramuros-apr-20-3.jpg", title: "Ganda ng view", description: "Kakapagod dito HAHAHHA." },
      { url: "/intramuros-april-20/intramuros-apr-20-4.jpg", title: "Art", description: "Ang gandaa nung art huhu ang lakas makalumaa, cute cutee" },
      { url: "/intramuros-april-20/intramuros-apr-20-6.jpg", title: "Simbahan", description: "Ang ganda ng simbahan dito mahal, sana makabalik tayo dito ulit at makapagsimba na." }
    ]
  },
  {
    id: "quiapo-church",
    title: "Quiapo Church",
    date: "August 21, 2025",
    letter: "Mahal ko, ito naman yung isa sa mga pinaka memorable na araw para sa akin. Ito yung araw na pinakilala kita sa mga magulang ko at sobrang kinakabahan ako non dahil baka hindi nila ako magustuhan. Pero sobrang bait nila sa'yo at sobrang nagustuhan ka nila. Na enjoy ko sobra yung araw na 'to mahal dahil kasama ko yung mga magulang ko at ikaw. Sana makabalik tayo dito ulit at makapagsimba na. I love you always!",
    imagePlaceholder: "Quiapo Church",
    images: [
      {
        url: "/quaipo-church-august-21/quaipo-church-aug-21-1.jpg",
        title: "Church",
        description: "Unang simba natin na magkasama sa Quiapo Church."
      }
    ]
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
