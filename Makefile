#-------------------------------------------------------------------------------------------------------------------------
# Command line
#-------------------------------------------------------------------------------------------------------------------------

install:
	@echo "Starting install"
	@${compose} up --build -d
	@echo "Let's go ! http://localhost:3001"
.PHONY: install

start:
	@echo "Starting project"
	@${compose} up -d
	@echo "Let's go ! http://localhost:3001"
.PHONY: start

stop:
	@echo "Stopping project"
	@${compose} stop
	@echo "Come back soon if you want to make progress !"
.PHONY: stop

bash:
	@${exec}
.PHONY: bash

#-------------------------------------------------------------------------------------------------------------------------
# Variables
#-------------------------------------------------------------------------------------------------------------------------

compose = docker compose -f compose.yml
exec = docker exec -it node_gligue_front sh

