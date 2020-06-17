GO := go

all:
	cd src/go && $(GO) build -o ../../dist/hw

clean:
	rm -rf dist/*
