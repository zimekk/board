up:
	git fetch origin main && git reset --hard origin
	docker-compose -f docker-compose.yml up --build -d && docker system prune

restart:
	docker-compose -f docker-compose.yml restart

logs:
	docker-compose logs -f --tail=25 app

exec:
	docker-compose exec app sh
