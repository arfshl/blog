for i in $(seq -w 1 100); do
  slug="test-article-$i"

  cat > "docs/$slug.md" <<EOF
---
title: Test Article $i
description: This is dummy article number $i.
date: 2026-09-15
category: tech
tags: 
  - test
slug: $slug
---

# Test Article $i

This is dummy article number $i.

This is some dummy content for testing the blog layout and article rendering.
EOF

done
