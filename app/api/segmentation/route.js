import { NextResponse } from "next/server";
import axios from "axios";
import image from "@data/nadodrze_jednosci_narodowej_52.jpeg";
import { promises as fs } from "fs";
import path from "path";
export async function GET(request) {
  var masks = [];
  var colors = {
    szum: 0,
    drzwi: 110,
    okno: 240,
    portal: 200,
    obramowanie_okienne: 250,
    naczolki_okienne: 230,
    "gzyms/element_poziomy": 80,
    "pilaster/element_podzialu_pionowy": 60,
    balkon: 140,
    dach: 160,
    detal: 180,
    ściana: 30,
  };
  const config = {
    headers: {
      Authorization: `Bearer ${process.env.HF_BEARER_TOKEN}`,
      "Content-Type": "image/jpeg",
    },
    body: "binaryData",
  };
  const imgPath = path.join(
    "/Users/maciejbichajlo/WebProjects/Wrocław Oczami AI/wroclaw-oczami-ai",
    "data",
    "nadodrze_jednosci_narodowej_52.jpeg"
  );
  const file = await fs.readFile(imgPath);

  try {
    const results = await axios.post(
      "https://api-inference.huggingface.co/models/Tenements-facades-project/segfacade_model",
      file,
      config
    );
    results.data.map((a) => {
      masks.push({
        label: a.label,
        color: colors[a.label],
        mask: "data:image/svg+xml;base64," + a.mask,
      });
    });
    console.log(typeof masks);
    // console.log("XD");
    return NextResponse.json({ masks: masks }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ messege: "Error" }, { status: 300 });
  }
}
