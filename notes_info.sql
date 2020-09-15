-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Sep 04, 2020 at 02:44 AM
-- Server version: 5.7.31-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `notebook_react_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes_info`
--

CREATE TABLE `notes_info` (
  `note_id` int(10) NOT NULL,
  `note_title` varchar(200) NOT NULL,
  `note_descript` varchar(1000) NOT NULL,
  `note_bgcolor` varchar(50) NOT NULL,
  `created_at` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notes_info`
--

INSERT INTO `notes_info` (`note_id`, `note_title`, `note_descript`, `note_bgcolor`, `created_at`) VALUES
(5, 'Hi', 'hello', '#BEC075', '04-09-2020 02:08'),
(6, 'this is final test', 'hi from midnight', '#fff', '04-09-2020 02:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes_info`
--
ALTER TABLE `notes_info`
  ADD PRIMARY KEY (`note_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes_info`
--
ALTER TABLE `notes_info`
  MODIFY `note_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
