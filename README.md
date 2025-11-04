
# 极简设计作品集网站 - 使用文档

这是一个基于 React + Tailwind CSS 的极简风格个人作品集网站，适合设计师、创意工作者展示作品和分享思考。

## 📋 目录

- [功能特性](#功能特性)
- [项目结构](#项目结构)
- [快速开始](#快速开始)
- [内容自定义指南](#内容自定义指南)
- [常见修改场景](#常见修改场景)
- [技术栈](#技术栈)

---

## ✨ 功能特性

### 1. **首页 (Hero Section)**
- 个人介绍展示
- 快速导航按钮
- 响应式布局

### 2. **关于我 (About Section)**
- 个人简介
- 技能标签展示
- 个人照片/工作空间展示

### 3. **作品集 (Selected Work)**
- 项目卡片展示
- 点击查看项目详情
- 项目详情页包含：
  - 项目概述
  - 设计过程
  - 挑战与解决方案
  - 结果展示

### 4. **博客 (Blog)**
- 博客文章卡片展示
- 发布日期和阅读时间
- 点击查看完整文章
- 博客详情页包含完整内容

### 5. **联系方式 (Contact)**
- 社交媒体链接
- 邮箱联系方式
- 快捷联系按钮

### 6. **响应式设计**
- 完美支持桌面、平板、手机
- 移动端导航菜单
- 自适应图片和布局

---

## 📁 项目结构

```
├── App.tsx                          # 主应用组件
├── components/
│   ├── BlogDetail.tsx              # 博客详情页组件
│   ├── ProjectDetail.tsx           # 项目详情页组件
│   ├── figma/
│   │   └── ImageWithFallback.tsx   # 图片组件（带降级处理）
│   └── ui/                         # UI 组件库 (Shadcn)
│       ├── button.tsx
│       ├── card.tsx
│       └── ...                     # 其他 UI 组件
├── styles/
│   └── globals.css                 # 全局样式和颜色主题
└── README.md                        # 本文档
```

---

## 🚀 快速开始

### 查看网站
网站已经可以直接使用，包含示例内容。

### 开始自定义
请参考下面的 [内容自定义指南](#内容自定义指南)。

---

## 🎨 内容自定义指南

所有内容都在 `/App.tsx` 文件中定义。以下是详细的修改指南：

### 1️⃣ 修改个人信息

#### 修改姓名
在 **第 168 行** 找到：
```tsx
<h1 className="text-5xl md:text-7xl mb-6">Xingyan Mao</h1>
```
将 `Xingyan Mao` 改成你的名字。

#### 修改职位/头衔
在 **第 169-171 行** 找到：
```tsx
<h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
  Designer & Creative
</h2>
```
修改 `Designer & Creative` 为你的职位。

#### 修改个人简介
在 **第 172-175 行** 修改自我介绍文字。

#### 修改邮箱
在 **第 319 行** 和 **第 323 行** 找到：
```tsx
href="mailto:hello@alexchen.design"
```
将 `hello@alexchen.design` 改成你的邮箱。

同时在 **第 353 行** 修改页脚的版权信息：
```tsx
© 2025 Alex Chen. All rights reserved.
```

---

### 2️⃣ 修改技能标签

在 **第 51-60 行** 找到 `skills` 数组：
```tsx
const skills = [
  "UI/UX Design",
  "Adobe Creative Suite",
  "Figma",
  "Sketch",
  "Prototyping",
  "Visual Design",
  "Typography",
  "Branding"
];
```

**添加技能**：在数组中添加新字符串
**删除技能**：删除对应的行
**修改技能**：直接修改文字

---

### 3️⃣ 修改作品集项目

在 **第 20-49 行** 找到 `projects` 数组：

```tsx
const projects = [
  {
    id: 1,                          // 唯一ID，不要重复
    title: "项目标题",               // 项目名称
    category: "分类",                // 如: Design, Photography
    image: "图片URL",                // 项目封面图片
    description: "项目描述"          // 简短描述
  },
  // ... 更多项目
];
```

#### 添加新项目
复制一个项目对象，修改内容，确保 `id` 唯一：
```tsx
{
  id: 5,
  title: "新项目名称",
  category: "Design",
  image: "你的图片URL",
  description: "项目描述文字"
}
```

#### 删除项目
直接删除对应的项目对象（包括花括号和逗号）。

#### 修改项目图片
替换 `image` 字段的 URL。建议使用：
- Unsplash（免费高质量图片）
- 自己的图片服务器
- 其他图床服务

---

### 4️⃣ 修改博客文章

在 **第 62-87 行** 找到 `blogPosts` 数组：

```tsx
const blogPosts = [
  {
    id: 1,                          // 唯一ID
    title: "文章标题",               // 博客标题
    excerpt: "摘要",                 // 文章摘要
    date: "发布日期",                // 如: October 15, 2024
    image: "图片URL",                // 文章封面
    readTime: "阅读时间"             // 如: 5 min read
  },
  // ... 更多文章
];
```

#### 添加新博客
```tsx
{
  id: 4,
  title: "我的新博客文章",
  excerpt: "这是文章的简短摘要...",
  date: "November 4, 2024",
  image: "封面图片URL",
  readTime: "3 min read"
}
```

#### 修改博客详情内容
博客详情页的内容在 `/components/BlogDetail.tsx` 文件中。

打开该文件，在 **第 54 行** 开始找到文章内容部分：
```tsx
<div className="prose prose-neutral max-w-none">
  <p className="text-lg text-muted-foreground mb-8">
    {post.excerpt}
  </p>

  <h2>Introduction</h2>
  <p className="text-muted-foreground">
    文章内容...
  </p>
  
  {/* 添加更多段落和标题 */}
</div>
```

**注意**：目前所有博客共用同一个模板内容。如果需要每篇博客显示不同内容，需要：
1. 在 `blogPosts` 数组中为每篇文章添加 `content` 字段
2. 修改 `BlogDetail.tsx` 组件来动态显示内容

---

### 5️⃣ 修改关于我部分

#### 修改简介文字
在 **第 194-203 行** 修改两段个人简介。

#### 修改工作空间图片
在 **第 222-226 行** 找到：
```tsx
<ImageWithFallback
  src="图片URL"
  alt="Workspace"
  className="w-full h-full object-cover"
/>
```
替换 `src` 中的图片 URL。

---

### 6️⃣ 修改社交媒体链接

在 **第 328-342 行** 找到社交媒体按钮：

```tsx
<Button variant="outline" size="icon" asChild>
  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    <Github size={20} />
  </a>
</Button>
<Button variant="outline" size="icon" asChild>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <Linkedin size={20} />
  </a>
</Button>
```

将 URL 改成你的社交媒体链接。

---

## 💡 常见修改场景

### 场景 1: 更换配色方案

打开 `/styles/globals.css` 文件，修改颜色变量：

```css
:root {
  --background: #ffffff;        /* 背景色 */
  --foreground: oklch(0.145 0 0); /* 文字颜色 */
  --primary: #030213;           /* 主色调 */
  --muted-foreground: #717182;  /* 次要文字颜色 */
  /* ... 更多颜色 */
}
```

### 场景 2: 修改字体大小

全局字体设置在 `/styles/globals.css` 的 **第 136-185 行**。

如需修改特定元素，可以在组件中添加 Tailwind 类名，例如：
- `text-sm` - 小号文字
- `text-base` - 默认大小
- `text-lg` - 大号文字
- `text-xl` - 超大文字
- `text-2xl`, `text-3xl` 等更大尺寸

### 场景 3: 添加新的导航项

在 **第 103-109 行**（桌面导航）和 **第 122-158 行**（移动导航）添加新链接：

```tsx
<a href="#新板块" className="hover:text-muted-foreground transition-colors">
  新导航项
</a>
```

然后在页面中添加对应的 `section`：
```tsx
<section id="新板块" className="py-20 px-6 lg:px-8">
  {/* 内容 */}
</section>
```

### 场景 4: 修改项目详情页内容

打开 `/components/ProjectDetail.tsx`，修改 **第 42 行** 开始的内容：

```tsx
<div className="prose prose-neutral max-w-none mb-12">
  <h2>Project Overview</h2>
  <p className="text-muted-foreground">
    修改这里的内容...
  </p>
  {/* 添加更多段落 */}
</div>
```

### 场景 5: 调整布局间距

修改各个 `section` 的 `className` 中的 `py-20`（上下内边距）和 `px-6`（左右内边距）：
- `py-10` - 较小间距
- `py-20` - 默认间距
- `py-32` - 较大间距

---

## 🛠 技术栈

- **React** - 前端框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Shadcn UI** - UI 组件库
- **Lucide React** - 图标库

---

## 📝 组件说明

### ImageWithFallback
位置：`/components/figma/ImageWithFallback.tsx`

带降级处理的图片组件，使用方法：
```tsx
<ImageWithFallback
  src="图片URL"
  alt="描述文字"
  className="样式类名"
/>
```

### ProjectDetail
位置：`/components/ProjectDetail.tsx`

项目详情页组件，自动显示：
- 返回按钮
- 项目标题和分类
- 项目详细信息
- 项目图片

### BlogDetail
位置：`/components/BlogDetail.tsx`

博客详情页组件，自动显示：
- 返回按钮
- 文章标题
- 发布日期和阅读时间
- 文章内容

---

## 🎯 最佳实践

### 图片建议
- **尺寸**：项目封面建议 1200x800px 或更大
- **格式**：JPEG/PNG/WebP
- **来源**：
  - [Unsplash](https://unsplash.com) - 免费高质量图片
  - [Pexels](https://pexels.com) - 免费图片和视频
  - 自己拍摄/设计的作品

### 内容建议
- **项目描述**：保持简洁，50-100字为宜
- **博客摘要**：吸引人的概述，80-120字
- **技能标签**：不要太多，8-12个最佳
- **项目数量**：4-8个核心项目

### 性能优化
- 使用压缩过的图片
- 图片尺寸不要超过 2MB
- 定期清理不用的项目和博客

---

## ❓ 常见问题

**Q: 如何添加更多页面？**
A: 可以创建新的组件文件，然后在 App.tsx 中引入和路由。

**Q: 可以添加动画效果吗？**
A: 可以，可以使用 Motion (Framer Motion) 库添加动画。

**Q: 如何部署网站？**
A: 可以部署到 Vercel、Netlify、GitHub Pages 等平台。

**Q: 图片加载失败怎么办？**
A: ImageWithFallback 组件会自动显示占位符，确保 URL 正确即可。

---

## 📞 获取帮助

如需修改但不确定如何操作，可以：
1. 明确说明想要修改的内容
2. 提供具体的文字、图片或链接
3. 说明想要实现的效果

例如：
- "把邮箱改成 contact@example.com"
- "在技能里加上 Python"
- "把第一个项目的标题改成'移动应用设计'"

---

## 📄 许可证

本项目供个人学习和使用。使用的图片来自 Unsplash，遵循 Unsplash License。

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  