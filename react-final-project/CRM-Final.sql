-- CRM Final Database
-- Database name: crm_final
-- Import this file from phpMyAdmin

CREATE DATABASE IF NOT EXISTS `crm_final`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `crm_final`;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

DROP TABLE IF EXISTS `leads`;

CREATE TABLE `leads` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `company` varchar(150) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `source` enum('Website','Email','Manual') NOT NULL DEFAULT 'Website',
  `status` enum('New','Contacted','Qualified','Won','Lost') NOT NULL DEFAULT 'New',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- No demo/test leads are included.
-- Visitor Contact Form submissions will be inserted automatically.
