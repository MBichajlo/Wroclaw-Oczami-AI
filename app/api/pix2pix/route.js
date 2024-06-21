import axios from "axios";
import { NextResponse } from "next/server";
import { spawn, spawnSync } from "child_process";

import fs from "fs/promises";
import path from "path";
export async function POST(req) {
  const formData = await req.formData();

  const imageData = formData.get("data");

  const trimmedImageData = imageData.substring(imageData.indexOf(",") + 1);

  async function runModel() {
    const xxx = spawnSync(
      "python3",
      ["pix2pix/run.py"].concat(["--image64", `"${trimmedImageData}"`])
    );
    console.log(xxx.stderr.toString());
  }
  try {
    await runModel();
    return NextResponse.json({ message: "good" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.response.data }, { status: 500 });
  }
  return NextResponse.json({ message: "error" }, { status: 500 });
}
