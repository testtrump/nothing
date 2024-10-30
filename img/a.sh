cd /root/nothing/img
python a.py |grep ss:// > a.out

# 配置变量
FILE_PATH="./a.out"  # 要上传的文件路径
REPO_PATH="/root/nothing/img"  # 本地 Git 仓库路径
COMMIT_MESSAGE="Automated commit and push at $(date +"%Y-%m-%d %H:%M:%S")"

# 进入仓库目录
cd "$REPO_PATH" || exit

# 复制文件到仓库目录（如果在仓库外部）
#cp "$FILE_PATH" "$REPO_PATH"


# 添加文件到 Git
git add "$FILE_PATH"

# 提交更改
git commit -m "$COMMIT_MESSAGE"

# 推送到远程仓库
git push origin main  # 如果不是 `main` 分支，请将 `main` 修改为你的分支名称
