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

## Parameters

- **`file`** (Type: `Object`)   
should contain one of this properties
  
  - **`url`** (Type: `String`)  
  URL of page you want to generate PDF from
  
  - **`content`** (Type: `String`)  
  HTML code to generate PDF

- **`options`** (Type: `Object`)  
 PDFOptions type coming from puppeteer, declares PDF generation rules
  - **`path`** (Type: `String`)  
  The file path to save the generated PDF. If not specified, the PDF is returned as a buffer.

  - **`scale`** (Type: `Number`)  
    The scale of the webpage rendering. Must be between 0.1 and 2.  
    **Default:** `1`

  - **`displayHeaderFooter`** (Type: `Boolean`)  
    Whether to include headers and footers.  
    **Default:** `false`

  - **`headerTemplate`** (Type: `String`)  
    The HTML template for the header. Requires `displayHeaderFooter: true`.

  - **`footerTemplate`** (Type: `String`)  
    The HTML template for the footer. Requires `displayHeaderFooter: true`.

  - **`printBackground`** (Type: `Boolean`)  
    Whether to include the background graphics.  
    **Default:** `false`

  - **`landscape`** (Type: `Boolean`)  
    Whether to generate the PDF in landscape orientation.  
    **Default:** `false`

  - **`pageRanges`** (Type: `String`)  
    The page ranges to print, e.g., `"1-5, 8, 11-13"`.  
    **Default:** `"all"`

  - **`format`** (Type: `String`)  
    The paper format (e.g., `"A4"`, `"Letter"`). If set, overrides `width` and `height`.

  - **`width`** (Type: `String`)  
    Paper width, accepts values like `"8.5in"`, `"21cm"`.

  - **`height`** (Type: `String`)  
    Paper height, accepts values like `"11in"`, `"29.7cm"`.

  - **`margin`** (Type: `Object`)  
    Margins for the PDF. Object properties include:
    - **`top`** (Type: `String`) | Margin for the top of the page.
    - **`right`** (Type: `String`) | Margin for the right of the page.
    - **`bottom`** (Type: `String`) | Margin for the bottom of the page.
    - **`left`** (Type: `String`) | Margin for the left of the page.

  - **`preferCSSPageSize`** (Type: `Boolean`)  
    Whether to prefer CSS-defined page size over the `width`/`height` or `format`.  
    **Default:** `false`

  - **`omitBackground`** (Type: `Boolean`)  
    Hides the default white background.  
    **Default:** `false`

  - **`timeout`** (Type: `Number`)  
    Maximum time (in milliseconds) to wait for the PDF generation.  
    **Default:** `30000` (30 seconds)

- **`laungOptions`** (Type: `Object`)   
  puppeteer browser configuration options
  - **`headless`** (Type: `Boolean` or `String`)  
  Whether to run the browser in headless mode.  
  **Default:** `true`  
  Can also be set to `"new"` for new headless mode.

  - **`executablePath`** (Type: `String`)  
    Path to a specific browser executable to use.

  - **`args`** (Type: `Array<String>`)  
    Additional arguments to pass to the browser instance.
    example: 
    ```js
    args: ['--no-sandbox', '--disable-setuid-sandbox'] 
    ```

  - **`ignoreDefaultArgs`** (Type: `Boolean` or `Array<String>`)  
    If `true`, Puppeteer won't use its default arguments.  
    If an array is provided, it filters out specific default arguments.

  - **`timeout`** (Type: `Number`)  
    Maximum time (in milliseconds) to wait for the browser to start.  
    **Default:** `30000` (30 seconds)

  - **`dumpio`** (Type: `Boolean`)  
    Whether to pipe the browser process stdout and stderr into the parent process.  
    **Default:** `false`

  - **`env`** (Type: `Object`)  
    Environment variables to pass to the browser instance.

  - **`pipe`** (Type: `Boolean`)  
    Connects to the browser over a pipe instead of a WebSocket.  
    **Default:** `false`

  - **`product`** (Type: `String`)  
    Specifies which browser to use. Options are `"chrome"` or `"firefox"`.  
    **Default:** `"chrome"`

  - **`extraPrefsFirefox`** (Type: `Object`)  
    Additional preferences to configure for Firefox. Only applicable when using Firefox.

  - **`waitForInitialPage`** (Type: `Boolean`)  
    Whether to wait for the initial page to load after launching.  
    **Default:** `true`

  - **`userDataDir`** (Type: `String`)  
    Path to a user data directory to use for the browser session.