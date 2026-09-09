const fs = require('fs');
const path = require('path');

function enhanceNavigation(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Ensure Link is imported
  if (!content.includes("from 'react-router-dom'")) {
    content = "import { Link } from 'react-router-dom';\n" + content;
  }

  // 1. Convert data-path navigation links to React Router Links
  content = content.replace(/<a\b([^>]*?)data-path="home"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/"$2>$3</Link>');
  content = content.replace(/<a\b([^>]*?)data-path="about"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/about"$2>$3</Link>');
  content = content.replace(/<a\b([^>]*?)data-path="academics"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/academics"$2>$3</Link>');
  content = content.replace(/<a\b([^>]*?)data-path="admissions"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/admissions"$2>$3</Link>');
  content = content.replace(/<a\b([^>]*?)data-path="student-life"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/about#charter"$2>$3</Link>');
  content = content.replace(/<a\b([^>]*?)data-path="facilities"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/#facilities"$2>$3</Link>');
  content = content.replace(/<a\b([^>]*?)data-path="news-and-events"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/#notices-events"$2>$3</Link>');
  content = content.replace(/<a\b([^>]*?)data-path="contact"([^>]*?)>([\s\S]*?)<\/a>/gi, '<Link$1to="/admissions"$2>$3</Link>');

  // 2. Fix specific nav links in BudhanilkanthaHome
  content = content.replace(/href="#overview"/g, 'href="/about"');
  content = content.replace(/href="#academic-wings"/g, 'href="/academics"');
  content = content.replace(/href="#student-life"/g, 'href="/about#charter"');
  content = content.replace(/href="#admissions-portal"/g, 'href="/admissions"');

  // 3. Ensure anchors exist
  // Add id="student-life" alongside id="features" if present
  content = content.replace(/id="features"/g, 'id="features"');
  
  // Clean up any double hrefs if created
  content = content.replace(/to="([^"]*)"\s+href="[^"]*"/g, 'to="$1"');
  content = content.replace(/href="[^"]*"\s+to="([^"]*)"/g, 'to="$1"');

  fs.writeFileSync(filePath, content);
  console.log('Enhanced navigation in ' + path.basename(filePath));
}

const files = [
  'src/pages/BudhanilkanthaHome.tsx',
  'src/pages/StJudeAbout.tsx',
  'src/pages/StJudeAcademics.tsx',
  'src/pages/StJudeAdmissions.tsx',
  'src/pages/StJudeHome.tsx'
];

files.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    enhanceNavigation(p);
  }
});
