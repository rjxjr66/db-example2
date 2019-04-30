# db-example2

  

## Description

  

이건 교수님 데이터베이스 과목 팀 프로젝스 실습 예제입니다.

  

## Requirements

  

 1. docker
 2. docker-compose

  

## Running the app

  

```bash
# development

$ docker-compose up -d

# production mode

$ docker build -t db-example . && docker run -d --restart always db-example
```