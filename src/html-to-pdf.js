const puppeteer = require("puppeteer");

/**
 * Generates a PDF from HTML content.
 * @param {{content: string, url: string}} html - The HTML content to render.
 * @param {import("puppeteer").PDFOptions} options - The PDF options.
 * @param {import('puppeteer').LaunchOptions} launchOptions - Launch options for Puppeteer.
 */
const htmlToPdf = async (html, options = {}, launchOptions = {}) => {
  // Launches Chromium Browser
  const browser = await puppeteer.launch(launchOptions);

  // Opens New Page
  const page = await browser.newPage();

  if (html.url) {
    // Navigates to provided url page
    await page.goto(html.url, { waitUntil: "domcontentloaded" });
  } else if (html.content) {
    // Loands provided html content on page
    await page.setContent(html.content, { waitUntil: "networkidle0" });
  } else {
    throw Error("HTML Content Or URL Not Provided");
  }

  // generates pdf based on provided information
  const data = await page.pdf(options);

  // Closes Chromium browser
  await browser.close();

  // Returns pdf values as a buffer
  return Buffer.from(Object.values(data));
};

module.exports.htmlToPdf = htmlToPdf;
