# learn-docker-node-app

How to Dockerizing a Node.js Web App

### Recap and Cheat sheet

Build and run your app with Compose
```
docker-compose up
```

Rebuild and run your app
```
docker-compose up --build
```

Stop services
```
docker-compose stop
```

Stop and remove containers, networks, images, and volumes
```
docker-compose down

# with images
docker-compose down --rmi local
```

To deploy with this production Compose file you can run
```
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

### TODO

- [x] environment variable
- [x] nodemon
- [ ] mysql

## References

- [Docker Compose](https://docs.docker.com/compose/)
- [Environment file](https://docs.docker.com/compose/env-file/)
- [Environment variables in Compose](https://docs.docker.com/compose/environment-variables/)
- [Multiple Compose files](https://docs.docker.com/compose/extends/#multiple-compose-files)
