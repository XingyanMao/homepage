const fs = require('fs');
const path = require('path');

// 复制构建文件到部署目录
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
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

// 创建部署包
function createDeployPackage() {
  const buildDir = './dist';
  const deployDir = './deploy';
  
  // 复制构建文件
  copyDir(buildDir, deployDir);
  
  console.log('部署包已创建在 ./deploy 目录');
  console.log('请手动将这些文件上传到 GitHub Pages');
}

createDeployPackage();