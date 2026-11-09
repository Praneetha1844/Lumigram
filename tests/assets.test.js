import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = path.resolve(import.meta.dirname, "..");

function sourceFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) return name === "assets" ? [] : sourceFiles(full);
    return /\.(jsx?|html)$/.test(name) ? [full] : [];
  });
}

describe("public assets", () => {
  it("every literal asset path used in src exists in public/", () => {
    const missing = [];
    for (const file of [...sourceFiles(path.join(root, "src")), path.join(root, "index.html")]) {
      const text = readFileSync(file, "utf8");
      for (const [, asset] of text.matchAll(/["'`](\/[\w.-]+\.(?:png|jpe?g|mp4|svg))["'`]/g)) {
        if (!existsSync(path.join(root, "public", asset))) missing.push(`${path.basename(file)}: ${asset}`);
      }
    }
    expect(missing).toEqual([]);
  });

  it("the numbered demo images used by templates exist", () => {
    for (const n of [1, 2, 3, 4, 5]) {
      expect(existsSync(path.join(root, "public", `img${n}.png`))).toBe(true);
    }
  });
});
