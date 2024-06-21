import jn77 from "@public/images/kamienice/jn77.png";
import nk29 from "@public/images/kamienice/nk29.png";
import nw10 from "@public/images/kamienice/nw10.png";

let kamienice = [jn77, nk29, nw10];

let cardsData = [
  {
    kamienica: kamienice[0],
    name: "SegFormer",
    firstText: "Obraz",
    secondText: "Segmentacja",
    thirdText: "Maska",
  },
  {
    kamienica: nk29,
    name: "Pix2Pix",
    firstText: "Maska",
    secondText: "Translacja",
    thirdText: "Obraz",
  },
  {
    kamienica: nw10,
    name: "Grammars - to be deployed",
    firstText: "Ilość pięter i wymiary",
    secondText: "Maska",
    // thirdText: "Obraz",
  },
];

export default cardsData;
