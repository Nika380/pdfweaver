# pdfweaver

## Simple HTML To PDF NodeJS package based on puppeteer

## Installation

```sh
    npm install pdfweaver
```

## Usage

To convert `HTML` content to `PDF` use htmlToPdf function:

```js
const { htmlToPdf } = require("pdfweaver");

const options = {
  format: "A4",
  displayHeaderFooter: true,
  headerTemplate: `<h1 style="font-size: 12px"> This Is Header </h1>`,
  footerTemplate: `<div style="font-size: 12px; text-align: center; width: 100%"><span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
  margin: {
    top: 40,
    bottom: 20,
    left: 10,
    right: 10,
  },
};

const content = "<h1> This Is Content HTML</h1>";

// logs PDF Buffer
htmlToPdf({ content }, options).then((res) => {
  console.log("PDF Buffer: ", res);
});

// Returns PDF Buffer
async function returnPDFBuffer() {
  const pdfBuffer = await htmlToPdf({ content }, options);
  return pdfBuffer;
}
```
