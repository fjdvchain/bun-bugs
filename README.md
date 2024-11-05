# bun-bug

This repo is to demonstrate a bug when trying to dockerize an application written in bun. There are two issues I see and they are below

1) Bun install taking quite some time (installs when building docker images taking 5 minutes)
2) Docker application isn't able to startup (migrate command fails in image)


## How to see bug
```sh
docker build . -t bun-bug
docker run bun-bun
```


