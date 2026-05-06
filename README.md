# Launched Finance Vehicle Finance Application

A static web application for vehicle finance applications in New Zealand.

## Overview

This is a single-page application (SPA) built with vanilla HTML, CSS, and JavaScript that guides users through a multi-step vehicle finance application process. Applications are submitted via email using the Resend API.

## Features

- Multi-step form with 25 sections
- Responsive design
- Interactive sliders for price, deposit, income, and expenses
- File upload for documents
- FAQ and Terms & Conditions accordions
- Indicative loan calculation
- Email submission via Resend API
- Form validation and progress tracking

## Deployment

This project is designed to be deployed on Vercel as a static site with serverless functions.

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect this as a static site with API routes
3. Set the environment variable: `RESEND_API_KEY` with your Resend API key
4. Update the API function with your verified sending domain and recipient email
5. The `index.html` file will be served as the root

No build process is required as this is pure HTML/CSS/JS with serverless functions.

## Email Setup

- **Resend API**: Used for sending application emails
- **DNS Configuration**: Configure your domain's DNS records as per Resend's instructions
- **Environment Variable**: Set `RESEND_API_KEY` in Vercel
- **From Address**: Update `from` in `api/send-email.js` with your verified domain
- **To Address**: Update `to` in `api/send-email.js` with your recipient email

## File Structure

```
/
├── index.html          # Main application file
├── api/
│   └── send-email.js   # Serverless function for email sending
├── package.json        # Dependencies for serverless functions
├── vercel.json         # Vercel configuration
├── .gitignore          # Git ignore file
├── README.md           # This file
└── readme.txt          # Original source file
```

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES5)
- Resend API for emails
- Vercel for hosting and serverless functions

## Browser Support

- Modern browsers with ES5 support
- Mobile responsive

## Legal Compliance

This application includes compliance with:
- NZ Privacy Act 2020
- CCCFA (Credit Contracts and Consumer Finance Act)
- Responsible Lending Code

## Contact

Launch Finance Brokers
- Email: info@launchedfinance.co.nz
- Phone: 021 300 279