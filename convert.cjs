const fs = require('fs');

let html = fs.readFileSync('home.html', 'utf8');
let bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
let body = bodyMatch ? bodyMatch[1] : html;

body = body.replace(/class=/g, 'className=');
body = body.replace(/for=/g, 'htmlFor=');
body = body.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
body = body.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
body = body.replace(/<br([^>]*[^\/])>/g, '<br$1 />');
body = body.replace(/<hr([^>]*[^\/])>/g, '<hr$1 />');
body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

const jsx = `import React from "react";

export default function Home() {
  return (
    <div className="bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      ${body}
    </div>
  );
}
`;

fs.writeFileSync('src/Home.tsx', jsx);
