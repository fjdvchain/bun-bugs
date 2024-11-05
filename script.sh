#!/bin/sh
bun drizzle:migrate && \
  bun run start