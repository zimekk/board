# board

[zimekk.github.io/board](https://zimekk.github.io/board)

## install

```sh
nvm install v14
npm i -g yarn
```

```sh
node -v # v14.18.2
yarn -v # 1.22.19
```

## run

```sh
yarn
yarn start # ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

## docker

```sh
# docker network create app_network
docker-compose config # services:
docker-compose up --build # app_1  | ⚡️[server]: Server is running at http://localhost:8080
```

```sh
curl http://localhost:8080 # <!DOCTYPE html>
```

```sh
docker-compose up --build sql # database system is ready to accept connections
docker-compose exec sql su postgres -c "psql board"
```

```sh
docker system prune -f # Deleted Containers:
```

## backup & restore

```sh
docker-compose exec -u postgres sql psql board
docker-compose exec -u postgres sql pg_dump board | gzip -c > "backup/dump_$(date +%Y%m%d_%H%M).sql.gz"
gunzip -c tmp/dump_20230602_1811.sql.gz | docker-compose exec -T -u postgres sql psql board
```

## deploy

```sh
git fetch && git reset --hard origin
docker-compose up --build -d && docker system prune -f
```
