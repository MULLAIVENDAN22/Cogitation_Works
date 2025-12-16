-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2024 at 09:33 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event_booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_tb`
--

CREATE TABLE `admin_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` int(11) DEFAULT NULL,
  `a_password` varchar(20) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_tb`
--

INSERT INTO `admin_tb` (`id`, `name`, `dob`, `address`, `email`, `phone`, `a_password`, `created_date`) VALUES
(1, 'Elango', '2003-12-22', 'Ambur', 'elango@gmail.com', 2147483647, 'Elango', '2024-09-28 15:57:00');

-- --------------------------------------------------------

--
-- Table structure for table `booking_tb`
--

CREATE TABLE `booking_tb` (
  `id` int(11) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `event_address` varchar(255) NOT NULL,
  `event_amount` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `status` varchar(15) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking_tb`
--

INSERT INTO `booking_tb` (`id`, `start_date`, `end_date`, `event_address`, `event_amount`, `user_id`, `item_id`, `status`, `created_date`) VALUES
(1, '2024-10-12 00:00:00', '2024-10-13 00:00:00', '38/25 3rd senguther street Kaspa A Ambur.', 8000, 1, 14, 'confirm', '2024-10-04 17:15:06'),
(2, '2024-10-30 05:30:00', '2024-10-31 05:30:00', 'Ambur', 5000, 1, 16, 'reject', '2024-10-21 17:22:41'),
(3, '2024-10-29 05:30:00', '2024-11-01 05:30:00', 'vaniyambadi', 9000, 1, 20, 'cancel', '2024-10-21 17:27:41'),
(4, '2024-11-07 05:30:00', '2024-11-09 05:30:00', 'SNS street ,Vellore', 10000, 3, 18, 'pending', '2024-10-30 03:55:30'),
(5, '2024-11-18 05:30:00', '2024-11-20 05:30:00', '#08 parrai street,sedhuvalai village,vellore district-632104', 10000, 1, 18, 'pending', '2024-11-05 07:43:57'),
(6, '2024-11-27 05:30:00', '2024-11-28 05:30:00', 'VMR Mahal,Byepass Road Krishnapuram Ambur.', 9000, 4, 15, 'pending', '2024-11-05 08:08:54');

-- --------------------------------------------------------

--
-- Table structure for table `item_tb`
--

CREATE TABLE `item_tb` (
  `id` int(11) NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_description` text DEFAULT NULL,
  `item_image` text DEFAULT NULL,
  `item_amount` decimal(10,2) NOT NULL,
  `merchant_id` int(11) NOT NULL,
  `created_date` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item_tb`
--

INSERT INTO `item_tb` (`id`, `item_name`, `item_description`, `item_image`, `item_amount`, `merchant_id`, `created_date`) VALUES
(14, 'Stage Decoration', 'wedding,birthday and other events', '1727712095853.jpg', 8000.00, 1, '2024-09-30 21:31:35'),
(15, 'Wedding stage Decoration ', 'stage decoration ', '1727712503757.jpg', 9000.00, 1, '2024-09-30 21:38:23'),
(16, 'Stage Decoration', 'Birthday Stage Decoration', '1727712588568.jpg', 5000.00, 1, '2024-09-30 21:39:48'),
(17, 'baby shower decoration', 'background decoration', '1727712781896.jpg', 4000.00, 1, '2024-09-30 21:43:01'),
(18, 'speaker box and micset', 'all kind of the event', '1727713885293.jpg', 5000.00, 1, '2024-09-30 22:01:25'),
(19, 'speaker box and micset', 'small event', '1727713921940.jpg', 2000.00, 1, '2024-09-30 22:02:01'),
(20, 'speaker box and micset', 'small event', '1727713955966.jpg', 3000.00, 1, '2024-09-30 22:02:35'),
(21, 'serial set', 'to decreate the home,wedding hall,outside home etc.', '1730266287760.jpg', 3500.00, 1, '2024-10-30 11:01:27'),
(22, 'serial Decoratin', 'All event To use the Design', '1730266971554.jpg', 3000.00, 1, '2024-10-30 11:12:51'),
(23, 'Marriage Drams', 'The nadaswaram and Drams is a double reed wind instrument from South India.It is used as a traditional classical instrument in Tamil Nadu', '1730269823685.jpg', 6500.00, 4, '2024-10-30 12:00:23');

-- --------------------------------------------------------

--
-- Table structure for table `merchant_tb`
--

CREATE TABLE `merchant_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `m_password` varchar(255) NOT NULL,
  `original_id` text DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `merchant_tb`
--

INSERT INTO `merchant_tb` (`id`, `name`, `dob`, `address`, `email`, `phone`, `m_password`, `original_id`, `created_date`) VALUES
(1, 'Aswin', '2024-09-03', 'vellore', 'aswin@gmail.com', '8925671412', 'Aswin', 'design-02.jpg', '2024-09-25 18:59:02'),
(3, 'dominic', '2024-09-04', 't.malai from hosur', 'dominic@2002', '123456', '123', 'about-left-image.jpg', '2024-09-25 19:10:59'),
(4, 'Felix', '2024-09-28', 'Hosur ', 'felix@gmail.com', '9789676317', '123', 'about-left-image.jpg', '2024-09-26 17:01:25'),
(5, 'Lokesh', '2024-09-03', 'banglore', 'lokesh@gmail.com', '987654548', 'Lokesh', 'amenities.jpg', '2024-09-26 19:02:28'),
(6, 'PUVI S', '2003-12-25', '#22 NewStreet,Mukkakolai Ambur.', 'puvi@gmail.com', '5648566587', 'Puvi', 'bc730a1416922a1f9dd0264f88c67aa0', '2024-10-30 06:09:48'),
(7, 'SANJAY UV', '2002-03-31', 'Thandavanpalam,Krishnagiri', 'sanjay@gmail.com', '8732665745', 'Sanjay', 'ffa812590ad388a79ec8f11eb90c9a2b', '2024-10-30 06:24:50'),
(8, 'Arun B', '2002-03-05', '# Kalaivaani Street Latteri-632202', 'arun.b@gmail.com', '7832897853', 'Arun@2002', 'be8e09790e891c95ea9d6aad94b1b0ec', '2024-11-05 08:25:01');

-- --------------------------------------------------------

--
-- Table structure for table `user_tb`
--

CREATE TABLE `user_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dob` date DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `u_password` varchar(255) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_tb`
--

INSERT INTO `user_tb` (`id`, `name`, `dob`, `address`, `email`, `phone`, `u_password`, `created_date`) VALUES
(1, 'ELANGO S', '2003-12-22', 'Ambur', 'elango@gmail.com', '9360889434', 'Elango', '2024-09-24 16:26:17'),
(2, 'dominic', '2024-01-03', 't.malai', 'felix@2002', '7835298295', '12345', '2024-09-24 17:57:22'),
(3, 'Arun', '2016-07-06', 'Selam', 'arun@gmail.com', '5648566587', 'Arun', '2024-10-02 03:43:04'),
(4, 'PUVI S', '2003-12-25', '#2, New Street,Mukkakolai,Ambur.', 'puvi@gmail.com', '9361367750', 'Puvi', '2024-11-05 08:07:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_tb`
--
ALTER TABLE `admin_tb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `booking_tb`
--
ALTER TABLE `booking_tb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `item_tb`
--
ALTER TABLE `item_tb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `merchant_tb`
--
ALTER TABLE `merchant_tb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_tb`
--
ALTER TABLE `user_tb`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_tb`
--
ALTER TABLE `admin_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `booking_tb`
--
ALTER TABLE `booking_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `item_tb`
--
ALTER TABLE `item_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `merchant_tb`
--
ALTER TABLE `merchant_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `user_tb`
--
ALTER TABLE `user_tb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `booking_tb`
--
ALTER TABLE `booking_tb`
  ADD CONSTRAINT `booking_tb_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user_tb` (`id`),
  ADD CONSTRAINT `booking_tb_ibfk_2` FOREIGN KEY (`item_id`) REFERENCES `item_tb` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
