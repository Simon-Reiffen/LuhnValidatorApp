// html skeleton provider
export default function template(title, content = "") {
  return `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <link rel="stylesheet" href="assets/style.css">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>

                <script src="assets/bundle.js"> </script> 
              </body>
              `;
}
