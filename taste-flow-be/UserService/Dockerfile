FROM openjdk:21-jdk-slim
WORKDIR /app

COPY . .

RUN chmod +x ./mvnw
RUN ./mvnw clean package -DskipTests

EXPOSE 8082
CMD ["java", "-jar", "target/UserService-0.0.1-SNAPSHOT.jar"]