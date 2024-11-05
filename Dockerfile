# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1.1.34-debian as base
WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y bash python3 cmake g++

COPY package.json bun.lockb /
RUN bun --version
RUN bun install --frozen-lockfile

COPY . .

ENV NODE_ENV=production

# run the app
ENTRYPOINT [ "./script.sh" ]