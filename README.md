# The Huntington Reckon Website

Professional single-page website for The Huntington Reckon - specialized bookkeeping & analytics for auto brokers.

## Features

- **Single-page scrolling design** - Smooth navigation between sections
- **Responsive layout** - Optimized for mobile, tablet, and desktop
- **Modern animations** - Scroll-triggered fade-in effects
- **Professional design** - Trust-focused color palette and typography
- **SEO optimized** - Semantic HTML and meta tags
- **Accessible** - WCAG-compliant with keyboard navigation support

## Sections

1. **Hero** - Eye-catching introduction with clear CTAs
2. **About** - Business introduction and key differentiators
3. **Services** - 8 specialized bookkeeping & analytics services for auto brokers
4. **Testimonials** - Client success stories
5. **Contact** - Email and business hours information

## Tech Stack

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Montserrat & Open Sans)

## File Structure

```
/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css         # Core styles and design system
│   ├── responsive.css     # Mobile/tablet/desktop breakpoints
│   └── animations.css     # Scroll animations and transitions
├── js/
│   ├── navigation.js      # Smooth scrolling and navbar
│   └── animations.js      # Intersection Observer animations
├── images/                 # Image assets (add your own)
└── README.md              # This file
```

## Customization

### Colors

The color palette is defined in CSS variables in `css/styles.css`:

```css
--primary: #1B4965     /* Deep Navy Blue */
--secondary: #5FA8D3   /* Soft Blue */
--accent: #CAE9FF      /* Light Sky Blue */
--cta: #62B6CB         /* Teal Blue */
```

### Typography

- **Headings:** Montserrat (Bold 700, SemiBold 600)
- **Body:** Open Sans (Regular 400, Medium 500)

### Content

1. **Email Address:** Update `contact@huntingtonreckon.com` in `index.html`
2. **Business Hours:** Modify the contact section
3. **Testimonials:** Replace placeholder testimonials with real client feedback
4. **Images:** Add your logo and professional photos to the `/images` folder
5. **About Section:** Customize the content to reflect your story

## Deployment

### GitHub Pages

1. Initialize git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create repository on GitHub

3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/huntington-reckon.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages in repository settings (Settings → Pages → Source: main branch)

### Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the project folder to Netlify
3. Or connect to your GitHub repository for automatic deployments

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight (~50KB total)
- No external dependencies
- Optimized for fast loading
- Mobile-first responsive design

## Future Enhancements

- [ ] Add contact form with backend (Netlify Forms or FormSpree)
- [ ] Integrate Google Analytics
- [ ] Add blog section
- [ ] Create FAQ section
- [ ] Add client logo carousel
- [ ] Implement dark mode toggle

## License

© 2025 The Huntington Reckon. All rights reserved.

## Support

For questions or issues with the website, please contact the developer.
