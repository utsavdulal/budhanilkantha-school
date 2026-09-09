const fs = require('fs');
const path = require('path');

function htmlToJsx(html, componentName) {
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : html;

  // 0. Strip script tags entirely from the JSX output
  body = body.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // 1. Convert comments
  body = body.replace(/<!--([\s\S]*?)-->/g, (m, c) => '{/* ' + c.replace(/\*\//g, '* /') + ' */}');

  // 2. Class and for attributes
  body = body.replace(/ class="/g, ' className="');
  body = body.replace(/ for="/g, ' htmlFor="');

  // 3. Common SVG & HTML camelCase attributes
  const attrMap = {
    'tabindex': 'tabIndex',
    'autocomplete': 'autoComplete',
    'autofocus': 'autoFocus',
    'readonly': 'readOnly',
    'maxlength': 'maxLength',
    'minlength': 'minLength',
    'rowspan': 'rowSpan',
    'colspan': 'colSpan',
    'usemap': 'useMap',
    'frameborder': 'frameBorder',
    'stroke-width': 'strokeWidth',
    'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin',
    'stroke-miterlimit': 'strokeMiterlimit',
    'stroke-dasharray': 'strokeDasharray',
    'stroke-dashoffset': 'strokeDashoffset',
    'stroke-opacity': 'strokeOpacity',
    'fill-rule': 'fillRule',
    'fill-opacity': 'fillOpacity',
    'clip-rule': 'clipRule',
    'clip-path': 'clipPath',
    'viewbox': 'viewBox',
    'xmlns:xlink': 'xmlnsXlink',
    'xlink:href': 'xlinkHref',
    'playsinline': 'playsInline'
  };

  for (const [k, v] of Object.entries(attrMap)) {
    const reg = new RegExp(' ' + k + '="', 'gi');
    body = body.replace(reg, ' ' + v + '="');
  }

  // 4. Boolean attributes with empty values like required=""
  body = body.replace(/ required=""/g, ' required={true}');
  body = body.replace(/ disabled=""/g, ' disabled={true}');
  body = body.replace(/ checked=""/g, ' defaultChecked={true}');
  body = body.replace(/ selected=""/g, ' defaultValue=""');

  // 5. Event handlers
  body = body.replace(/ onsubmit="[^"]*"/gi, ' onSubmit={(e) => { e.preventDefault(); alert("Inquiry submitted successfully!"); }}');
  body = body.replace(/ onclick="[^"]*"/gi, ' onClick={() => {}}');
  body = body.replace(/ onchange="[^"]*"/gi, ' onChange={() => {}}');

  // 6. Style string to object conversion
  body = body.replace(/ style="([^"]*)"/g, (m, styleStr) => {
    if (!styleStr.trim()) return '';
    const styleObj = {};
    styleStr.split(';').forEach(pair => {
      const idx = pair.indexOf(':');
      if (idx !== -1) {
        const prop = pair.slice(0, idx).trim();
        const val = pair.slice(idx + 1).trim();
        if (prop && val) {
          const camelProp = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          styleObj[camelProp] = val;
        }
      }
    });
    return ' style={' + JSON.stringify(styleObj) + '}';
  });

  // 7. Self-close void elements
  const voidTags = ['img', 'input', 'br', 'hr', 'source', 'track', 'wbr', 'area', 'base', 'col', 'embed', 'param'];
  voidTags.forEach(tag => {
    const reg = new RegExp('<' + tag + '(\\b[^>]*?)(?<!\\/)>', 'gi');
    body = body.replace(reg, '<' + tag + '$1 />');
  });

  // 8. Fix any remaining unclosed <img> or <input> tags without spaces before closing
  body = body.replace(/<img([^>]*?)(?<!\/)>/gi, '<img$1 />');
  body = body.replace(/<input([^>]*?)(?<!\/)>/gi, '<input$1 />');
  body = body.replace(/<br([^>]*?)(?<!\/)>/gi, '<br$1 />');
  body = body.replace(/<hr([^>]*?)(?<!\/)>/gi, '<hr$1 />');

  return `export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-tertiary-fixed selection:text-tertiary">
      ${body}
    </div>
  );
}
`;
}

const files = [
  { in: 'st_jude_home.html', out: 'src/pages/StJudeHome.tsx', comp: 'StJudeHome' },
  { in: 'st_jude_about.html', out: 'src/pages/StJudeAbout.tsx', comp: 'StJudeAbout' },
  { in: 'st_jude_academics.html', out: 'src/pages/StJudeAcademics.tsx', comp: 'StJudeAcademics' },
  { in: 'st_jude_admissions.html', out: 'src/pages/StJudeAdmissions.tsx', comp: 'StJudeAdmissions' },
  { in: 'budhanilkantha_home.html', out: 'src/pages/BudhanilkanthaHome.tsx', comp: 'BudhanilkanthaHome' }
];

const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

files.forEach(f => {
  const inPath = path.join(__dirname, f.in);
  const outPath = path.join(__dirname, f.out);
  if (fs.existsSync(inPath)) {
    const raw = fs.readFileSync(inPath, 'utf8');
    const jsx = htmlToJsx(raw, f.comp);
    fs.writeFileSync(outPath, jsx);
    console.log('Successfully generated ' + f.out);
  }
});
