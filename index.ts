import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";

const url =
  "https://ms0680146.medium.com/%E5%BE%9E%E9%9B%B6%E5%88%B0%E6%9C%89%E5%BB%BA%E7%AB%8B-laravel-%E6%B8%AC%E8%A9%A6-fd9d24986774";

const html = await fetch(url);
const body = await html.text();
const document = new JSDOM(body, { url: url }).window.document;
const reader = new Readability(document);
const article = reader.parse();

console.log("[網站名稱] " + article?.siteName);
console.log("[標題] " + article?.title);
console.log("[內文] " + article?.textContent);
