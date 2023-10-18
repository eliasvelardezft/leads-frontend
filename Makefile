CONTAINER_NAME = leads-frontend

.PHONY: build
build: ## build the server
	docker compose build

.PHONY: dock
dock: ## Starts the server dettached and attaches the container
	docker compose up -d && docker attach $(CONTAINER_NAME)

.PHONY: shell
shell: ## container shell
	docker exec -it $(CONTAINER_NAME) sh -c "clear; (bash || ash || sh)"
