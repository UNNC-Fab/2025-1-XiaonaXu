---
title: Week 1 - Building a Project Management Website with VitePress

---

# Week 1

I used AI to help me generate the following content, this is the prompt for it:

```give me a script of a .mts/.md file, it should be a page about a tutorial building a website using vitepress for project management. it should include several contents: the title should be "week 1", several sections including introduction and steps. and this vitepress site is made via github
```

## Introduction

Welcome to Week 1 of our tutorial series on building a project management website! In this tutorial, we'll use **VitePress**, a lightweight and fast static site generator powered by Vue.js and Vite, to create a simple yet functional site for managing projects. We'll set up the site locally, customize it, and deploy it using **GitHub Pages** for free hosting. This is perfect for beginners or anyone looking to create a sleek documentation-style site for project tracking.

By the end of this week, you'll have a working VitePress site hosted on GitHub, ready to be expanded in future weeks with features like task lists, timelines, and more. Let’s dive into the steps!

## Prerequisites

Before we begin, ensure you have the following installed:
- **Node.js** (v16 or higher) - Download from [nodejs.org](https://nodejs.org/).
- **Git** - For version control and GitHub integration.
- A **GitHub account** - Sign up at [github.com](https://github.com/) if you don’t have one.

## Step 1: Setting Up the Project

1. **Open your terminal** and create a new directory for your project:
   ```bash
   mkdir project-management-site
   cd project-management-site
   ```
   
2. **Initialize a Node.js project:** 
   ```bash
   npm init -y
   ```

3. **Install VitePress:**
   ```bash
   npm install --save-dev vitepress
   ```

4. **Set up VitePress: Run the initialization command and follow the prompts**
   ```bash
   npx vitepress init
   ```   
  This will create a `docs` directory with a sample `index.md` file.
5. **Start the development server:**
   ```bash
   npm run docs:dev
   ```
   

## Step 2: Customizing the Site
change the menu and add a side bar to your site by editing the `content.mts` file. Here's an example:
  ```markdown
  import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/2025-1-XiaonaXu/', // 添加斜杠以符合标准URL格式
  title: "FAB-2025-1-XiaonaXu",
  description: "FAB-2025-1-XiaonaXu",
  
  themeConfig: {
    // 合并并优化导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Assignments', link: '/assignments/week1/' },
      { text: 'Projects', link: '/projects/midterm' }
    ],

    // 修正侧边栏语法并优化结构
    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Home page', link: '/' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'About me', link: '/about/' },
          { text: 'Student agreement', link: '/about/agreement' }
        ]
      },
      {
        text: 'Course',
        items: [
          { text: 'Week 1: Project management', link: '/assignments/1PM/week1.md' },
          { text: 'Week 2: embedded programming', link: '/assignments/2EP/week2.md' },
          { text: 'Week 3: electronics design', link: '/assignments/week3' },
          { text: 'Week 4: electronics production', link: '/assignments/week4' },
          { text: 'Week 5: Input/Output device', link: '/assignments/week5/' },
          { text: 'Week 6: CAD', link: '/assignments/week6/' },
          { text: 'Week 7: 3D scanning and printing', link: '/assignments/week7/' },
          { text: 'Week 8: 	mid presentation & computer-controlled machining', link: '/assignments/week8/' },
          { text: 'Week 9: Molding and casting', link: '/assignments/week9/' },
          { text: 'Week 10: interface and application programming', link: '/assignments/week10/' },
          { text: 'Week 11: AI&BP', link: '/assignments/week11/' },
          { text: 'Week 12: networking and communications', link: '/assignments/week12/' },
          { text: 'Week 13: vehicle case- parameter design', link: '/assignments/week13/' },
          { text: 'Week 14: computer control cutting', link: '/assignments/week14/' },
          { text: 'Week 15: vehicle case- function test', link: '/assignments/week15/' },
          { text: 'Week 16: vehicle debug', link: '/assignments/week16/' },
          { text: 'Week 17: vehicle debug', link: '/assignments/week17/' },
          { text: 'Week 18: final project test', link: '/assignments/week18/' },
          { text: 'Final project and vehicle case presentation', link: '/assignments/week19/' }
        ]
      },
      {
        text: 'Projects',
        items: [
          { text: 'Mid-term project', link: '/projects/midterm' },
          { text: 'Final project', link: '/projects/final' }
        ]
      }
    ],

    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // 修改为你自己的GitHub链接
    ]
  }
})
  ```
## Step 3: Deploying to GitHub Pages
**1.intialize a new repository on GitHub and push your project to it:**
```bash
git init
git add .
git commit -m "Initial commit"
```
**2.Create a GitHub repository:**
Go to GitHub, click "New Repository," name it (e.g., project-management-site), and create it.

**3.Link your local repository to the remote GitHub repository:**
```bash
git remote add origin https://github.com/your-username/project-management-site.git
```
**4.Push your changes to the remote repository:**
```bash
git push -u origin main
```
**5.Enable GitHub Pages for your repository:**
In your repository on GitHub, navigate to the "Settings" tab and scroll down to the "GitHub Pages" section. Select "Master branch" and click "Save."

## Conclusion: known issues and solutiions:

# Next week:

In the next week you'll learn using arduino for embedded programing and design. Stay tuned





