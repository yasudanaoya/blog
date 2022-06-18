import mikan from "mikanjs";
import sharp from "sharp";
import TextToSVG from "text-to-svg";

const textToSVG = TextToSVG.loadSync("./public/font/DotGothic16-Regular.ttf");

const generateOGP = async function () {
  const { $content } = require("@nuxt/content");
  const blogs = await $content("blog").only(["slug", "title"]).fetch();

  blogs.forEach(async (blog) => {
    const { slug, title } = blog;
    const splitted = mikan.split(title);
    const textSvg = textToSVG.getSVG(splitted, {
      x: 0,
      y: 0,
      fontSize: 100,
      anchor: "top",
      attributes: { fill: "black", stroke: "white" },
    });

    sharp("./public/ogp/bg.jpeg").composite([
      {
        input: Buffer.from(textSvg),
      },
    ]).resize(1200, 630).toFile(`./public/ogp/${slug}.png`, (error) => {
      if (error) console.log('OGP Generate Error: ' + error)
    });
  });
}

module.exports = function() {
  this.nuxt.hook('generate:before', (generator) => {
    // eslint-disable-next-line no-console
    console.log('OgpGenerater:start')
    generateOGP()
    // eslint-disable-next-line no-console
    console.log('OgpGenerater:finish')
  })
}
