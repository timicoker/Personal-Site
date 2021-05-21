export type Tag = "New" | "Ongoing" | "Employment" | "Project" | "Intern";

export interface Project {
  url?: string;
  img: string;
  title: string;
  tags: Tag[];
  bgColor?: string;
}

export const projects: Project[] = [
  {
    url: "https://www.admedo.com/",
    img: "cards/admedo.png",
    title: "Admedo: Programmatic Advertising",
    tags: ["Employment"],
    bgColor: "#000",
  },
  {
    url: "https://www.storetale.com/",
    img: "cards/storetale.png",
    title: "Storetale: Custom Ecommerce",
    tags: ["Employment"],
    bgColor: "#fff",
  },
  {
    url: "https://www.companywide.com",
    img: "cards/smartCanvas.jpg",
    title: "CompanyWide",
    tags: ["Intern"],
    bgColor: "#000",
  },
  {
    url: "https://github.com/timicoker/escrow",
    img: "cards/Ethereum.png",
    title: "Smart Contract Escrow dApp",
    tags: ["Project"],
    bgColor: "#01142C",
  },
  {
    url: "timicoker.github.io/react-threejs/",
    img: "cards/threeJs.png",
    title: "ThreeJs",
    tags: ["Project"],
    bgColor: "#fff",
  },
  // {
  //   url: "https://tyson-language.now.sh/",
  //   img: "cards/Tyson.jpg",
  //   title: "Escrow dApp",
  //   tags: ["Project"],
  //   bgColor: "#000",
  // },
  {
    img: "cards/hedera.svg",
    title: "Hedera dApp",
    tags: ["Ongoing"],
    bgColor: "linear-gradient(332.15deg, rgb(15, 47, 97) 13.52%, rgb(191, 226, 230) 89.23%)",
    // bgColor: "#01142C",
  }
];
