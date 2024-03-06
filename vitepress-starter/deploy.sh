#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

 init
git add -A
git commit -m 'deploy'

# 意思为将master构建后的代码合并到master分支上，然后在master分支上部署~
git push -f git@github.com:1wangtongxue/vitepressBokeDemo.git master:demo

cd -
