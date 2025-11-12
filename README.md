# Preeti Agrawal - Product Manager Cover Letter Website

A creative, interactive cover letter website showcasing 10+ years of experience as a Product Manager specializing in AI/ML product development.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Scroll animations, hover effects, and animated counters
- **SEO Optimized**: Semantic HTML structure for better search engine visibility
- **Fast Loading**: Vanilla JavaScript with no heavy frameworks
- **Accessible**: WCAG compliant with proper semantic structure

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── Resume_Preeti_Agrawal.pdf  # Resume file (add your actual PDF)
```

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations and transitions
- **JavaScript (ES6)**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Inter and Source Sans Pro

## 📦 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a GitHub Repository**
   ```bash
   # Initialize git in your project folder
   git init

   # Add all files
   git add .

   # Commit
   git commit -m "Initial commit: Creative cover letter website"

   # Add remote (replace with your GitHub username)
   git remote add origin https://github.com/preeti-mlverse/pm-cover-letter.git

   # Push to GitHub
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings**
   - Scroll down to **Pages** section
   - Under "Source", select `main` branch
   - Click **Save**
   - Your site will be live at: `https://preeti-mlverse.github.io/pm-cover-letter/`

3. **Custom Domain (Optional)**
   - Purchase a domain (e.g., preeti-agrawal.com)
   - Add a `CNAME` file with your domain name
   - Configure DNS settings in your domain registrar
   - Add custom domain in GitHub Pages settings

### Option 2: Netlify

1. **Drag & Drop Deployment**
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up for free
   - Drag your project folder to the deployment area
   - Your site will be live instantly!

2. **Git-based Deployment**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Login
   netlify login

   # Deploy
   netlify deploy --prod
   ```

### Option 3: Vercel

1. **Quick Deploy**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy
   vercel
   ```

2. **Or use Vercel Dashboard**
   - Go to [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Automatic deployment on every push

### Option 4: Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Connect your GitHub account
3. Select your repository
4. Deploy with one click

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary: #2563eb;      /* Main blue color */
    --secondary: #10b981;    /* Green for success/growth */
    --accent: #f59e0b;       /* Orange for energy */
    --bg-light: #f9fafb;     /* Light background */
    --text-dark: #1f2937;    /* Dark text */
}
```

### Adding Your Resume

1. Replace `Resume_Preeti_Agrawal.pdf` with your actual resume file
2. Make sure the filename matches the link in `index.html`:
   ```html
   <a href="Resume_Preeti_Agrawal.pdf" download>Download Resume</a>
   ```

### Updating Content

All content is in `index.html`. Simply edit the text within the HTML tags. The structure is organized by sections:
- Hero
- About
- Experience
- Skills
- Achievements
- Value Propositions
- Education
- Contact

### Company-Specific Versions

To create company-specific versions:

1. Create a new branch:
   ```bash
   git checkout -b company-google
   ```

2. Modify the "Why Product Management" section in `index.html`

3. Deploy the branch to a different URL or subdirectory

## 📱 Mobile Optimization

The site is fully responsive and works great on:
- Desktop (1920px and above)
- Laptop (1366px - 1920px)
- Tablet (768px - 1366px)
- Mobile (320px - 768px)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📊 Analytics (Optional)

To add Google Analytics:

1. Get your Google Analytics tracking ID
2. Add this code before closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 🔧 Local Development

1. **Simple Method**: Just open `index.html` in your browser

2. **With Live Server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000

   # Or using Node.js
   npx live-server
   ```

3. **VS Code**: Install "Live Server" extension and click "Go Live"

## 📝 To-Do Checklist

Before deploying:
- [ ] Replace placeholder resume PDF with actual file
- [ ] Test all links (email, LinkedIn, GitHub, phone)
- [ ] Verify all sections have correct content
- [ ] Test on mobile devices
- [ ] Check all animations work smoothly
- [ ] Validate HTML and CSS
- [ ] Test in different browsers
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)

## 🎯 SEO Tips

1. **Update Meta Tags** in `index.html`:
   ```html
   <meta name="description" content="Preeti Agrawal - Product Manager with 10+ years experience in AI/ML product development">
   <meta name="keywords" content="Product Manager, AI, ML, Product Development">
   <meta property="og:title" content="Preeti Agrawal - Product Manager">
   <meta property="og:description" content="Interactive cover letter showcasing 10+ years of PM experience">
   ```

2. **Add sitemap.xml** for better indexing

3. **Submit to Google Search Console**

## 🐛 Troubleshooting

**Issue**: Animations not working
- **Solution**: Check if JavaScript is enabled in browser

**Issue**: Fonts not loading
- **Solution**: Check internet connection (Google Fonts requires internet)

**Issue**: PDF download not working
- **Solution**: Ensure Resume_Preeti_Agrawal.pdf is in the same directory

**Issue**: Mobile menu not showing
- **Solution**: The site uses a simplified nav on mobile; full hamburger menu can be added if needed

## 📄 License

This project is open source and available for personal use.

## 📞 Contact

- **Email**: pmagica22@gmail.com
- **LinkedIn**: [linkedin.com/in/agrawal-preeti](https://www.linkedin.com/in/agrawal-preeti/)
- **GitHub**: [github.com/preeti-mlverse](https://github.com/preeti-mlverse)

---

Built with ❤️ by Preeti Agrawal
