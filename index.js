const puppeteer = require("puppeteer");

/**
 * Generates a PDF from HTML content.
 * @param {import("puppeteer").PDFOptions} options - The PDF options.
 * @param {string} html - The HTML content to render.
 */
const htmlToPdf = async (options, html) => {
  // Launches Chromium Browser
  const browser = await puppeteer.launch();

  // Opens New Page
  const page = await browser.newPage();

  // Loands provided html content on page
  await page.setContent(html, { waitUntil: "networkidle0" });

  // generates pdf based on provided information
  const data = await page.pdf(options);

  // Closes Chromium browser
  await browser.close();

  // Returns pdf values as a buffer
  return Buffer.from(Object.values(data));
};

module.exports.htmlToPdf = htmlToPdf;
