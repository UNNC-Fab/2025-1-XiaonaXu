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
          { text: 'Week 1: Project management', link: '/assignments/week1/' },
          { text: 'Week 2: embedded programming', link: '/assignments/week2/' },
          { text: 'Week 3: electronics design', link: '/assignments/week3/' },
          { text: 'Week 4: electronics production', link: '/assignments/week4/' },
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