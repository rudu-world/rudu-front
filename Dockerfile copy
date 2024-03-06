# Step 1 : node 18.18.2 버전 이미지 사용해서 빌드
FROM node:18.18.2-alpine3.17 AS build

# 도커 컨테이너의 워킹 디렉토리 설정
WORKDIR /app

# 로컬의 package.json, package.lock.json 컨테이너의 /app 폴더로 복사
COPY package*.json ./

# 컨테이너의 /app 폴더에서 패키지 설치
RUN yarn

# 로컬파일을 컨테이너의 /app 폴더로 이동
COPY . .

# 빌드
RUN yarn build

# Step 2 : Ngix 설정
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

