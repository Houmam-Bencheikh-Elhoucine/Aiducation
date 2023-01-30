-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 03, 2023 at 04:17 PM
-- Server version: 5.7.40
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aiducation_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
CREATE TABLE IF NOT EXISTS `addresses` (
  `idAddress` int(11) NOT NULL AUTO_INCREMENT,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `description` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`idAddress`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
CREATE TABLE IF NOT EXISTS `announcement` (
  `idAnnouncement` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(700) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  `module` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idAnnouncement`),
  KEY `location` (`location`),
  KEY `module` (`module`),
  KEY `user` (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `idCategory` int(11) NOT NULL AUTO_INCREMENT,
  `cycle` varchar(10) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`idCategory`, `cycle`, `level`) VALUES
(1, 'Primaire', 1),
(2, 'Primaire', 2),
(3, 'Primaire', 3),
(4, 'Primaire', 4),
(5, 'Primaire', 5),
(6, 'CEM', 1),
(7, 'CEM', 2),
(8, 'CEM', 3),
(9, 'CEM', 4),
(10, 'Lycée', 1),
(11, 'Lycée', 2),
(12, 'Lycée', 3);

-- --------------------------------------------------------

--
-- Table structure for table `conserner`
--

DROP TABLE IF EXISTS `conserner`;
CREATE TABLE IF NOT EXISTS `conserner` (
  `idCategory` int(11) NOT NULL,
  `idAnnouncement` int(11) NOT NULL,
  PRIMARY KEY (`idCategory`,`idAnnouncement`),
  KEY `idAnnouncement` (`idAnnouncement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `favoriser`
--

DROP TABLE IF EXISTS `favoriser`;
CREATE TABLE IF NOT EXISTS `favoriser` (
  `idUser` int(11) NOT NULL,
  `idAnnouncement` int(11) NOT NULL,
  PRIMARY KEY (`idUser`,`idAnnouncement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `message` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `dateSent` datetime DEFAULT NULL,
  `dateResponse` datetime DEFAULT NULL,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  `announcement` int(11) NOT NULL,
  PRIMARY KEY (`sender`,`receiver`,`announcement`),
  KEY `receiver` (`receiver`),
  KEY `announcement` (`announcement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `modules`
--

DROP TABLE IF EXISTS `modules`;
CREATE TABLE IF NOT EXISTS `modules` (
  `idModule` varchar(50) NOT NULL,
  `nomModule` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idModule`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

DROP TABLE IF EXISTS `photos`;
CREATE TABLE IF NOT EXISTS `photos` (
  `idPhoto` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(500) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `announcement` int(11) DEFAULT NULL,
  PRIMARY KEY (`idPhoto`),
  UNIQUE KEY `path` (`path`),
  KEY `announcement` (`announcement`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(20) DEFAULT NULL,
  `landlineNumber` varchar(20) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `address` int(11) DEFAULT NULL,
  `profilePic` varchar(500) DEFAULT './pictures/profile/static.png',
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `profilePic` (`profilePic`),
  KEY `address` (`address`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `announcement_ibfk_1` FOREIGN KEY (`location`) REFERENCES `addresses` (`idAddress`),
  ADD CONSTRAINT `announcement_ibfk_2` FOREIGN KEY (`module`) REFERENCES `modules` (`idModule`),
  ADD CONSTRAINT `announcement_ibfk_3` FOREIGN KEY (`user`) REFERENCES `users` (`idUser`);

--
-- Constraints for table `conserner`
--
ALTER TABLE `conserner`
  ADD CONSTRAINT `conserner_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategory`),
  ADD CONSTRAINT `conserner_ibfk_2` FOREIGN KEY (`idAnnouncement`) REFERENCES `announcement` (`idAnnouncement`);

--
-- Constraints for table `favoriser`
--
ALTER TABLE `favoriser`
  ADD CONSTRAINT `favoriser_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`) ON DELETE CASCADE,
  ADD CONSTRAINT `favoriser_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `announcement` (`idAnnouncement`) ON DELETE CASCADE;

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sender`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiver`) REFERENCES `users` (`idUser`),
  ADD CONSTRAINT `messages_ibfk_3` FOREIGN KEY (`announcement`) REFERENCES `announcement` (`idAnnouncement`);

--
-- Constraints for table `photos`
--
ALTER TABLE `photos`
  ADD CONSTRAINT `photos_ibfk_1` FOREIGN KEY (`announcement`) REFERENCES `announcement` (`idAnnouncement`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`address`) REFERENCES `addresses` (`idAddress`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
