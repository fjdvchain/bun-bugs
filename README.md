# bun-bug

This repo is to demonstrate a bug when trying to dockerize an application written in bun. There are two issues I see and they are below

1) Bun install taking quite some time
2) Docker application isn't able to startup


## How to see bug
```sh
docker build . -t bun-bug
docker run bun-bun
```


