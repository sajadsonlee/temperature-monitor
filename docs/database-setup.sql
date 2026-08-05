CREATE DATABASE IF NOT EXISTS temperature_monitor
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

CREATE USER IF NOT EXISTS 'temperature_app'@'localhost'
  IDENTIFIED BY 'qwhkzx';

GRANT ALL PRIVILEGES ON temperature_monitor.*
  TO 'temperature_app'@'localhost';

FLUSH PRIVILEGES;