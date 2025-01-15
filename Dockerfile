FROM golang:1.23.4

WORKDIR /app

COPY . .

RUN go mod tidy

CMD ["go", "test", "./test/..."]