PROJECT_NAME=no-traffic
# try to import env from .makefile.env
ifneq (,$(wildcard makefile.env))
	include makefile.env
	export $(shell sed 's/=.*//' makefile.env)
endif

help: 
	@echo "build 					: build all services and install all dependencies"
	@echo "run 						: run   all services"
	@echo "back-run					: run   only backend services"
	@echo "front-run				: run   only frontend services"
	@echo "stop             		: stop  all app containers"
	@echo ""
	@echo "sh s=<service name>  	: go to inside the service" 
	@echo "log s=<service name> 	: show logs from the service"
	@echo ""
	@echo "back-lint            	: run backend linter"
	@echo "back-test            	: run backend tests"
	@echo "front-lint           	: run frontend linter"
	@echo "front-test           	: run frontend tests"
	@echo "e2e-run              	: run e2e tests in headless mode"
	@echo "e2e-open             	: open e2e tests in browser (works only on local)"
	@echo ""
	@echo "test_data_dump			: create DB dump to fixtures"
	@echo "test_data_reset			: reset test data from fixtures"

build:
	export DOCKER_BUILDKIT=1 && \
	docker compose -p $(PROJECT_NAME) build
run:	
	docker compose -p $(PROJECT_NAME) up
stop:
	docker compose -p $(PROJECT_NAME) down	
sh:
	docker compose -p $(PROJECT_NAME) exec $(s) sh	
log:
	docker compose -p $(PROJECT_NAME) logs $(s)	

test_data_dump:
	docker compose -p $(PROJECT_NAME) run back sh test_data_dump.sh
test_data_reset:
	docker compose -p $(PROJECT_NAME) run back sh test_data_reset.sh

back-lint:
	docker run -v ${PWD}/back:/app ${PROJECT_NAME}-back pylint main apps
back-test:
	docker run -v ${PWD}/back:/app ${PROJECT_NAME}-back sh -c "pytest --cov-report=term:skip-covered -n auto"
front-lint:
	docker run -v ${PWD}/front:/app ${PROJECT_NAME}-front yarn lint 
front-test:
	docker run -v ${PWD}/front:/app ${PROJECT_NAME}-front yarn test
