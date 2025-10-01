# 📧 Perfect Contact Form Setup Guide

## 🎯 Goal
Set up a contact form that sends messages directly to your Gmail inbox using EmailJS.

## 🚀 Step-by-Step Setup

### Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a FREE account
3. Verify your email address

### Step 2: Add Gmail Service
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"** and sign in with your Gmail
5. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Template ID:** `template_portfolio_contact`

**Subject:** `New Portfolio Message: {{subject}}`

**Content:**
```
Hello Marko,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to {{from_name}}.
```

4. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like: `user_xxxxxxxxxxxxxxxx`)

### Step 5: Update Your HTML
Replace these values in your `index.html` file:

**Line 1382:** Replace `YOUR_PUBLIC_KEY`
```javascript
emailjs.init("user_xxxxxxxxxxxxxxxx"); // Your actual public key
```

**Line 1406:** Replace `YOUR_SERVICE_ID` and `YOUR_TEMPLATE_ID`
```javascript
const result = await emailjs.send('service_xxxxxxx', 'template_xxxxxxx', {
```

### Step 6: Deploy
```bash
npm run deploy
```

## ✅ Result
- ✅ Messages sent directly to your Gmail inbox
- ✅ Users get instant confirmation
- ✅ Professional email formatting
- ✅ No server setup required
- ✅ Free for up to 200 emails/month

## 🔧 Alternative: Quick Test Setup
If you want to test immediately, you can use these demo values (replace in HTML):

```javascript
// Demo values (replace with your actual keys)
emailjs.init("demo_user_key");
const result = await emailjs.send('demo_service', 'demo_template', {
```

## 📱 Features
- **Instant delivery** to your Gmail
- **Professional formatting** with all contact details
- **Error handling** with user feedback
- **Loading states** for better UX
- **Form validation** and reset
- **Mobile responsive** design

## 🆘 Troubleshooting
- **Messages not received?** Check spam folder
- **Form not working?** Verify all keys are correct
- **Need help?** EmailJS has excellent documentation

## 🎉 Success!
Once set up, every message from your portfolio will appear in your Gmail inbox with all the sender's details!

