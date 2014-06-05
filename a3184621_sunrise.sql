
-- phpMyAdmin SQL Dump
-- version 2.11.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 02, 2014 at 05:52 AM
-- Server version: 5.1.57
-- PHP Version: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

--
-- Database: `a3184621_sunrise`
--

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `lname` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `email` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `cno` varchar(12) COLLATE latin1_general_ci NOT NULL,
  `occupation` varchar(40) COLLATE latin1_general_ci NOT NULL,
  `address` varchar(40) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` VALUES(1, 'Bedi', 'Yadav', 'bediyadav.iips@gmail.com', '8602160349', 'developer', 'sunriseform');
INSERT INTO `registration` VALUES(2, 'Bedi', 'Yadav', 'bediyadav.iips@gmail.com', '8602160349', 'developer', 'sunriseform');
INSERT INTO `registration` VALUES(3, 'Bedi', 'Yadav', 'bediyadav.iips@gmail.com', '8602160349', 'developer', 'sunriseform');
INSERT INTO `registration` VALUES(4, 'Bedi', 'Yadav', 'bediyadav.iips@gmail.com', '8602160349', 'developer', 'sunriseform');
