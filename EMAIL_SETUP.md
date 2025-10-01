# 📧 Contact Form Setup Guide

## Current Issue
The contact form currently uses `mailto:` links which only open the user's email client. Messages won't be sent to your Gmail automatically.

## Solution: EmailJS Setup (FREE)

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a FREE account
3. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account
5. **Copy the Service ID** (you'll need this)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message: {{subject}}

**Content:**
```
You have a new message from your portfolio website:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. **Copy the Template ID** (you'll need this)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key**

### Step 5: Update Your HTML
Replace these values in your `index.html` file:

```javascript
// Line 1383: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 1407: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
await emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', data);
```

### Step 6: Deploy
```bash
npm run deploy
```

## Result
✅ Messages will be sent directly to your Gmail inbox
✅ Users get confirmation when message is sent
✅ No need for users to open their email client

## Alternative: Keep Current Setup
If you prefer the current `mailto:` setup, users will need to:
1. Click "Send Message"
2. Their email client opens
3. They manually click "Send" in their email client
4. Then you'll receive the message

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- Free tier allows 200 emails/month
- No credit card required for free account
