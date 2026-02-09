#!/usr/bin/env bash
set -euo pipefail

templates=(void neon brutalist bloom editorial glass swiss ember candy)

bun run --cwd apps/showcase build
for template in "${templates[@]}"; do
  bun run --cwd "templates/${template}" build
done
