# 📧 EmailJS Setup Guide - React Portfolio

## 🎯 Goal
Configure EmailJS to send contact form messages directly to your Gmail inbox from your React portfolio.

## 🚀 Quick Setup (10 minutes)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (free account)
3. Verify your email address

### Step 2: Add Email Service
1. In dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Connect your Gmail account
5. **Copy the Service ID** (looks like: `service_abc123`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} <{{from_email}}>
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (looks like: `template_xyz789`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like: `user_abc123def456`)

### Step 5: Update React Configuration
Edit `src/config/emailjs.js`:

```javascript
export const EMAILJS_CONFIG = {
  serviceId: 'service_abc123', // Your actual service ID
  templateId: 'template_xyz789', // Your actual template ID
  publicKey: 'user_abc123def456', // Your actual public key
};
```

### Step 6: Update Contact Component
Edit `src/components/Contact.js` line 25:

```javascript
// Replace these lines:
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';

// With:
const serviceId = EMAILJS_CONFIG.serviceId;
const templateId = EMAILJS_CONFIG.templateId;
const publicKey = EMAILJS_CONFIG.publicKey;
```

And add the import at the top:
```javascript
import { EMAILJS_CONFIG } from '../config/emailjs';
```

### Step 7: Test Your Setup
1. Run your React app: `npm start`
2. Fill out the contact form
3. Submit the form
4. Check your Gmail inbox!

## ✅ Result
- ✅ Messages sent directly to your Gmail
- ✅ Professional email formatting
- ✅ Real-time delivery
- ✅ Free for 200 emails/month
- ✅ No server setup required

## 🆘 Troubleshooting

### "Failed to send email" Error
- Check that all IDs are correct
- Verify Gmail service is connected
- Check browser console for detailed errors

### Not Receiving Emails
- Check spam folder
- Verify Gmail account is correct
- Test with a different email address

### Template Not Working
- Ensure template variables match: `{{from_name}}`, `{{from_email}}`, etc.
- Check template is published (not draft)

## 🎉 Success!
Once configured, every contact form submission will appear in your Gmail inbox with professional formatting!

## 📱 Mobile Responsive
The contact form is fully responsive and works on all devices.

## 🔒 Security
- EmailJS handles all security
- No sensitive data stored in your code
- Gmail credentials stay secure

