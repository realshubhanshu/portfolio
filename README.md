# Shubhanshu Saxena - Digital Marketing Portfolio

A professional, modern portfolio website showcasing expertise in digital marketing, SEO, SEM, and brand development.

## 🚀 Features

- **Modern Design**: Clean, professional aesthetic with smooth animations and transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Fast loading times with lazy loading and optimized assets
- **Interactive Elements**: Engaging hover effects, scroll animations, and dynamic content
- **SEO Friendly**: Semantic HTML and meta tags for better search engine visibility
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📁 Project Structure

```
shubhanshu-portfolio/
│
├── index.html              # Main HTML file
│
├── css/
│   ├── style.css          # Main styling
│   ├── animations.css     # Transitions, hover & scroll effects
│   └── responsive.css     # Mobile & tablet styles
│
├── js/
│   ├── main.js           # Core JavaScript
│   ├── animations.js     # Scroll / reveal animations
│   └── form.js           # Contact form logic
│
├── img/                   # Image assets folder
│   ├── profile/          # Profile images
│   ├── brands/           # Brand logos
│   ├── companies/        # Company logos
│   ├── projects/         # Project visuals
│   ├── certificates/     # Certification images
│   ├── icons/            # SVG icons
│   └── ui/               # UI elements
│
├── assets/
│   ├── resume/           # Resume PDF
│   ├── fonts/            # Custom fonts
│   └── data/             # JSON data files
│
└── README.md             # This file
```

## 🎨 Color Scheme

- **Primary**: #FF6B35 (Vibrant Orange)
- **Secondary**: #004E89 (Deep Blue)
- **Accent**: #F7B32B (Golden Yellow)
- **Dark**: #0A1128 (Navy Black)
- **Light**: #F8F9FA (Off White)

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins, Montserrat, Playfair Display)

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with animated statistics
2. **About**: Personal background and professional summary
3. **Expertise**: Core competencies and skills
4. **Experience**: Professional timeline with company details
5. **Brands**: Showcase of brands worked with
6. **Projects**: Portfolio of digital marketing campaigns
7. **Skills & Tools**: Technical proficiency visualization
8. **Certifications**: Professional credentials
9. **Testimonials**: Client feedback
10. **Contact**: Get in touch form

## 📸 Image Placeholders

Replace the placeholder image paths with your actual images:

### Profile Images
- `img/profile/shubhanshu.jpg` - Profile photo
- `img/profile/shubhanshu-hero.png` - Hero section image

### Brand Logos
- `img/brands/the-yellow-chilli.png`
- `img/brands/miss-doozy.png`
- `img/brands/barrack-62.png`
- `img/brands/noidawery.png`
- `img/brands/weekend-wine-more.png`
- `img/brands/ascent-biz-hotel.png`
- `img/brands/oak-bar-bistro.png`
- `img/brands/spacevogues.png`

### Company Logos
- `img/companies/jg-international.png`
- `img/companies/vatsal-spirits.png`
- `img/companies/spacevogues-furniture.png`
- `img/companies/shivam-computers.png`
- `img/companies/ascent-biz-hotel.png`

### Project Images
Organize project images in subfolders:
- `img/projects/yellow-chilli/`
- `img/projects/miss-doozy/`
- `img/projects/barrack-62/`
- `img/projects/noidawery/`
- `img/projects/weekend-wine-more/`
- `img/projects/spacevogues/`

## 🔧 Customization

### Update Personal Information

1. **Contact Details**: Edit in `index.html` (search for email, phone, location)
2. **Social Links**: Update href attributes in social link sections
3. **Resume**: Replace `assets/resume/Shubhanshu_Saxena_Resume.pdf`

### Modify Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #004E89;
    --accent-color: #F7B32B;
    /* ... more variables */
}
```

### Add/Remove Sections

Each section is clearly commented in `index.html`. Simply copy/paste or remove section blocks as needed.

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select main branch and root folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Connect your GitHub repository
2. Build settings are automatic (static site)
3. Deploy

### Custom Domain
1. Purchase domain from registrar
2. Update DNS settings with hosting provider
3. Add CNAME record pointing to your site

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Already implemented for images
3. **Minify CSS/JS**: Use build tools in production
4. **Enable Caching**: Configure server-side caching
5. **CDN**: Use CDN for Font Awesome and Google Fonts

## 🔐 Form Setup

The contact form currently uses a simulation. To make it functional:

1. **EmailJS**: Uncomment EmailJS code in `js/form.js` and add credentials
2. **Backend API**: Create your own API endpoint and update in `submitFormToBackend()`
3. **Third-party Services**: Integrate Formspree, Netlify Forms, or similar

## 📊 Analytics

Add Google Analytics by inserting tracking code before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 Known Issues

None currently. Please report any issues you encounter.

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Shubhanshu Saxena**
- Email: shubhanshusaxena446@gmail.com
- Phone: +91 8181814274
- Location: Ghaziabad, Uttar Pradesh, India

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- Inspiration from modern portfolio designs

---

**Built with ❤️ by Shubhanshu Saxena**

*Last Updated: February 2025*
