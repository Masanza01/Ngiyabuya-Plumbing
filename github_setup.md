# GitHub Source Repository Setup Guide

This guide helps you push your **Ngiyabuya Plumbing** website code to GitHub so you can generate the submission URL for your source repository.

We have already initialized Git in this folder and created your first commit with all your files!

---

## 🚀 3 Quick Steps to Get Your Repository URL

### Step 1: Create a Repository on GitHub
1. Open your browser and go to [github.com](https://github.com) (sign in or create an account if you haven't).
2. Click the **`+`** icon in the top-right corner and select **New repository**.
3. Fill in the following details:
   - **Repository name:** `Ngiyabuya-Plumbing`
   - **Public/Private:** Select **Public**
   - **Initialize this repository with:** Do **NOT** select any checkboxes (no README, no .gitignore, no license). Leave them blank.
4. Click **Create repository**.

---

### Step 2: Push Your Local Code to GitHub
Copy the commands shown on your GitHub page under **"…or push an existing repository from the command line"**, or run these three commands in your terminal:

```powershell
# 1. Rename the branch to main (standard practice)
git branch -M main

# 2. Link your local project to your new GitHub repository
# (Replace <YOUR_GITHUB_USERNAME> with your actual GitHub username!)
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/Ngiyabuya-Plumbing.git

# 3. Push your code to GitHub
git push -u origin main
```

---

## 🔗 Your Source Repository URL

Once pushed, the URL for your source repository will be:
```text
https://github.com/<YOUR_GITHUB_USERNAME>/Ngiyabuya-Plumbing
```
*(Simply replace `<YOUR_GITHUB_USERNAME>` with your GitHub username, e.g., if your username is `masan`, your link is `https://github.com/masan/Ngiyabuya-Plumbing`)*

This is the exact link you can copy and paste into your submission form!
