#!/bin/bash

echo "🔧 Initializing submodules..."

# Submodule이 초기화되어 있는지 확인
if [ ! -f "data/problems_ko.json" ]; then
  echo "📦 Data submodule not found. Initializing..."

  # Git submodule 초기화 및 업데이트
  if [ -n "$GITHUB_ACCESS_TOKEN" ]; then
    # GitHub Access Token이 있는 경우 (private repo)
    echo "🔐 Using GitHub Access Token..."
    git config --global url."https://${GITHUB_ACCESS_TOKEN}@github.com/".insteadOf "https://github.com/"
  fi

  # Submodule 초기화
  git submodule init
  git submodule update --init --recursive

  echo "✅ Submodule initialized successfully!"
else
  echo "✅ Data submodule already exists. Skipping initialization."
fi

# 파일 확인
if [ -f "data/problems_ko.json" ]; then
  echo "✅ Verified: problems_ko.json exists"
  echo "✅ Verified: problems_en.json exists"
else
  echo "❌ Error: Data files not found!"
  exit 1
fi
