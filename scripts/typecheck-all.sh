#!/usr/bin/env bash
set -euo pipefail

templates=(void neon brutalist bloom editorial glass swiss ember candy)

bun run --cwd packages/tokens typecheck
bun run --cwd packages/ui typecheck
bun run --cwd apps/showcase typecheck

for template in "${templates[@]}"; do
  bun run --cwd "templates/${template}" typecheck
done
