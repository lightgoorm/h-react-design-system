// import build from "esbuild"
import run from "@hdesignsystem/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({ pkg });
