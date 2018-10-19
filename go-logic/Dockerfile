FROM golang:1.11.1-alpine

RUN apk add --no-cache git mercurial \
    && mkdir -p ${GOPATH}/go-logic \
    && go get github.com/gorilla/mux \
    && go get github.com/tonytangau/sentiment \
    && apk del git mercurial

WORKDIR ${GOPATH}/go-logic/
COPY src/main.go ${GOPATH}/go-logic/
RUN go build -o go-logic .

EXPOSE 5000

FROM alpine
WORKDIR /app
COPY --from=0 /go/go-logic/go-logic .
CMD [ "/app/go-logic" ]
