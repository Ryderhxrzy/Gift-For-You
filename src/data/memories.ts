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
    id: "qc-memorial-circle-1",
    title: "QC Memorial Circle",
    date: "August 21, 2025",
    letter: "Ito yung pangalawang balik natin sa Circle mahal pero ngayon ay friends with benifits na tayo nito HAHAHA naalala ko bago tayo pumunta dito sa circle, magkayakap lang tayo pag uwi dahil sa sobrang pagod HAHAHA na miss ko yon haaa. Magkaholding hands rin tayo nito noong pauwi na tayo after natin mag simba sa Quiapo. Kabado ako non nung hinawakan ko kamay mo HAHHA akala ko hindi ka papayag e, iiyak talaga ako HAHHA emee. Nakakamiss kamay mo huhu. Ang daming masasayang ala-ala dito sa circle mahal, naalala ko yung kumakain tayo ng kwek kwek tapos nag kkwentuhan tapos nag scroll tayo non sa IG HAHAH ang LT ng mga napapanood natin, grabe ang tawaanan HAHAHHA. Kinabukasan nito mahal umamin na akoo sayo hehe August 22, 2025. Finally nasabi ko na rin sayo HAHA. I love you mahal. Mahal na mahal kita <3",
    imagePlaceholder: "QC Memorial Circle",
    images: [
      {
        url: "/qc-august-21/qc-aug-21-1.jpg",
        title: "Ice cream with you <3",
        description: "Ang cute ng ice cream ko no HAHAHA sorry naa. Paubos na agad HAHAHA."
      },
      {
        url: "/qc-august-21/qc-aug-21-2.jpg",
        title: "Tower",
        description: "Ang ganda ng pagkared nya huhu perfect na perfect."
      },
      {
        url: "/qc-august-21/qc-aug-21-3.jpg",
        title: "Kwek-kwek with you <3",
        description: "Ang sarap nito mahal pero mas masarap kapa rin."
      },
      {
        url: "/qc-august-21/qc-aug-21-4.jpg",
        title: "HUHU T_T",
        description: "Ito ang pinakamaganda grabe huhu ang galing ng ilaw ilaw grabe T_T cute cute."
      }
    ]
  },
  {
    id: "antipolo-church",
    title: "Antipolo Church",
    date: "August 23, 2025",
    letter: "Pangatlong araw natin 'to mahal kila kuya, ito rin yung pang apat naitng gala HAHA. Nag Antipolo tayo nito kahit na hindi natin alam kung saan ang sakayan HAHAHA ang daming nangyari dito grabe HAHAH papunta pa lang tayo, sinubok na agad tayo ng tadhana HAHAHA hirap hanapin ng sakayan na yon grabee pero buti at nag tanong tanong tayo at halos ilang oras din yung ginugol natin para mahanap yon HAHAHA pero worth in naman nung narating natin. Sakto tayo mahal at nakapag misa pa tayo, sobrang ganda ng Antipolo huhu. Ang linis ng lugar nila mahal tapos super ganda pa ng simbahan. Ang ayaw ko lang ay yung soya nilang walang lasa, grabe scamm HAHAHAH. Na enjoy ko yung pag punta natin dito mahal, sobrang ganda huhu dito tayo pakasal ha pag wala tayo nakitang mas maganda pa hehe. After natin mag simba nag Jollibee tayoo at ikaw nag order HAHAHA thankkk u mahaal hehe late na tayo nito at sinubok uli tayo ng panahon pag uwi HAHAHHA ang hirap makasakay na scam pa tayo ng sinakyan natin palabas ng simbahan, grabe HAHAHHA. Buti na lang at may nadaan na bus at nakauwi rin HAHAH. Sana makabalik ulit tayo dito mahal, simba ulit tayo at kain sa Jollibee hehe. I love you!!",
    imagePlaceholder: "Antipolo Church",
    images: [
      {
        url: "/antipolo-august-23/antipolo-aug-23-1.jpg",
        title: "Antipolo Church Outside",
        description: "Ang ganda ng view dito mahal huhu."
      },
      {
        url: "/antipolo-august-23/antipolo-aug-23-2.jpg",
        title: "Antipolo Church Inside",
        description: "Mas maganda ang view sa loob huhu."
      },
      {
        url: "/antipolo-august-23/antipolo-aug-23-3.jpg",
        title: "Tower",
        description: "Ang cute."
      },
      {
        url: "/antipolo-august-23/antipolo-aug-23-4.jpg",
        title: "Antipolo City Hall",
        description: "Ang ganda ng city hall dito mahal. Sana all."
      }
    ]
  },
  {
    id: "valenzuela-park",
    title: "Valenzuela Park",
    date: "August 24, 2025",
    letter: "Pang-apat na araw natin to kila kuya, ito rin yung pang-limang gala natin hehe pero hindi ako sure kung Valenzuela ba ang nauna sa Antipolo ha HAHAHAH nakalimutan ko naaa. Ang gandaaa dito sa valenzuela mahal kahit na saglit lang tayo nakatambay huhu dumiretso tayo nung Grotto hehe nag ambon ambon pa pag-uwi. Pero sulit yung tambay natin dito mahal, ang ganda ng paligid, napakalinis huhu gusto ko tong balikan kasama ka ulitt. I love youu",
    imagePlaceholder: "Valenzuela Park",
    images: [
      {
        url: "/valenzuela-august-24/valenzuela-aug-23-1.jpg",
        title: "Ice cream with you <3",
        description: "Ayan perfect na ang ice cream ko dito HAHHAHA."
      },
      {
        url: "/valenzuela-august-24/valenzuela-aug-23-2.jpg",
        title: "Valenzuela Park",
        description: "Ang ganda ganda park huhu."
      }
    ]
  },
  {
    id: "grotto-church",
    title: "Grotto Church",
    date: "August 24, 2025",
    letter: "Dito naman tayo dumiretso after natin mag Valenzuela mahal. Nakakamiss huhu. Ito na rin yung huling araw ng gala natin kasi aalis kana :(. Sobrang nag enjoy ako sa pag punta natin dito mahal, ang ganda ng simbahan huhu kaso nung pag punta natin ay may construction pa huhu. Balik tayo dito ha, sigurado pag balik natin dito napakaganda naa. I love you!.",
    imagePlaceholder: "Grotto Church",
    images: [
      {
        url: "/grotto-church-august-24/grotto-church-aug-24-1.jpg",
        title: "Grotto Church",
        description: "Ang ganda ganda ng view."
      },
      {
        url: "/grotto-church-august-24/grotto-church-aug-24-2.jpg",
        title: "Grotto Church",
        description: "Ang ganda ganda ng view."
      }
    ]
  },
];
