# Quick Setup Guide

## 🎯 Getting Started

Follow these steps to set up your portfolio:

### Step 1: Add Your Images

1. **Profile Photos**
   - Add your professional headshot to: `img/profile/shubhanshu.jpg`
   - Add your hero section image to: `img/profile/shubhanshu-hero.png`

2. **Brand Logos**
   Place brand logos in `img/brands/`:
   - the-yellow-chilli.png
   - miss-doozy.png
   - barrack-62.png
   - noidawery.png
   - weekend-wine-more.png
   - ascent-biz-hotel.png
   - oak-bar-bistro.png
   - spacevogues.png

3. **Company Logos**
   Place company logos in `img/companies/`:
   - jg-international.png
   - vatsal-spirits.png
   - spacevogues-furniture.png
   - shivam-computers.png
   - ascent-biz-hotel.png

4. **Project Images**
   Add your project screenshots/designs in their respective folders:
   - `img/projects/yellow-chilli/` (3-4 images)
   - `img/projects/miss-doozy/` (3-4 images)
   - `img/projects/barrack-62/` (3-4 images)
   - `img/projects/noidawery/` (3-4 images)
   - `img/projects/weekend-wine-more/` (3-4 images)
   - `img/projects/spacevogues/` (3-4 images)

5. **Certificate**
   - Add your Google Digital Marketing certificate: `img/certificates/google-digital-marketing.png`

6. **Resume**
   - Add your PDF resume: `assets/resume/Shubhanshu_Saxena_Resume.pdf`

### Step 2: Update Social Media Links

Open `index.html` and search for social links. Update these URLs:

```html
<!-- Example locations to update -->
<a href="https://linkedin.com/in/YOUR-PROFILE" ...>
<a href="https://instagram.com/YOUR-PROFILE" ...>
<a href="https://twitter.com/YOUR-PROFILE" ...>
<a href="https://facebook.com/YOUR-PROFILE" ...>
```

### Step 3: Update Professional Links

Add links to your brand pages in the brands section if available.

### Step 4: Configure Contact Form

To make the contact form functional:

**Option 1: EmailJS (Recommended for beginners)**
1. Sign up at https://www.emailjs.com/
2. Get your Service ID, Template ID, and Public Key
3. Open `js/form.js` and update line ~125 with your credentials:
   ```javascript
   const serviceID = 'YOUR_SERVICE_ID';
   const templateID = 'YOUR_TEMPLATE_ID';
   const publicKey = 'YOUR_PUBLIC_KEY';
   ```

**Option 2: Custom Backend**
Create your own API endpoint and update the `submitFormToBackend()` function in `js/form.js`

**Option 3: Formspree/Netlify Forms**
Follow their documentation to integrate

### Step 5: Add Google Analytics (Optional)

1. Create a Google Analytics account
2. Get your Measurement ID
3. Add tracking code to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

### Step 6: Test Locally

1. Open `index.html` in your browser
2. Check all sections load correctly
3. Test navigation and animations
4. Verify all images appear
5. Test the contact form
6. Check mobile responsiveness (use browser DevTools)

### Step 7: Deploy

**GitHub Pages:**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```
Then enable GitHub Pages in repository settings.

**Netlify:**
1. Drag and drop the entire folder to Netlify
2. Or connect your GitHub repository
3. Deploy!

## 🎨 Customization Tips

### Change Colors
Edit `css/style.css` - Look for `:root` variables at the top

### Add More Projects
Copy any project card in the projects section and modify the content

### Modify Sections
Each section in `index.html` is clearly marked with comments - easy to add/remove

### Change Fonts
Update Google Fonts link in `<head>` and CSS font variables

## ✅ Checklist

- [ ] Added all images
- [ ] Updated social media links
- [ ] Configured contact form
- [ ] Tested locally
- [ ] Optimized images (compress them!)
- [ ] Added Google Analytics (optional)
- [ ] Deployed to hosting
- [ ] Tested on mobile devices
- [ ] Checked all links work

## 🆘 Need Help?

Common issues and solutions:

**Images not showing:**
- Check file paths match exactly (case-sensitive)
- Verify images are in correct folders
- Check file extensions (.png, .jpg)

**Form not working:**
- Check browser console for errors
- Verify EmailJS credentials if using EmailJS
- Test with simple console.log() first

**Animations not working:**
- Clear browser cache
- Check if JavaScript files are loading
- Look for console errors

**Mobile view issues:**
- Test using browser DevTools
- Check responsive.css is loading
- Verify viewport meta tag is present

## 📞 Support

For questions or issues:
- Email: shubhanshusaxena446@gmail.com
- Phone: +91 8181814274

---

Good luck with your portfolio! 🚀
