const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 开始手动部署...');

try {
  // 1. 安装依赖
  console.log('📦 安装依赖...');
  execSync('npm install', { stdio: 'inherit' });

  // 2. 构建项目
  console.log('🔨 构建项目...');
  execSync('npm run build', { stdio: 'inherit' });

  // 3. 检查 dist 目录
  const distDir = './dist';
  if (!fs.existsSync(distDir)) {
    throw new Error('构建失败：dist 目录不存在');
  }

  // 4. 创建部署包
  console.log('📁 创建部署包...');
  const deployDir = './deploy';
  if (fs.existsSync(deployDir)) {
    fs.rmSync(deployDir, { recursive: true });
  }
  
  // 复制文件到 deploy 目录
  function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    const files = fs.readdirSync(src);
    
    for (const file of files) {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  }
  
  copyDir(distDir, deployDir);
  
  console.log('✅ 部署包已创建在 ./deploy 目录');
  console.log('📋 下一步操作：');
  console.log('1. 在 GitHub 上进入你的仓库');
  console.log('2. 点击 "Add file" → "Upload files"');
  console.log('3. 将整个 deploy 文件夹拖拽上传');
  console.log('4. 提交更改到 main 分支');
  console.log('5. 等待 GitHub Pages 自动部署');
  
} catch (error) {
  console.error('❌ 部署失败:', error.message);
  process.exit(1);
}
