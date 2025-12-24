# Deployment Guide for Namecheap Hosting (Node.js)

This guide will help you deploy your Borofuel Next.js application to Namecheap hosting as a **Node.js application**, allowing you to use API routes and full Next.js features.

## 📋 Pre-Deployment Checklist

✅ **Project Status**: Your project is ready for Node.js deployment!
- ✅ All dependencies are properly configured
- ✅ `server.js` file created for Node.js hosting
- ✅ Next.js configured for standalone output
- ✅ Static assets are in the `public` folder
- ✅ TypeScript configuration is correct
- ✅ **Ready for future API routes!**

## 🚀 Node.js Deployment (Recommended)

This deployment method gives you:
- ✅ Full Next.js features including image optimization
- ✅ Support for API routes (`app/api/` directory)
- ✅ Server-side rendering (SSR)
- ✅ Better performance with Next.js optimizations
- ✅ Ability to add backend functionality later

---

## 📦 Step-by-Step Deployment

### Step 1: Build the Application Locally

1. **Build for production:**
   ```bash
   npm run build
   ```
   
   This creates a `.next` folder with the optimized production build.

2. **Verify the build:**
   ```bash
   npm start
   ```
   
   Test locally at `http://localhost:3000` to ensure everything works.

### Step 2: Prepare Files for Upload

**Files to upload to your server:**
- ✅ `.next/` folder (build output - **REQUIRED**)
- ✅ `public/` folder (static assets - **REQUIRED**)
- ✅ `package.json` (dependencies - **REQUIRED**)
- ✅ `package-lock.json` (lock file - **REQUIRED**)
- ✅ `next.config.js` (configuration - **REQUIRED**)
- ✅ `server.js` (custom server - **REQUIRED**)
- ✅ `tsconfig.json` (TypeScript config)
- ✅ `tailwind.config.ts` (Tailwind config)
- ✅ `postcss.config.js` (PostCSS config)
- ✅ `app/` folder (your application code)
- ✅ `components/` folder (your components)

**Files to EXCLUDE:**
- ❌ `node_modules/` (install on server)
- ❌ `.next/cache/` (if present, can be regenerated)
- ❌ `.env.local` or `.env.development.local` (sensitive files)
- ❌ `.git/` folder (if present)

### Step 3: Upload to Namecheap via cPanel

1. **Log into cPanel** (usually at `yourdomain.com:2083`)

2. **Navigate to File Manager** and go to your domain's root directory:
   - Usually `/home/username/public_html/` or `/home/username/borofuel.org/`
   - Based on your setup, it looks like `/home/inteajiz/borofuel.org/`

3. **Upload all required files:**
   - Use cPanel File Manager or an FTP client (FileZilla, etc.)
   - Upload files maintaining the folder structure
   - Make sure `.next/` folder is uploaded completely (this is critical!)

### Step 4: Set Up Node.js App in cPanel

1. **Go to "Node.js Selector"** in cPanel
   - If you don't see this option, your hosting plan may not support Node.js
   - Contact Namecheap support to enable Node.js or upgrade your plan

2. **Create a new Node.js application:**
   - Click "Create Application"
   - **Node.js version**: Select the latest LTS version (18.x or 20.x recommended)
   - **Application root**: `/home/inteajiz/borofuel.org` (or your domain path)
   - **Application URL**: `borofuel.org` or `www.borofuel.org`
   - **Application startup file**: `server.js`
   - **Application mode**: `Production`
   - **Passenger log file**: Leave default or set to `logs/passenger.log`

3. **Set Environment Variables:**
   In the Node.js app settings, add these environment variables:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://borofuel.org
   PORT=3000
   HOSTNAME=localhost
   ```

4. **Install Dependencies:**
   
   **Option A: Via cPanel Terminal (if available)**
   ```bash
   cd /home/inteajiz/borofuel.org
   npm install --production
   ```
   
   **Option B: Via SSH (if you have SSH access)**
   ```bash
   ssh username@borofuel.org
   cd borofuel.org
   npm install --production
   ```
   
   **Option C: Via cPanel File Manager**
   - Some hosts allow running npm commands through the file manager
   - Or contact support to install dependencies

5. **Start/Restart the Application:**
   - In Node.js Selector, click "Restart App" or "Start App"
   - Wait for the application to start (usually 30-60 seconds)

### Step 5: Configure Domain and SSL

1. **Set up domain routing** (if needed):
   - Ensure your domain points to the correct directory
   - In cPanel, go to "Domains" → "Addon Domains" or "Subdomains"

2. **Enable SSL certificate:**
   - Go to "SSL/TLS Status" in cPanel
   - Install a free Let's Encrypt certificate for `borofuel.org`
   - Force HTTPS redirect if available

### Step 6: Test Your Deployment

1. **Visit your site:**
   - `https://borofuel.org`
   - `https://www.borofuel.org` (if configured)

2. **Test all pages:**
   - Homepage: `/`
   - About: `/about`
   - Contact: `/contact`
   - Drivers: `/drivers`
   - Privacy: `/privacy`
   - Terms: `/terms`

3. **Check the logs:**
   - In Node.js Selector, view application logs
   - Check for any errors or warnings

---

## 🔧 Environment Variables

Create a `.env.production` file on your server (or set in cPanel Node.js settings):

```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://borofuel.org
PORT=3000
HOSTNAME=localhost
```

**Important:** 
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are server-side only
- Never commit `.env.production` to git (it's in `.gitignore`)

---

## 📝 Quick Deployment Script

Create a `deploy.sh` script for easier deployment:

```bash
#!/bin/bash

echo "Building Next.js application..."
npm run build

echo "Build complete!"
echo ""
echo "Next steps:"
echo "1. Upload the following to your server:"
echo "   - .next/ folder"
echo "   - public/ folder"
echo "   - package.json"
echo "   - package-lock.json"
echo "   - next.config.js"
echo "   - server.js"
echo "   - app/ folder"
echo "   - components/ folder"
echo "   - All config files (tsconfig.json, tailwind.config.ts, etc.)"
echo ""
echo "2. SSH into your server and run:"
echo "   cd /path/to/borofuel.org"
echo "   npm install --production"
echo ""
echo "3. Set up Node.js app in cPanel with server.js as startup file"
echo "4. Set environment variables in cPanel"
echo "5. Restart the application"
```

Make it executable:
```bash
chmod +x deploy.sh
```

Run it:
```bash
./deploy.sh
```

---

## 🚀 Adding API Routes (Future)

When you're ready to add API routes, simply create them in the `app/api/` directory:

**Example: `app/api/hello/route.ts`**
```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello from API!' });
}
```

The API will be available at: `https://borofuel.org/api/hello`

No additional configuration needed! The Node.js deployment supports API routes out of the box.

---

## ✅ Post-Deployment Checklist

- [ ] Application starts without errors
- [ ] All pages load correctly
- [ ] Images display properly (with Next.js optimization)
- [ ] Navigation works
- [ ] Mobile responsiveness verified
- [ ] SSL certificate is active (HTTPS)
- [ ] Environment variables are set correctly
- [ ] Application logs show no errors
- [ ] Domain redirects work (www to non-www or vice versa)

---

## 🐛 Troubleshooting

### Issue: Application won't start
**Solutions:**
- Check Node.js version (should be 18+)
- Verify `server.js` is in the root directory
- Check application logs in cPanel
- Ensure `npm install --production` completed successfully
- Verify `.next` folder was uploaded completely

### Issue: 404 errors on routes
**Solutions:**
- Ensure `.next` folder structure is intact
- Check that `server.js` is set as the startup file
- Verify Next.js routing is working (check logs)

### Issue: Images not loading
**Solutions:**
- Check `public` folder was uploaded
- Verify image paths in code
- Check Next.js image optimization is working (should work with Node.js deployment)

### Issue: Module not found errors
**Solutions:**
- Run `npm install --production` on the server
- Check `package.json` is uploaded
- Verify `node_modules` exists (or reinstall)

### Issue: Port already in use
**Solutions:**
- Check if another app is using port 3000
- Update PORT environment variable in cPanel
- Restart the application

### Issue: Build fails locally
**Solutions:**
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version: `node --version` (should be 18+)
- Review build errors in terminal
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

---

## 📊 Monitoring and Maintenance

### Viewing Logs

1. **Application logs:**
   - In cPanel Node.js Selector → View Logs
   - Or check `logs/passenger.log` on your server

2. **Error logs:**
   - cPanel → "Errors" section
   - Or check server error logs

### Updating Your Application

1. **Make changes locally**
2. **Build:**
   ```bash
   npm run build
   ```
3. **Upload updated files** (especially `.next` folder)
4. **Restart the app** in cPanel Node.js Selector

### Performance Tips

- Enable caching in `next.config.js` if needed
- Use Next.js Image component for optimized images
- Monitor application logs for performance issues
- Consider using a CDN for static assets (optional)

---

## 🔒 Security Best Practices

1. **Never commit sensitive files:**
   - `.env.production` is in `.gitignore`
   - Keep API keys and secrets in environment variables

2. **Keep dependencies updated:**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Use HTTPS:**
   - SSL certificate should be active
   - Force HTTPS redirects

4. **Set proper file permissions:**
   - Files: 644
   - Folders: 755
   - Sensitive files: 600

---

## 📞 Need Help?

If you encounter issues:

1. **Check the build output** for errors
2. **Verify all files were uploaded correctly**
3. **Check cPanel error logs** and Node.js application logs
4. **Ensure file permissions are correct**
5. **Contact Namecheap support** if Node.js features aren't available

---

## 🎉 Success!

Once deployed, your site should be live at `https://borofuel.org` with full Next.js features, including the ability to add API routes whenever you need them!

---

## 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Namecheap Node.js Support](https://www.namecheap.com/support/knowledgebase/article.aspx/9953/38/how-to-use-nodejs-applications)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
