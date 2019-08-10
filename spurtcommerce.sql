-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 17, 2019 at 05:06 PM
-- Server version: 5.7.26-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spurtcommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `access_token`
--

CREATE TABLE `access_token` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` varchar(255) DEFAULT NULL,
  `modified_by` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `address_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `first_name` varchar(32) DEFAULT NULL,
  `last_name` varchar(32) DEFAULT NULL,
  `company` varchar(32) DEFAULT NULL,
  `password` varchar(512) DEFAULT NULL,
  `address_1` varchar(128) DEFAULT NULL,
  `address_2` varchar(128) DEFAULT NULL,
  `postcode` varchar(10) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `address_type` int(11) DEFAULT NULL,
  `email_id` varchar(255) DEFAULT NULL,
  `phone_no` bigint(20) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `banner_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sort_order` varchar(255) DEFAULT NULL,
  `url` tinytext,
  `banner_group_id` int(11) DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `view_page_count` int(11) DEFAULT '0',
  `banner_group_banner_group_id` int(11) NOT NULL,
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `content` text,
  `position` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`banner_id`, `title`, `sort_order`, `url`, `banner_group_id`, `container_name`, `view_page_count`, `banner_group_banner_group_id`, `link`, `image`, `image_path`, `content`, `position`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(48, 'festival offer 2019', NULL, NULL, NULL, NULL, 0, 0, 'www.piccocart.com', 'Img_1551871702778.jpeg', 'banner/', '', 5, NULL, '2019-02-18 03:20:11', '2019-05-09 04:20:39', NULL, NULL),
(49, 'THE T-SHIRT FEST', NULL, NULL, NULL, NULL, 0, 0, 'www.tshirt.com', 'Img_1551871715853.jpeg', 'banner/', '', 3, NULL, '2019-02-18 03:20:50', '2019-05-09 04:20:52', NULL, NULL),
(50, 'March - CARNIVAL', NULL, NULL, NULL, NULL, 0, 0, 'www.content.com', 'Img_1551872953437.jpeg', 'banner/', '', 8, NULL, '2019-02-18 04:12:32', '2019-05-09 05:53:53', NULL, NULL),
(55, 'Prime Exclusives', NULL, NULL, NULL, NULL, 0, 0, 'www.bannerlink.com', 'Img_1557576219467.jpeg', 'banner/', '', 2, NULL, '2019-02-25 06:43:49', '2019-05-09 04:20:07', NULL, NULL),
(68, 'SAMSUNG', NULL, NULL, NULL, NULL, 0, 0, 'www.samsung.com', 'Img_1553263062033.jpeg', 'banner/', '', 6, NULL, '2019-05-09 04:26:47', NULL, NULL, NULL),
(69, 'Mobile Offers', NULL, NULL, NULL, NULL, 0, 0, 'www.moboffers.com', 'Img_1551871752833.jpeg', 'banner/', '', 7, NULL, '2019-05-09 05:52:57', NULL, NULL, NULL),
(70, 'IPhone X new model', NULL, NULL, NULL, NULL, 0, 0, 'www.iphone.com', 'Img_1551871740879.jpeg', 'banner/', '', 1, NULL, '2019-05-09 05:53:40', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `banner_group`
--

CREATE TABLE `banner_group` (
  `banner_group_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `banner_image`
--

CREATE TABLE `banner_image` (
  `banner_image_id` int(11) NOT NULL,
  `banner_id` varchar(32) NOT NULL,
  `link` varchar(255) NOT NULL,
  `image` varchar(45) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `banner_image_description`
--

CREATE TABLE `banner_image_description` (
  `banner_image_description_id` int(11) NOT NULL,
  `banner_image_id` int(11) DEFAULT NULL,
  `banner_id` int(11) DEFAULT NULL,
  `title` varchar(4) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `parent_int` int(11) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `is_active` varchar(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`, `image`, `image_path`, `parent_int`, `sort_order`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keyword`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 'MENS FASHION', 'image', NULL, 0, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:00:49', '2019-05-10 02:01:06'),
(3, 'BABY & KIDS', 'image', NULL, 0, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:02:04', '2019-05-10 02:02:40'),
(4, 'ELECTRONICS', 'image', NULL, 0, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:02:53', NULL),
(5, 'HOME & FURNITURE', 'image', NULL, 0, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:03:37', NULL),
(6, 'SPORTS, BOOK AND MORE', 'image', NULL, 0, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:04:13', NULL),
(7, 'Foot Wear', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:05:37', NULL),
(8, 'Mens Grooming', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:05:55', NULL),
(9, 'Top Wear', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:06:10', NULL),
(11, 'Watches', 'image', NULL, 1, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:07:03', NULL),
(13, 'Mobiles', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:09:21', NULL),
(14, 'Laptops', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:10:17', NULL),
(15, 'Desktop PCs', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:11:40', NULL),
(16, 'Camera', 'image', NULL, 4, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:11:56', NULL),
(17, 'Toys', 'image', NULL, 3, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:12:48', NULL),
(18, 'Boy\'s clothing', 'image', NULL, 3, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:13:49', NULL),
(19, 'Girls Clothing ', 'image', NULL, 3, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:14:20', NULL),
(21, 'Kitchen & Cookware', 'image', NULL, 5, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:15:33', NULL),
(22, 'Furniture', 'image', NULL, 5, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:15:53', NULL),
(23, 'Home Decor', 'image', NULL, 5, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:16:18', NULL),
(24, 'Books', 'image', NULL, 6, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:16:58', NULL),
(25, 'Sports', 'image', NULL, 6, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:17:18', NULL),
(27, 'Heath & Nutritions', 'image', NULL, 6, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:18:14', NULL),
(33, 'Samsung', 'image', NULL, 13, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:21:46', NULL),
(34, 'Sony', 'image', NULL, 13, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:22:42', NULL),
(35, 'I Phone', 'image', NULL, 13, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:23:12', NULL),
(36, 'Vivo', 'image', NULL, 13, 3, '', '', '', NULL, NULL, NULL, '2019-05-10 02:24:05', '2019-05-10 05:03:40'),
(37, 'Lenovo', 'image', NULL, 14, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:27:58', NULL),
(38, 'Hp', 'image', NULL, 14, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:28:22', NULL),
(39, 'Dell', 'image', NULL, 14, 3, '', '', '', NULL, NULL, NULL, '2019-05-10 02:28:40', NULL),
(40, 'Apple Mac', 'image', NULL, 14, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:29:13', NULL),
(41, 'Samsung', 'image', NULL, 15, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:30:02', NULL),
(42, 'Sony', 'image', NULL, 15, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:30:21', NULL),
(43, 'Dell', 'image', NULL, 15, 3, '', '', '', NULL, NULL, NULL, '2019-05-10 02:31:31', NULL),
(44, 'DSLR & Mirrorless', 'image', NULL, 16, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:32:10', NULL),
(45, 'Compact & Bridge Camera', 'image', NULL, 16, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:32:58', '2019-05-10 03:59:01'),
(47, 'Sports & Action ', 'image', NULL, 16, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:33:41', NULL),
(48, 'Remote Control Toys', 'image', NULL, 17, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:35:13', NULL),
(49, 'Educational Toys', 'image', NULL, 17, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:35:33', NULL),
(50, 'Musical Toys', 'image', NULL, 17, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:35:57', NULL),
(51, 'Polos & T-shirts', 'image', NULL, 18, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:36:31', NULL),
(52, 'Ethnic Wears', 'image', NULL, 18, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:36:52', NULL),
(53, 'Dresses & skirts', 'image', NULL, 19, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:37:28', NULL),
(54, 'T-shits & Tops', 'image', NULL, 19, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:38:04', NULL),
(58, 'Sports Shoes', 'image', NULL, 7, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:40:50', NULL),
(59, 'Sneakers', 'image', NULL, 7, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:41:17', NULL),
(60, 'Casual Shoes', 'image', NULL, 7, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:41:42', NULL),
(61, 'Deodorants', 'image', NULL, 8, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:42:10', NULL),
(62, 'Perfume', 'image', NULL, 8, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:42:32', NULL),
(63, 'Beard Care & shaving', 'image', NULL, 8, 3, '', '', '', NULL, NULL, NULL, '2019-05-10 02:43:13', NULL),
(64, 'T-shit', 'image', NULL, 9, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:43:32', NULL),
(65, 'Shits', 'image', NULL, 9, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:43:46', NULL),
(68, 'Fastrack', 'image', NULL, 11, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:44:54', NULL),
(69, 'Casio', 'image', NULL, 11, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:45:13', NULL),
(70, 'Titan', 'image', NULL, 11, 4, '', '', '', NULL, NULL, NULL, '2019-05-10 02:45:28', NULL),
(73, 'Gas Stove', 'image', NULL, 21, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:47:15', NULL),
(74, 'Tawas', 'image', NULL, 21, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:47:42', NULL),
(75, 'Plate sets', 'image', NULL, 21, 3, '', '', '', NULL, NULL, NULL, '2019-05-10 02:48:03', NULL),
(76, 'Sofas', 'image', NULL, 22, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:48:23', NULL),
(77, 'Chairs', 'image', NULL, 22, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:48:51', NULL),
(78, 'Dining Tables & Sets', 'image', NULL, 22, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:49:41', NULL),
(79, 'Paintings', 'image', NULL, 23, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:50:03', NULL),
(80, 'Clocks', 'image', NULL, 23, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:50:22', NULL),
(81, 'Bulbs & Wall Lamps', 'image', NULL, 23, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:50:57', NULL),
(82, 'Academic', 'image', NULL, 24, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:51:56', NULL),
(83, 'Childrens', 'image', NULL, 24, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:52:19', NULL),
(84, 'Self help', 'image', NULL, 24, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:52:47', NULL),
(85, 'Cricket', 'image', NULL, 25, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:53:26', NULL),
(86, 'Football', 'image', NULL, 25, 2, '', '', '', NULL, NULL, NULL, '2019-05-10 02:53:54', NULL),
(89, 'Health & Energy Drinks', 'image', NULL, 27, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:55:35', NULL),
(90, 'Protein Supplements', 'image', NULL, 27, 1, '', '', '', NULL, NULL, NULL, '2019-05-10 02:56:09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `category_description`
--

CREATE TABLE `category_description` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `meta_description` varchar(65) DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `category_description_id` int(11) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `category_path`
--

CREATE TABLE `category_path` (
  `category_path_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `path_id` int(11) DEFAULT NULL,
  `level` int(11) NOT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_path`
--

INSERT INTO `category_path` (`category_path_id`, `category_id`, `path_id`, `level`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(2, 1, 1, 0, NULL, NULL, NULL, NULL),
(5, 3, 3, 0, NULL, NULL, NULL, NULL),
(6, 4, 4, 0, NULL, NULL, NULL, NULL),
(7, 5, 5, 0, NULL, NULL, NULL, NULL),
(8, 6, 6, 0, NULL, NULL, NULL, NULL),
(9, 7, 1, 0, NULL, NULL, NULL, NULL),
(10, 7, 7, 1, NULL, NULL, NULL, NULL),
(11, 8, 1, 0, NULL, NULL, NULL, NULL),
(12, 8, 8, 1, NULL, NULL, NULL, NULL),
(13, 9, 1, 0, NULL, NULL, NULL, NULL),
(14, 9, 9, 1, NULL, NULL, NULL, NULL),
(17, 11, 1, 0, NULL, NULL, NULL, NULL),
(18, 11, 11, 1, NULL, NULL, NULL, NULL),
(21, 13, 4, 0, NULL, NULL, NULL, NULL),
(22, 13, 13, 1, NULL, NULL, NULL, NULL),
(23, 14, 4, 0, NULL, NULL, NULL, NULL),
(24, 14, 14, 1, NULL, NULL, NULL, NULL),
(25, 15, 4, 0, NULL, NULL, NULL, NULL),
(26, 15, 15, 1, NULL, NULL, NULL, NULL),
(27, 16, 4, 0, NULL, NULL, NULL, NULL),
(28, 16, 16, 1, NULL, NULL, NULL, NULL),
(29, 17, 3, 0, NULL, NULL, NULL, NULL),
(30, 17, 17, 1, NULL, NULL, NULL, NULL),
(31, 18, 3, 0, NULL, NULL, NULL, NULL),
(32, 18, 18, 1, NULL, NULL, NULL, NULL),
(33, 19, 3, 0, NULL, NULL, NULL, NULL),
(34, 19, 19, 1, NULL, NULL, NULL, NULL),
(37, 21, 5, 0, NULL, NULL, NULL, NULL),
(38, 21, 21, 1, NULL, NULL, NULL, NULL),
(39, 22, 5, 0, NULL, NULL, NULL, NULL),
(40, 22, 22, 1, NULL, NULL, NULL, NULL),
(41, 23, 5, 0, NULL, NULL, NULL, NULL),
(42, 23, 23, 1, NULL, NULL, NULL, NULL),
(43, 24, 6, 0, NULL, NULL, NULL, NULL),
(44, 24, 24, 1, NULL, NULL, NULL, NULL),
(45, 25, 6, 0, NULL, NULL, NULL, NULL),
(46, 25, 25, 1, NULL, NULL, NULL, NULL),
(49, 27, 6, 0, NULL, NULL, NULL, NULL),
(50, 27, 27, 1, NULL, NULL, NULL, NULL),
(62, 33, 4, 0, NULL, NULL, NULL, NULL),
(63, 33, 13, 1, NULL, NULL, NULL, NULL),
(64, 33, 33, 2, NULL, NULL, NULL, NULL),
(65, 34, 4, 0, NULL, NULL, NULL, NULL),
(66, 34, 13, 1, NULL, NULL, NULL, NULL),
(67, 34, 34, 2, NULL, NULL, NULL, NULL),
(68, 35, 4, 0, NULL, NULL, NULL, NULL),
(69, 35, 13, 1, NULL, NULL, NULL, NULL),
(70, 35, 35, 2, NULL, NULL, NULL, NULL),
(74, 37, 4, 0, NULL, NULL, NULL, NULL),
(75, 37, 14, 1, NULL, NULL, NULL, NULL),
(76, 37, 37, 2, NULL, NULL, NULL, NULL),
(77, 38, 4, 0, NULL, NULL, NULL, NULL),
(78, 38, 14, 1, NULL, NULL, NULL, NULL),
(79, 38, 38, 2, NULL, NULL, NULL, NULL),
(80, 39, 4, 0, NULL, NULL, NULL, NULL),
(81, 39, 14, 1, NULL, NULL, NULL, NULL),
(82, 39, 39, 2, NULL, NULL, NULL, NULL),
(83, 40, 4, 0, NULL, NULL, NULL, NULL),
(84, 40, 14, 1, NULL, NULL, NULL, NULL),
(85, 40, 40, 2, NULL, NULL, NULL, NULL),
(86, 41, 4, 0, NULL, NULL, NULL, NULL),
(87, 41, 15, 1, NULL, NULL, NULL, NULL),
(88, 41, 41, 2, NULL, NULL, NULL, NULL),
(89, 42, 4, 0, NULL, NULL, NULL, NULL),
(90, 42, 15, 1, NULL, NULL, NULL, NULL),
(91, 42, 42, 2, NULL, NULL, NULL, NULL),
(92, 43, 4, 0, NULL, NULL, NULL, NULL),
(93, 43, 15, 1, NULL, NULL, NULL, NULL),
(94, 43, 43, 2, NULL, NULL, NULL, NULL),
(95, 44, 4, 0, NULL, NULL, NULL, NULL),
(96, 44, 16, 1, NULL, NULL, NULL, NULL),
(97, 44, 44, 2, NULL, NULL, NULL, NULL),
(101, 47, 4, 0, NULL, NULL, NULL, NULL),
(102, 47, 16, 1, NULL, NULL, NULL, NULL),
(103, 47, 47, 2, NULL, NULL, NULL, NULL),
(104, 48, 3, 0, NULL, NULL, NULL, NULL),
(105, 48, 17, 1, NULL, NULL, NULL, NULL),
(106, 48, 48, 2, NULL, NULL, NULL, NULL),
(107, 49, 3, 0, NULL, NULL, NULL, NULL),
(108, 49, 17, 1, NULL, NULL, NULL, NULL),
(109, 49, 49, 2, NULL, NULL, NULL, NULL),
(110, 50, 3, 0, NULL, NULL, NULL, NULL),
(111, 50, 17, 1, NULL, NULL, NULL, NULL),
(112, 50, 50, 2, NULL, NULL, NULL, NULL),
(113, 51, 3, 0, NULL, NULL, NULL, NULL),
(114, 51, 18, 1, NULL, NULL, NULL, NULL),
(115, 51, 51, 2, NULL, NULL, NULL, NULL),
(116, 52, 3, 0, NULL, NULL, NULL, NULL),
(117, 52, 18, 1, NULL, NULL, NULL, NULL),
(118, 52, 52, 2, NULL, NULL, NULL, NULL),
(119, 53, 3, 0, NULL, NULL, NULL, NULL),
(120, 53, 19, 1, NULL, NULL, NULL, NULL),
(121, 53, 53, 2, NULL, NULL, NULL, NULL),
(122, 54, 3, 0, NULL, NULL, NULL, NULL),
(123, 54, 19, 1, NULL, NULL, NULL, NULL),
(124, 54, 54, 2, NULL, NULL, NULL, NULL),
(134, 58, 1, 0, NULL, NULL, NULL, NULL),
(135, 58, 7, 1, NULL, NULL, NULL, NULL),
(136, 58, 58, 2, NULL, NULL, NULL, NULL),
(137, 59, 1, 0, NULL, NULL, NULL, NULL),
(138, 59, 7, 1, NULL, NULL, NULL, NULL),
(139, 59, 59, 2, NULL, NULL, NULL, NULL),
(140, 60, 1, 0, NULL, NULL, NULL, NULL),
(141, 60, 7, 1, NULL, NULL, NULL, NULL),
(142, 60, 60, 2, NULL, NULL, NULL, NULL),
(143, 61, 1, 0, NULL, NULL, NULL, NULL),
(144, 61, 8, 1, NULL, NULL, NULL, NULL),
(145, 61, 61, 2, NULL, NULL, NULL, NULL),
(146, 62, 1, 0, NULL, NULL, NULL, NULL),
(147, 62, 8, 1, NULL, NULL, NULL, NULL),
(148, 62, 62, 2, NULL, NULL, NULL, NULL),
(149, 63, 1, 0, NULL, NULL, NULL, NULL),
(150, 63, 8, 1, NULL, NULL, NULL, NULL),
(151, 63, 63, 2, NULL, NULL, NULL, NULL),
(152, 64, 1, 0, NULL, NULL, NULL, NULL),
(153, 64, 9, 1, NULL, NULL, NULL, NULL),
(154, 64, 64, 2, NULL, NULL, NULL, NULL),
(155, 65, 1, 0, NULL, NULL, NULL, NULL),
(156, 65, 9, 1, NULL, NULL, NULL, NULL),
(157, 65, 65, 2, NULL, NULL, NULL, NULL),
(164, 68, 1, 0, NULL, NULL, NULL, NULL),
(165, 68, 11, 1, NULL, NULL, NULL, NULL),
(166, 68, 68, 2, NULL, NULL, NULL, NULL),
(167, 69, 1, 0, NULL, NULL, NULL, NULL),
(168, 69, 11, 1, NULL, NULL, NULL, NULL),
(169, 69, 69, 2, NULL, NULL, NULL, NULL),
(170, 70, 1, 0, NULL, NULL, NULL, NULL),
(171, 70, 11, 1, NULL, NULL, NULL, NULL),
(172, 70, 70, 2, NULL, NULL, NULL, NULL),
(179, 73, 5, 0, NULL, NULL, NULL, NULL),
(180, 73, 21, 1, NULL, NULL, NULL, NULL),
(181, 73, 73, 2, NULL, NULL, NULL, NULL),
(182, 74, 5, 0, NULL, NULL, NULL, NULL),
(183, 74, 21, 1, NULL, NULL, NULL, NULL),
(184, 74, 74, 2, NULL, NULL, NULL, NULL),
(185, 75, 5, 0, NULL, NULL, NULL, NULL),
(186, 75, 21, 1, NULL, NULL, NULL, NULL),
(187, 75, 75, 2, NULL, NULL, NULL, NULL),
(188, 76, 5, 0, NULL, NULL, NULL, NULL),
(189, 76, 22, 1, NULL, NULL, NULL, NULL),
(190, 76, 76, 2, NULL, NULL, NULL, NULL),
(191, 77, 5, 0, NULL, NULL, NULL, NULL),
(192, 77, 22, 1, NULL, NULL, NULL, NULL),
(193, 77, 77, 2, NULL, NULL, NULL, NULL),
(194, 78, 5, 0, NULL, NULL, NULL, NULL),
(195, 78, 22, 1, NULL, NULL, NULL, NULL),
(196, 78, 78, 2, NULL, NULL, NULL, NULL),
(197, 79, 5, 0, NULL, NULL, NULL, NULL),
(198, 79, 23, 1, NULL, NULL, NULL, NULL),
(199, 79, 79, 2, NULL, NULL, NULL, NULL),
(200, 80, 5, 0, NULL, NULL, NULL, NULL),
(201, 80, 23, 1, NULL, NULL, NULL, NULL),
(202, 80, 80, 2, NULL, NULL, NULL, NULL),
(203, 81, 5, 0, NULL, NULL, NULL, NULL),
(204, 81, 23, 1, NULL, NULL, NULL, NULL),
(205, 81, 81, 2, NULL, NULL, NULL, NULL),
(206, 82, 6, 0, NULL, NULL, NULL, NULL),
(207, 82, 24, 1, NULL, NULL, NULL, NULL),
(208, 82, 82, 2, NULL, NULL, NULL, NULL),
(209, 83, 6, 0, NULL, NULL, NULL, NULL),
(210, 83, 24, 1, NULL, NULL, NULL, NULL),
(211, 83, 83, 2, NULL, NULL, NULL, NULL),
(212, 84, 6, 0, NULL, NULL, NULL, NULL),
(213, 84, 24, 1, NULL, NULL, NULL, NULL),
(214, 84, 84, 2, NULL, NULL, NULL, NULL),
(215, 85, 6, 0, NULL, NULL, NULL, NULL),
(216, 85, 25, 1, NULL, NULL, NULL, NULL),
(217, 85, 85, 2, NULL, NULL, NULL, NULL),
(218, 86, 6, 0, NULL, NULL, NULL, NULL),
(219, 86, 25, 1, NULL, NULL, NULL, NULL),
(220, 86, 86, 2, NULL, NULL, NULL, NULL),
(227, 89, 6, 0, NULL, NULL, NULL, NULL),
(228, 89, 27, 1, NULL, NULL, NULL, NULL),
(229, 89, 89, 2, NULL, NULL, NULL, NULL),
(230, 90, 6, 0, NULL, NULL, NULL, NULL),
(231, 90, 27, 1, NULL, NULL, NULL, NULL),
(232, 90, 90, 2, NULL, NULL, NULL, NULL),
(236, 45, 4, 0, NULL, NULL, NULL, NULL),
(237, 45, 16, 1, NULL, NULL, NULL, NULL),
(238, 45, 45, 2, NULL, NULL, NULL, NULL),
(242, 36, 4, 0, NULL, NULL, NULL, NULL),
(243, 36, 13, 1, NULL, NULL, NULL, NULL),
(244, 36, 36, 2, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `message` text,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `name` varchar(128) NOT NULL,
  `iso_code_2` varchar(2) NOT NULL,
  `iso_code_3` varchar(3) NOT NULL,
  `address_format` text NOT NULL,
  `postcode_required` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `name`, `iso_code_2`, `iso_code_3`, `address_format`, `postcode_required`, `is_active`) VALUES
(1, 'Afghanistan', 'AF', 'AFG', '', 0, 1),
(2, 'Albania', 'AL', 'ALB', '', 0, 1),
(3, 'Algeria', 'DZ', 'DZA', '', 0, 1),
(4, 'American Samoa', 'AS', 'ASM', '', 0, 1),
(5, 'Andorra', 'AD', 'AND', '', 0, 1),
(6, 'Angola', 'AO', 'AGO', '', 0, 1),
(7, 'Anguilla', 'AI', 'AIA', '', 0, 1),
(8, 'Antarctica', 'AQ', 'ATA', '', 0, 1),
(9, 'Antigua and Barbuda', 'AG', 'ATG', '', 0, 1),
(10, 'Argentina', 'AR', 'ARG', '', 0, 1),
(11, 'Armenia', 'AM', 'ARM', '', 0, 1),
(12, 'Aruba', 'AW', 'ABW', '', 0, 1),
(13, 'Australia', 'AU', 'AUS', '', 0, 1),
(14, 'Austria', 'AT', 'AUT', '', 0, 1),
(15, 'Azerbaijan', 'AZ', 'AZE', '', 0, 1),
(16, 'Bahamas', 'BS', 'BHS', '', 0, 1),
(17, 'Bahrain', 'BH', 'BHR', '', 0, 1),
(18, 'Bangladesh', 'BD', 'BGD', '', 0, 1),
(19, 'Barbados', 'BB', 'BRB', '', 0, 1),
(20, 'Belarus', 'BY', 'BLR', '', 0, 1),
(21, 'Belgium', 'BE', 'BEL', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 0, 1),
(22, 'Belize', 'BZ', 'BLZ', '', 0, 1),
(23, 'Benin', 'BJ', 'BEN', '', 0, 1),
(24, 'Bermuda', 'BM', 'BMU', '', 0, 1),
(25, 'Bhutan', 'BT', 'BTN', '', 0, 1),
(26, 'Bolivia', 'BO', 'BOL', '', 0, 1),
(27, 'Bosnia and Herzegovina', 'BA', 'BIH', '', 0, 1),
(28, 'Botswana', 'BW', 'BWA', '', 0, 1),
(29, 'Bouvet Island', 'BV', 'BVT', '', 0, 1),
(30, 'Brazil', 'BR', 'BRA', '', 0, 1),
(31, 'British Indian Ocean Territory', 'IO', 'IOT', '', 0, 1),
(32, 'Brunei Darussalam', 'BN', 'BRN', '', 0, 1),
(33, 'Bulgaria', 'BG', 'BGR', '', 0, 1),
(34, 'Burkina Faso', 'BF', 'BFA', '', 0, 1),
(35, 'Burundi', 'BI', 'BDI', '', 0, 1),
(36, 'Cambodia', 'KH', 'KHM', '', 0, 1),
(37, 'Cameroon', 'CM', 'CMR', '', 0, 1),
(38, 'Canada', 'CA', 'CAN', '', 0, 1),
(39, 'Cape Verde', 'CV', 'CPV', '', 0, 1),
(40, 'Cayman Islands', 'KY', 'CYM', '', 0, 1),
(41, 'Central African Republic', 'CF', 'CAF', '', 0, 1),
(42, 'Chad', 'TD', 'TCD', '', 0, 1),
(43, 'Chile', 'CL', 'CHL', '', 0, 1),
(44, 'China', 'CN', 'CHN', '', 0, 1),
(45, 'Christmas Island', 'CX', 'CXR', '', 0, 1),
(46, 'Cocos (Keeling) Islands', 'CC', 'CCK', '', 0, 1),
(47, 'Colombia', 'CO', 'COL', '', 0, 1),
(48, 'Comoros', 'KM', 'COM', '', 0, 1),
(49, 'Congo', 'CG', 'COG', '', 0, 1),
(50, 'Cook Islands', 'CK', 'COK', '', 0, 1),
(51, 'Costa Rica', 'CR', 'CRI', '', 0, 1),
(52, 'Cote D\'Ivoire', 'CI', 'CIV', '', 0, 1),
(53, 'Croatia', 'HR', 'HRV', '', 0, 1),
(54, 'Cuba', 'CU', 'CUB', '', 0, 1),
(55, 'Cyprus', 'CY', 'CYP', '', 0, 1),
(56, 'Czech Republic', 'CZ', 'CZE', '', 0, 1),
(57, 'Denmark', 'DK', 'DNK', '', 0, 1),
(58, 'Djibouti', 'DJ', 'DJI', '', 0, 1),
(59, 'Dominica', 'DM', 'DMA', '', 0, 1),
(60, 'Dominican Republic', 'DO', 'DOM', '', 0, 1),
(61, 'East Timor', 'TL', 'TLS', '', 0, 1),
(62, 'Ecuador', 'EC', 'ECU', '', 0, 1),
(63, 'Egypt', 'EG', 'EGY', '', 0, 1),
(64, 'El Salvador', 'SV', 'SLV', '', 0, 1),
(65, 'Equatorial Guinea', 'GQ', 'GNQ', '', 0, 1),
(66, 'Eritrea', 'ER', 'ERI', '', 0, 1),
(67, 'Estonia', 'EE', 'EST', '', 0, 1),
(68, 'Ethiopia', 'ET', 'ETH', '', 0, 1),
(69, 'Falkland Islands (Malvinas)', 'FK', 'FLK', '', 0, 1),
(70, 'Faroe Islands', 'FO', 'FRO', '', 0, 1),
(71, 'Fiji', 'FJ', 'FJI', '', 0, 1),
(72, 'Finland', 'FI', 'FIN', '', 0, 1),
(74, 'France, Metropolitan', 'FR', 'FRA', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1),
(75, 'French Guiana', 'GF', 'GUF', '', 0, 1),
(76, 'French Polynesia', 'PF', 'PYF', '', 0, 1),
(77, 'French Southern Territories', 'TF', 'ATF', '', 0, 1),
(78, 'Gabon', 'GA', 'GAB', '', 0, 1),
(79, 'Gambia', 'GM', 'GMB', '', 0, 1),
(80, 'Georgia', 'GE', 'GEO', '', 0, 1),
(81, 'Germany', 'DE', 'DEU', '{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1),
(82, 'Ghana', 'GH', 'GHA', '', 0, 1),
(83, 'Gibraltar', 'GI', 'GIB', '', 0, 1),
(84, 'Greece', 'GR', 'GRC', '', 0, 1),
(85, 'Greenland', 'GL', 'GRL', '', 0, 1),
(86, 'Grenada', 'GD', 'GRD', '', 0, 1),
(87, 'Guadeloupe', 'GP', 'GLP', '', 0, 1),
(88, 'Guam', 'GU', 'GUM', '', 0, 1),
(89, 'Guatemala', 'GT', 'GTM', '', 0, 1),
(90, 'Guinea', 'GN', 'GIN', '', 0, 1),
(91, 'Guinea-Bissau', 'GW', 'GNB', '', 0, 1),
(92, 'Guyana', 'GY', 'GUY', '', 0, 1),
(93, 'Haiti', 'HT', 'HTI', '', 0, 1),
(94, 'Heard and Mc Donald Islands', 'HM', 'HMD', '', 0, 1),
(95, 'Honduras', 'HN', 'HND', '', 0, 1),
(96, 'Hong Kong', 'HK', 'HKG', '', 0, 1),
(97, 'Hungary', 'HU', 'HUN', '', 0, 1),
(98, 'Iceland', 'IS', 'ISL', '', 0, 1),
(99, 'India', 'IN', 'IND', '', 0, 1),
(100, 'Indonesia', 'ID', 'IDN', '', 0, 1),
(101, 'Iran (Islamic Republic of)', 'IR', 'IRN', '', 0, 1),
(102, 'Iraq', 'IQ', 'IRQ', '', 0, 1),
(103, 'Ireland', 'IE', 'IRL', '', 0, 1),
(104, 'Israel', 'IL', 'ISR', '', 0, 1),
(105, 'Italy', 'IT', 'ITA', '', 0, 1),
(106, 'Jamaica', 'JM', 'JAM', '', 0, 1),
(107, 'Japan', 'JP', 'JPN', '', 0, 1),
(108, 'Jordan', 'JO', 'JOR', '', 0, 1),
(109, 'Kazakhstan', 'KZ', 'KAZ', '', 0, 1),
(110, 'Kenya', 'KE', 'KEN', '', 0, 1),
(111, 'Kiribati', 'KI', 'KIR', '', 0, 1),
(112, 'North Korea', 'KP', 'PRK', '', 0, 1),
(113, 'South Korea', 'KR', 'KOR', '', 0, 1),
(114, 'Kuwait', 'KW', 'KWT', '', 0, 1),
(115, 'Kyrgyzstan', 'KG', 'KGZ', '', 0, 1),
(116, 'Lao People\'s Democratic Republic', 'LA', 'LAO', '', 0, 1),
(117, 'Latvia', 'LV', 'LVA', '', 0, 1),
(118, 'Lebanon', 'LB', 'LBN', '', 0, 1),
(119, 'Lesotho', 'LS', 'LSO', '', 0, 1),
(120, 'Liberia', 'LR', 'LBR', '', 0, 1),
(121, 'Libyan Arab Jamahiriya', 'LY', 'LBY', '', 0, 1),
(122, 'Liechtenstein', 'LI', 'LIE', '', 0, 1),
(123, 'Lithuania', 'LT', 'LTU', '', 0, 1),
(124, 'Luxembourg', 'LU', 'LUX', '', 0, 1),
(125, 'Macau', 'MO', 'MAC', '', 0, 1),
(126, 'FYROM', 'MK', 'MKD', '', 0, 1),
(127, 'Madagascar', 'MG', 'MDG', '', 0, 1),
(128, 'Malawi', 'MW', 'MWI', '', 0, 1),
(129, 'Malaysia', 'MY', 'MYS', '', 0, 1),
(130, 'Maldives', 'MV', 'MDV', '', 0, 1),
(131, 'Mali', 'ML', 'MLI', '', 0, 1),
(132, 'Malta', 'MT', 'MLT', '', 0, 1),
(133, 'Marshall Islands', 'MH', 'MHL', '', 0, 1),
(134, 'Martinique', 'MQ', 'MTQ', '', 0, 1),
(135, 'Mauritania', 'MR', 'MRT', '', 0, 1),
(136, 'Mauritius', 'MU', 'MUS', '', 0, 1),
(137, 'Mayotte', 'YT', 'MYT', '', 0, 1),
(138, 'Mexico', 'MX', 'MEX', '', 0, 1),
(139, 'Micronesia, Federated States of', 'FM', 'FSM', '', 0, 1),
(140, 'Moldova, Republic of', 'MD', 'MDA', '', 0, 1),
(141, 'Monaco', 'MC', 'MCO', '', 0, 1),
(142, 'Mongolia', 'MN', 'MNG', '', 0, 1),
(143, 'Montserrat', 'MS', 'MSR', '', 0, 1),
(144, 'Morocco', 'MA', 'MAR', '', 0, 1),
(145, 'Mozambique', 'MZ', 'MOZ', '', 0, 1),
(146, 'Myanmar', 'MM', 'MMR', '', 0, 1),
(147, 'Namibia', 'NA', 'NAM', '', 0, 1),
(148, 'Nauru', 'NR', 'NRU', '', 0, 1),
(149, 'Nepal', 'NP', 'NPL', '', 0, 1),
(150, 'Netherlands', 'NL', 'NLD', '', 0, 1),
(151, 'Netherlands Antilles', 'AN', 'ANT', '', 0, 1),
(152, 'New Caledonia', 'NC', 'NCL', '', 0, 1),
(153, 'New Zealand', 'NZ', 'NZL', '', 0, 1),
(154, 'Nicaragua', 'NI', 'NIC', '', 0, 1),
(155, 'Niger', 'NE', 'NER', '', 0, 1),
(156, 'Nigeria', 'NG', 'NGA', '', 0, 1),
(157, 'Niue', 'NU', 'NIU', '', 0, 1),
(158, 'Norfolk Island', 'NF', 'NFK', '', 0, 1),
(159, 'Northern Mariana Islands', 'MP', 'MNP', '', 0, 1),
(160, 'Norway', 'NO', 'NOR', '', 0, 1),
(161, 'Oman', 'OM', 'OMN', '', 0, 1),
(162, 'Pakistan', 'PK', 'PAK', '', 0, 1),
(163, 'Palau', 'PW', 'PLW', '', 0, 1),
(164, 'Panama', 'PA', 'PAN', '', 0, 1),
(165, 'Papua New Guinea', 'PG', 'PNG', '', 0, 1),
(166, 'Paraguay', 'PY', 'PRY', '', 0, 1),
(167, 'Peru', 'PE', 'PER', '', 0, 1),
(168, 'Philippines', 'PH', 'PHL', '', 0, 1),
(169, 'Pitcairn', 'PN', 'PCN', '', 0, 1),
(170, 'Poland', 'PL', 'POL', '', 0, 1),
(171, 'Portugal', 'PT', 'PRT', '', 0, 1),
(172, 'Puerto Rico', 'PR', 'PRI', '', 0, 1),
(173, 'Qatar', 'QA', 'QAT', '', 0, 1),
(174, 'Reunion', 'RE', 'REU', '', 0, 1),
(175, 'Romania', 'RO', 'ROM', '', 0, 1),
(176, 'Russian Federation', 'RU', 'RUS', '', 0, 1),
(177, 'Rwanda', 'RW', 'RWA', '', 0, 1),
(178, 'Saint Kitts and Nevis', 'KN', 'KNA', '', 0, 1),
(179, 'Saint Lucia', 'LC', 'LCA', '', 0, 1),
(180, 'Saint Vincent and the Grenadines', 'VC', 'VCT', '', 0, 1),
(181, 'Samoa', 'WS', 'WSM', '', 0, 1),
(182, 'San Marino', 'SM', 'SMR', '', 0, 1),
(183, 'Sao Tome and Principe', 'ST', 'STP', '', 0, 1),
(184, 'Saudi Arabia', 'SA', 'SAU', '', 0, 1),
(185, 'Senegal', 'SN', 'SEN', '', 0, 1),
(186, 'Seychelles', 'SC', 'SYC', '', 0, 1),
(187, 'Sierra Leone', 'SL', 'SLE', '', 0, 1),
(188, 'Singapore', 'SG', 'SGP', '', 0, 1),
(189, 'Slovak Republic', 'SK', 'SVK', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city} {postcode}\r\n{zone}\r\n{country}', 0, 1),
(190, 'Slovenia', 'SI', 'SVN', '', 0, 1),
(191, 'Solomon Islands', 'SB', 'SLB', '', 0, 1),
(192, 'Somalia', 'SO', 'SOM', '', 0, 1),
(193, 'South Africa', 'ZA', 'ZAF', '', 0, 1),
(194, 'South Georgia &amp; South Sandwich Islands', 'GS', 'SGS', '', 0, 1),
(195, 'Spain', 'ES', 'ESP', '', 0, 1),
(196, 'Sri Lanka', 'LK', 'LKA', '', 0, 1),
(197, 'St. Helena', 'SH', 'SHN', '', 0, 1),
(198, 'St. Pierre and Miquelon', 'PM', 'SPM', '', 0, 1),
(199, 'Sudan', 'SD', 'SDN', '', 0, 1),
(200, 'Suriname', 'SR', 'SUR', '', 0, 1),
(201, 'Svalbard and Jan Mayen Islands', 'SJ', 'SJM', '', 0, 1),
(202, 'Swaziland', 'SZ', 'SWZ', '', 0, 1),
(203, 'Sweden', 'SE', 'SWE', '{company}\r\n{firstname} {lastname}\r\n{address_1}\r\n{address_2}\r\n{postcode} {city}\r\n{country}', 1, 1),
(204, 'Switzerland', 'CH', 'CHE', '', 0, 1),
(205, 'Syrian Arab Republic', 'SY', 'SYR', '', 0, 1),
(206, 'Taiwan', 'TW', 'TWN', '', 0, 1),
(207, 'Tajikistan', 'TJ', 'TJK', '', 0, 1),
(208, 'Tanzania, United Republic of', 'TZ', 'TZA', '', 0, 1),
(209, 'Thailand', 'TH', 'THA', '', 0, 1),
(210, 'Togo', 'TG', 'TGO', '', 0, 1),
(211, 'Tokelau', 'TK', 'TKL', '', 0, 1),
(212, 'Tonga', 'TO', 'TON', '', 0, 1),
(213, 'Trinidad and Tobago', 'TT', 'TTO', '', 0, 1),
(214, 'Tunisia', 'TN', 'TUN', '', 0, 1),
(215, 'Turkey', 'TR', 'TUR', '', 0, 1),
(216, 'Turkmenistan', 'TM', 'TKM', '', 0, 1),
(217, 'Turks and Caicos Islands', 'TC', 'TCA', '', 0, 1),
(218, 'Tuvalu', 'TV', 'TUV', '', 0, 1),
(219, 'Uganda', 'UG', 'UGA', '', 0, 1),
(220, 'Ukraine', 'UA', 'UKR', '', 0, 1),
(221, 'United Arab Emirates', 'AE', 'ARE', '', 0, 1),
(222, 'United Kingdom', 'GB', 'GBR', '', 1, 1),
(223, 'United States', 'US', 'USA', '{firstname} {lastname}\r\n{company}\r\n{address_1}\r\n{address_2}\r\n{city}, {zone} {postcode}\r\n{country}', 0, 1),
(224, 'United States Minor Outlying Islands', 'UM', 'UMI', '', 0, 1),
(225, 'Uruguay', 'UY', 'URY', '', 0, 1),
(226, 'Uzbekistan', 'UZ', 'UZB', '', 0, 1),
(227, 'Vanuatu', 'VU', 'VUT', '', 0, 1),
(228, 'Vatican City State (Holy See)', 'VA', 'VAT', '', 0, 1),
(229, 'Venezuela', 'VE', 'VEN', '', 0, 1),
(230, 'Viet Nam', 'VN', 'VNM', '', 0, 1),
(231, 'Virgin Islands (British)', 'VG', 'VGB', '', 0, 1),
(232, 'Virgin Islands (U.S.)', 'VI', 'VIR', '', 0, 1),
(233, 'Wallis and Futuna Islands', 'WF', 'WLF', '', 0, 1),
(234, 'Western Sahara', 'EH', 'ESH', '', 0, 1),
(235, 'Yemen', 'YE', 'YEM', '', 0, 1),
(237, 'Democratic Republic of Congo', 'CD', 'COD', '', 0, 1),
(238, 'Zambia', 'ZM', 'ZMB', '', 0, 1),
(239, 'Zimbabwe', 'ZW', 'ZWE', '', 0, 1),
(242, 'Montenegro', 'ME', 'MNE', '', 0, 1),
(243, 'Serbia', 'RS', 'SRB', '', 0, 1),
(244, 'Aaland Islands', 'AX', 'ALA', '', 0, 1),
(245, 'Bonaire, Sint Eustatius and Saba', 'BQ', 'BES', '', 0, 1),
(246, 'Curacao', 'CW', 'CUW', '', 0, 1),
(247, 'Palestinian Territory, Occupied', 'PS', 'PSE', '', 0, 1),
(248, 'South Sudan', 'SS', 'SSD', '', 0, 1),
(249, 'St. Barthelemy', 'BL', 'BLM', '', 0, 1),
(250, 'St. Martin (French part)', 'MF', 'MAF', '', 0, 1),
(251, 'Canary Islands', 'IC', 'ICA', '', 0, 1),
(252, 'Ascension Island (British)', 'AC', 'ASC', '', 0, 1),
(253, 'Kosovo, Republic of', 'XK', 'UNK', '', 0, 1),
(254, 'Isle of Man', 'IM', 'IMN', '', 0, 1),
(255, 'Tristan da Cunha', 'TA', 'SHN', '', 0, 1),
(256, 'Guernsey', 'GG', 'GGY', '', 0, 1),
(257, 'Jersey', 'JE', 'JEY', '', 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `currency`
--

CREATE TABLE `currency` (
  `currency_id` int(11) NOT NULL,
  `title` varchar(32) DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `symbol_left` varchar(32) DEFAULT NULL,
  `symbol_right` varchar(32) DEFAULT NULL,
  `decimal_place` decimal(5,0) DEFAULT NULL,
  `value` float(15,8) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `currency`
--

INSERT INTO `currency` (`currency_id`, `title`, `code`, `symbol_left`, `symbol_right`, `decimal_place`, `value`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(46, 'Doller', 'US', '1', '8', NULL, 12.00000000, 0, '2019-02-17 22:18:16', '2019-05-10 04:06:48', NULL, NULL),
(57, 'Rupees', 'IND', 'INR -', 'IN', NULL, 123.00000000, 0, '2019-03-20 01:57:14', '2019-05-10 04:06:54', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `first_name` varchar(512) DEFAULT NULL,
  `last_name` varchar(512) DEFAULT NULL,
  `username` varchar(512) NOT NULL,
  `email` varchar(512) DEFAULT NULL,
  `password` varchar(512) NOT NULL,
  `mobile` varchar(10) DEFAULT NULL,
  `address` varchar(128) DEFAULT NULL,
  `country_id` int(11) DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `pincode` varchar(6) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `avatar_path` tinytext,
  `mail_status` int(11) DEFAULT NULL,
  `delete_flag` int(11) DEFAULT '0',
  `customer_group_id` int(11) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `newsletter` int(11) DEFAULT NULL,
  `safe` int(11) DEFAULT NULL,
  `ip` varchar(255) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `local` varchar(255) DEFAULT NULL,
  `oauth_data` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_group`
--

CREATE TABLE `customer_group` (
  `id` int(11) NOT NULL,
  `name` varchar(512) NOT NULL,
  `description` varchar(512) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_ip`
--

CREATE TABLE `customer_ip` (
  `customer_ip_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_transaction`
--

CREATE TABLE `customer_transaction` (
  `customer_transaction_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `order_id` int(11) NOT NULL,
  `description` text,
  `amount` decimal(15,4) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer_wishlist`
--

CREATE TABLE `customer_wishlist` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `email_template`
--

CREATE TABLE `email_template` (
  `id` int(11) NOT NULL,
  `shortname` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email_template`
--

INSERT INTO `email_template` (`id`, `shortname`, `subject`, `message`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(1, 'Register Content', 'Registration Successfully', '<p>Dear {name},</p>\r\n\r\n<p>Thank you for expressing your interest and registering with Spurtcommerce, the faster roadway for a smarter eCommerce drive.</p>\r\n', 1, '2019-02-23 09:47:35', '2019-03-25 10:24:34', NULL, NULL),
(2, 'Forgot Password Content', 'Forgot Password', '<p>Dear {name},<br />\n&nbsp;</p>\n\n<p>Your new Password is : {xxxxxx}</p>\n', 1, '2019-02-23 09:53:09', '2019-03-06 01:06:45', NULL, NULL),
(3, 'Contact Content', 'ContactUs', 'Dear Admin,<br/><br/>        <p style=\'margin-bottom:.5em; margin: 0 0 10px 0;text-indent: 50px\'> You just received an enquiry from {name} and the details are here:\r\n<br>\r\nDetails:\r\n<br>\r\nEmail : {email}, <br>\r\nPhone Number : {phoneNumber}, <br>\r\nMessage : {message}. </p>\r\n', 0, NULL, '2019-03-25 00:49:17', NULL, NULL),
(4, 'Create Customer Login', 'User Login', '<p>Dear {name},<br />\r\n&nbsp;</p>\r\n\r\n<p>We are glad to inform you that Spurtcommerce has added you as Customer.Here are your User Credentials for logging into the Application</p>\r\n\r\n<p>User ID : {username}</p>\r\n\r\n<p>Password : {password}</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>You may login using the above Email Id and Password.</p>\r\n\r\n<p>&nbsp;</p>\r\n', 0, NULL, '2019-03-05 03:00:37', NULL, NULL),
(5, 'Customer Order Content', 'Details of your recent Order', 'Dear {name},        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> Order successfully placed.        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> You have successfully placed an order for customization services. Kindly find the following details on the placed order.    </tr></tbody></table></td></tr>\r\n', 0, NULL, '2019-03-05 07:04:07', NULL, NULL),
(6, 'Admin Mail Content', 'Congratulations on your recent order', 'Dear Mr.Admin,        </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#078e05;font-weight:400;text-align:left;font-size:16px;line-height:1.5rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> A new order has been placed.         </td>    </tr>    <tr>        <td dir=\'ltr\' style=\'padding:0 0px;color:#000;font-weight:300;text-align:left;font-size:12px;line-height:1.2rem;padding-top:10px;font-family: \'Roboto\', sans-serif;\' valign=\'top\'> The new order {orderId} from the Customer {name} has been successfully placed. Kindly find the following details on the placed order.    </tr> </tbody></table></td> </tr> \r\n\r\n\r\n							\r\n\r\n\r\n							\r\n', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `geo_zone`
--

CREATE TABLE `geo_zone` (
  `geo_zone_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `language_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `code` varchar(5) DEFAULT NULL,
  `image` text,
  `image_path` text,
  `locale` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `language`
--

INSERT INTO `language` (`language_id`, `name`, `code`, `image`, `image_path`, `locale`, `sort_order`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(54, 'Hindi', 'HIN', 'Img_1556347942580.png', 'language/', NULL, 0, 0, '2019-03-15 04:30:44', '2019-05-11 06:02:45', NULL, NULL),
(57, 'English', 'ENG', 'Img_1557133081101.png', 'language/', NULL, 1, 1, '2019-05-06 03:58:01', '2019-05-15 18:40:53', NULL, NULL),
(58, 'French', 'FR', 'Img_1557569207176.png', 'language/', NULL, 1, 1, '2019-05-06 06:57:05', '2019-05-10 04:11:21', NULL, NULL);
(58, 'Persian', 'PR', 'Img_1557569207176.png', 'language/', NULL, 1, 1, '2019-05-06 06:57:05', '2019-05-10 04:11:21', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login_log`
--

CREATE TABLE `login_log` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `ip_address` varchar(255) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login_log`
--

INSERT INTO `login_log` (`id`, `customer_id`, `email_id`, `first_name`, `ip_address`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(54, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '27.5.58.128', '2019-03-01 12:19:43', NULL, NULL, NULL),
(53, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.206.114.29', '2019-03-01 07:50:21', NULL, NULL, NULL),
(52, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.206.114.29', '2019-03-01 06:27:53', NULL, NULL, NULL),
(51, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.206.114.29', '2019-03-01 04:04:28', NULL, NULL, NULL),
(50, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.206.114.29', '2019-03-01 01:10:22', NULL, NULL, NULL),
(49, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.204.209.130', '2019-02-28 07:03:30', NULL, NULL, NULL),
(48, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.204.209.130', '2019-02-28 06:56:02', NULL, NULL, NULL),
(47, 84, 'hanumanth.piccosoft@gmail.com', 'hanumanth', '49.204.209.130', '2019-02-28 06:17:26', NULL, NULL, NULL),
(46, 84, 'hanumanth.piccosoft@gmail.com', 'hanumanth', '49.204.209.130', '2019-02-28 06:05:20', NULL, NULL, NULL),
(45, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.204.209.130', '2019-02-28 05:47:02', NULL, NULL, NULL),
(44, 84, 'hanumanth.piccosoft@gmail.com', 'hanumanth', '49.204.209.130', '2019-02-28 05:22:12', NULL, NULL, NULL),
(43, 84, 'hanumanth.piccosoft@gmail.com', 'hanumanth', '49.204.209.130', '2019-02-28 05:12:01', NULL, NULL, NULL),
(42, 77, 'amitpiccosoft@gmail.com', 'Amit', '49.204.211.239', '2019-02-27 05:09:33', NULL, NULL, NULL),
(41, 77, 'amitpiccosoft@gmail.com', 'Amit', '49.204.211.239', '2019-02-27 03:29:25', NULL, NULL, NULL),
(40, 83, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.211.239', '2019-02-27 02:20:46', NULL, NULL, NULL),
(39, 83, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.211.239', '2019-02-27 01:48:01', NULL, NULL, NULL),
(38, 83, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.211.239', '2019-02-27 00:12:17', NULL, NULL, NULL),
(37, 40, 'ganesh.picco@gmail.com', 'ganesh', '183.82.38.164', '2019-02-21 23:17:39', NULL, NULL, NULL),
(36, 76, 'akishamary.picco@gmail.com', 'akisha', '49.204.211.235', '2019-02-21 00:34:14', NULL, NULL, NULL),
(35, 67, 'ganapathy.picco@gmail.com', 'sss', '49.204.210.77', '2019-02-19 08:26:34', NULL, NULL, NULL),
(34, 57, 'veerapandi.picco@gmail.com', 'veerapandi', '49.206.115.221', '2019-02-18 04:18:54', NULL, NULL, NULL),
(55, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.204.208.22', '2019-03-01 22:06:54', NULL, NULL, NULL),
(56, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.117.186', '2019-03-01 23:07:02', NULL, NULL, NULL),
(57, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.204.208.22', '2019-03-02 00:41:29', NULL, NULL, NULL),
(58, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.204.208.22', '2019-03-02 00:44:32', NULL, NULL, NULL),
(59, 93, 'veerapandi.picco@gmail.com', 'veerapandi', '49.204.208.22', '2019-03-02 01:21:46', NULL, NULL, NULL),
(60, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '49.204.208.22', '2019-03-02 03:19:38', NULL, NULL, NULL),
(61, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.84', '2019-03-03 22:43:58', NULL, NULL, NULL),
(62, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.84', '2019-03-04 00:50:51', NULL, NULL, NULL),
(63, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.84', '2019-03-04 01:41:54', NULL, NULL, NULL),
(64, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '183.82.39.84', '2019-03-04 03:07:18', NULL, NULL, NULL),
(65, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.84', '2019-03-04 03:10:05', NULL, NULL, NULL),
(66, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.84', '2019-03-04 04:04:33', NULL, NULL, NULL),
(67, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 05:58:39', NULL, NULL, NULL),
(68, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 06:05:57', NULL, NULL, NULL),
(69, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 06:07:32', NULL, NULL, NULL),
(70, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 06:08:03', NULL, NULL, NULL),
(71, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 06:08:20', NULL, NULL, NULL),
(72, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 06:12:53', NULL, NULL, NULL),
(73, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 06:14:09', NULL, NULL, NULL),
(74, 97, 'jerald@gmail.com', 'jerald', '157.51.148.109', '2019-03-04 06:19:14', NULL, NULL, NULL),
(75, 97, 'jerald@gmail.com', 'jerald', '49.206.115.135', '2019-03-04 07:54:12', NULL, NULL, NULL),
(76, 85, 'amitpiccosoft@gmail.com', 'amit kumar', '27.5.97.136', '2019-03-04 11:17:04', NULL, NULL, NULL),
(77, 85, 'amitpiccosoft@gmail.com', 'amit', '49.206.116.40', '2019-03-04 23:44:52', NULL, NULL, NULL),
(78, 103, 'jerald1@gmail.com', 'jerald', '49.206.117.223', '2019-03-05 00:39:28', NULL, NULL, NULL),
(79, 93, 'veerapandi.picco@gmail.com', 'veerapandi', '49.206.117.223', '2019-03-05 01:17:26', NULL, NULL, NULL),
(80, 103, 'jerald1@gmail.com', 'jerald', '49.206.117.223', '2019-03-05 03:00:27', NULL, NULL, NULL),
(81, 84, 'hanumanth.piccosoft@gmail.com', 'hanumanth', '49.206.117.223', '2019-03-05 03:07:35', NULL, NULL, NULL),
(82, 103, 'jerald1@gmail.com', 'jerald', '49.206.117.223', '2019-03-05 03:07:45', NULL, NULL, NULL),
(83, 108, 'veer@gmail.com', 'verr', '49.206.117.223', '2019-03-05 06:49:52', NULL, NULL, NULL),
(84, 108, 'veer@gmail.com', 'verr', '49.206.117.223', '2019-03-05 06:54:47', NULL, NULL, NULL),
(85, 85, 'amitpiccosoft@gmail.com', 'amit', '60.243.56.158', '2019-03-05 11:16:24', NULL, NULL, NULL),
(86, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.215', '2019-03-05 22:48:50', NULL, NULL, NULL),
(87, 110, 'hanuamnth12@gmail.com', 'hanumanth12', '49.204.208.215', '2019-03-05 23:33:46', NULL, NULL, NULL),
(88, 109, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.208.215', '2019-03-05 23:40:36', NULL, NULL, NULL),
(89, 110, 'hanuamnth12@gmail.com', 'hanumanth12', '49.204.208.215', '2019-03-05 23:43:44', NULL, NULL, NULL),
(90, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.215', '2019-03-06 00:20:31', NULL, NULL, NULL),
(91, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.215', '2019-03-06 00:47:36', NULL, NULL, NULL),
(92, 85, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.115', '2019-03-06 00:59:38', NULL, NULL, NULL),
(93, 76, 'ganapathy.picco@gmail.com', 'akishas', '49.204.208.215', '2019-03-06 03:58:52', NULL, NULL, NULL),
(94, 76, 'ganapathy.picco@gmail.com', 'akishas', '49.204.208.215', '2019-03-06 03:59:33', NULL, NULL, NULL),
(95, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.215', '2019-03-06 04:13:04', NULL, NULL, NULL),
(96, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.215', '2019-03-06 05:00:21', NULL, NULL, NULL),
(97, 83, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.208.215', '2019-03-06 07:45:27', NULL, NULL, NULL),
(98, 92, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.215', '2019-03-06 08:22:03', NULL, NULL, NULL),
(99, 76, 'ganapathy.picco@gmail.com', 'akishas', '49.204.211.64', '2019-03-06 23:12:12', NULL, NULL, NULL),
(100, 83, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.209.92', '2019-03-07 01:27:17', NULL, NULL, NULL),
(101, 124, 'veerapandi.piccosoft@gmail.com', 'hanumanth', '49.204.209.92', '2019-03-07 01:38:30', NULL, NULL, NULL),
(102, 128, 'farman@gmail.com', 'farman', '49.204.209.92', '2019-03-07 03:11:58', NULL, NULL, NULL),
(103, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 04:22:14', NULL, NULL, NULL),
(104, 143, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.211.64', '2019-03-07 04:41:17', NULL, NULL, NULL),
(105, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 04:48:37', NULL, NULL, NULL),
(106, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.191', '2019-03-07 04:54:20', NULL, NULL, NULL),
(107, 143, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.211.64', '2019-03-07 04:56:20', NULL, NULL, NULL),
(108, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.209.191', '2019-03-07 04:56:21', NULL, NULL, NULL),
(109, 143, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.211.64', '2019-03-07 04:57:45', NULL, NULL, NULL),
(110, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 04:59:00', NULL, NULL, NULL),
(111, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.209.191', '2019-03-07 05:04:37', NULL, NULL, NULL),
(112, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 05:39:17', NULL, NULL, NULL),
(113, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 05:40:35', NULL, NULL, NULL),
(114, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 05:58:55', NULL, NULL, NULL),
(115, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.191', '2019-03-07 06:01:43', NULL, NULL, NULL),
(116, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 06:11:37', NULL, NULL, NULL),
(117, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.191', '2019-03-07 06:12:20', NULL, NULL, NULL),
(118, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.191', '2019-03-07 06:22:51', NULL, NULL, NULL),
(119, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.191', '2019-03-07 07:08:07', NULL, NULL, NULL),
(120, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.191', '2019-03-07 07:10:03', NULL, NULL, NULL),
(121, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.191', '2019-03-07 07:43:08', NULL, NULL, NULL),
(122, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.191', '2019-03-07 07:43:41', NULL, NULL, NULL),
(123, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.195', '2019-03-08 01:36:18', NULL, NULL, NULL),
(124, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.38.195', '2019-03-08 01:47:02', NULL, NULL, NULL),
(125, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.195', '2019-03-08 02:56:36', NULL, NULL, NULL),
(126, 139, 'amitpiccosoft@gmail.com', 'amit', '49.206.114.132', '2019-03-08 07:53:48', NULL, NULL, NULL),
(127, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 03:55:47', NULL, NULL, NULL),
(128, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 03:56:39', NULL, NULL, NULL),
(129, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 04:15:51', NULL, NULL, NULL),
(130, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 04:17:48', NULL, NULL, NULL),
(131, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 04:20:26', NULL, NULL, NULL),
(132, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.210.129', '2019-03-11 04:54:24', NULL, NULL, NULL),
(133, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.210.129', '2019-03-11 05:06:35', NULL, NULL, NULL),
(134, 146, 'ganapathy.piccosoft@gmail.com', 'ShivaGanapathy', '49.204.210.129', '2019-03-11 05:16:36', NULL, NULL, NULL),
(135, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 05:16:59', NULL, NULL, NULL),
(136, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.210.129', '2019-03-11 05:20:27', NULL, NULL, NULL),
(137, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 05:22:24', NULL, NULL, NULL),
(138, 148, 'jai@gmail.com', 'JaiGanesh', '49.204.210.129', '2019-03-11 05:47:39', NULL, NULL, NULL),
(139, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.210.129', '2019-03-11 05:51:18', NULL, NULL, NULL),
(140, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.210.129', '2019-03-11 05:55:54', NULL, NULL, NULL),
(141, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 06:23:30', NULL, NULL, NULL),
(142, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.210.129', '2019-03-11 08:40:45', NULL, NULL, NULL),
(143, 145, 'amit.picco@gmail.com', 'Amit', '49.204.210.129', '2019-03-11 08:45:23', NULL, NULL, NULL),
(144, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.39.227', '2019-03-11 09:08:01', NULL, NULL, NULL),
(145, 149, 'veerapandi.picco@gmail.com', 'veer', '183.82.39.123', '2019-03-12 00:42:31', NULL, NULL, NULL),
(146, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.58', '2019-03-12 00:47:22', NULL, NULL, NULL),
(147, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.58', '2019-03-12 01:00:39', NULL, NULL, NULL),
(148, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.123', '2019-03-12 01:12:24', NULL, NULL, NULL),
(149, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.123', '2019-03-12 01:40:42', NULL, NULL, NULL),
(150, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.123', '2019-03-12 01:54:31', NULL, NULL, NULL),
(151, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.123', '2019-03-12 07:13:48', NULL, NULL, NULL),
(152, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.39.123', '2019-03-12 09:04:27', NULL, NULL, NULL),
(153, 139, 'amitpiccosoft@gmail.com', 'amit', '27.5.56.172', '2019-03-12 13:41:41', NULL, NULL, NULL),
(154, 139, 'amitpiccosoft@gmail.com', 'amit', '27.5.56.172', '2019-03-12 13:58:38', NULL, NULL, NULL),
(155, 139, 'amitpiccosoft@gmail.com', 'amit', '27.5.56.172', '2019-03-12 14:01:40', NULL, NULL, NULL),
(156, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 00:02:29', NULL, NULL, NULL),
(157, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 00:08:35', NULL, NULL, NULL),
(158, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 00:09:40', NULL, NULL, NULL),
(159, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 00:11:00', NULL, NULL, NULL),
(160, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 00:55:53', NULL, NULL, NULL),
(161, 149, 'veerapandi.picco@gmail.com', 'veer', '183.82.38.76', '2019-03-13 01:00:52', NULL, NULL, NULL),
(162, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 01:23:16', NULL, NULL, NULL),
(163, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 01:44:25', NULL, NULL, NULL),
(164, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 02:04:45', NULL, NULL, NULL),
(165, 150, 'pavithra.picco@gmail.com', 'Pavithra', '183.82.38.76', '2019-03-13 02:07:10', NULL, NULL, NULL),
(166, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 02:27:08', NULL, NULL, NULL),
(167, 140, 'admin@piccocart.com', 'amit', '49.204.211.69', '2019-03-13 02:47:00', NULL, NULL, NULL),
(168, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 02:50:20', NULL, NULL, NULL),
(169, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 02:55:22', NULL, NULL, NULL),
(170, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 03:00:08', NULL, NULL, NULL),
(171, 140, 'admin@piccocart.com', 'amit', '49.204.211.69', '2019-03-13 03:53:45', NULL, NULL, NULL),
(172, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 03:54:10', NULL, NULL, NULL),
(173, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 03:55:08', NULL, NULL, NULL),
(174, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 04:00:44', NULL, NULL, NULL),
(175, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 04:49:33', NULL, NULL, NULL),
(176, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 04:52:42', NULL, NULL, NULL),
(177, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 05:00:21', NULL, NULL, NULL),
(178, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 05:04:21', NULL, NULL, NULL),
(179, 140, 'admin@piccocart.com', 'amit', '49.204.211.69', '2019-03-13 05:08:55', NULL, NULL, NULL),
(180, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 05:37:58', NULL, NULL, NULL),
(181, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 05:43:45', NULL, NULL, NULL),
(182, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 05:44:38', NULL, NULL, NULL),
(183, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 05:46:05', NULL, NULL, NULL),
(184, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 05:46:43', NULL, NULL, NULL),
(185, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 05:54:26', NULL, NULL, NULL),
(186, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 05:59:07', NULL, NULL, NULL),
(187, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:06:15', NULL, NULL, NULL),
(188, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:18:17', NULL, NULL, NULL),
(189, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:21:06', NULL, NULL, NULL),
(190, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:32:20', NULL, NULL, NULL),
(191, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:36:40', NULL, NULL, NULL),
(192, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:38:35', NULL, NULL, NULL),
(193, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:39:01', NULL, NULL, NULL),
(194, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 06:39:35', NULL, NULL, NULL),
(195, 150, 'pavithra.picco@gmail.com', 'Pavithra', '183.82.38.76', '2019-03-13 06:41:10', NULL, NULL, NULL),
(196, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 06:51:55', NULL, NULL, NULL),
(197, 140, 'admin@piccocart.com', 'amit', '49.204.211.69', '2019-03-13 06:54:10', NULL, NULL, NULL),
(198, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 07:06:28', NULL, NULL, NULL),
(199, 140, 'admin@piccocart.com', 'amit', '49.204.211.69', '2019-03-13 07:13:29', NULL, NULL, NULL),
(200, 140, 'admin@piccocart.com', 'amit', '49.204.211.69', '2019-03-13 07:37:52', NULL, NULL, NULL),
(201, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 07:57:42', NULL, NULL, NULL),
(202, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 08:31:44', NULL, NULL, NULL),
(203, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 08:32:50', NULL, NULL, NULL),
(204, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 08:34:44', NULL, NULL, NULL),
(205, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 08:38:28', NULL, NULL, NULL),
(206, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 08:41:43', NULL, NULL, NULL),
(207, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.69', '2019-03-13 08:47:17', NULL, NULL, NULL),
(208, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 09:04:49', NULL, NULL, NULL),
(209, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.76', '2019-03-13 09:06:27', NULL, NULL, NULL),
(210, 139, 'amitpiccosoft@gmail.com', 'amit', '27.5.87.178', '2019-03-13 12:58:45', NULL, NULL, NULL),
(211, 139, 'amitpiccosoft@gmail.com', 'amit', '27.5.87.178', '2019-03-13 12:59:37', NULL, NULL, NULL),
(212, 139, 'amitpiccosoft@gmail.com', 'amit', '27.5.87.178', '2019-03-13 13:00:51', NULL, NULL, NULL),
(213, 140, 'admin@piccocart.com', 'amit', '49.204.209.71', '2019-03-13 23:54:13', NULL, NULL, NULL),
(214, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.71', '2019-03-13 23:54:44', NULL, NULL, NULL),
(215, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.71', '2019-03-14 00:30:24', NULL, NULL, NULL),
(216, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.59', '2019-03-14 01:34:09', NULL, NULL, NULL),
(217, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.59', '2019-03-14 04:41:50', NULL, NULL, NULL),
(218, 140, 'admin@piccocart.com', 'amit', '49.204.209.71', '2019-03-14 04:42:56', NULL, NULL, NULL),
(219, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.211.59', '2019-03-14 05:25:31', NULL, NULL, NULL),
(220, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.211.59', '2019-03-14 06:31:51', NULL, NULL, NULL),
(221, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.211.59', '2019-03-14 06:39:34', NULL, NULL, NULL),
(222, 153, 'test.picco@gmail.com', 'veerapandi', '49.204.211.59', '2019-03-14 07:06:55', NULL, NULL, NULL),
(223, 140, 'admin@piccocart.com', 'amit', '49.204.211.59', '2019-03-14 07:07:50', NULL, NULL, NULL),
(224, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.59', '2019-03-14 07:29:08', NULL, NULL, NULL),
(225, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.208.5', '2019-03-15 00:06:13', NULL, NULL, NULL),
(226, 145, 'amit.picco@gmail.com', 'Amit', '49.204.208.98', '2019-03-15 00:38:17', NULL, NULL, NULL),
(227, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.208.5', '2019-03-15 02:02:26', NULL, NULL, NULL),
(228, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.208.5', '2019-03-15 02:03:10', NULL, NULL, NULL),
(229, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.208.98', '2019-03-15 02:49:47', NULL, NULL, NULL),
(230, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.98', '2019-03-15 05:23:56', NULL, NULL, NULL),
(231, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.98', '2019-03-15 08:11:16', NULL, NULL, NULL),
(232, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.98', '2019-03-15 08:44:21', NULL, NULL, NULL),
(233, 140, 'admin@piccocart.com', 'amit', '49.204.211.216', '2019-03-15 23:03:05', NULL, NULL, NULL),
(234, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.210.3', '2019-03-16 00:05:15', NULL, NULL, NULL),
(235, 140, 'admin@piccocart.com', 'amit', '49.204.211.216', '2019-03-16 04:36:37', NULL, NULL, NULL),
(236, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.116.227', '2019-03-18 00:08:54', NULL, NULL, NULL),
(237, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.228', '2019-03-18 04:58:27', NULL, NULL, NULL),
(238, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.211.228', '2019-03-18 06:59:55', NULL, NULL, NULL),
(239, 161, 'test.picco@gmail.com', 'demo', '49.204.210.123', '2019-03-19 00:52:22', NULL, NULL, NULL),
(240, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.50', '2019-03-19 03:46:45', NULL, NULL, NULL),
(241, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.211.50', '2019-03-19 05:20:16', NULL, NULL, NULL),
(242, 145, 'amit.picco@gmail.com', 'Amit', '157.51.246.2', '2019-03-19 08:17:58', NULL, NULL, NULL),
(243, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.211.41', '2019-03-19 08:56:29', NULL, NULL, NULL),
(244, 166, 'test@gmail.com', 'test', '49.204.211.41', '2019-03-19 09:57:24', NULL, NULL, NULL),
(245, 169, 'testdemo@gmail.com', 'test', '49.204.211.41', '2019-03-19 10:05:41', NULL, NULL, NULL),
(246, 169, 'testdemo@gmail.com', 'test', '49.204.211.41', '2019-03-19 10:08:04', NULL, NULL, NULL),
(247, 171, 'testdemoo@gmail.com', 'test', '49.204.211.41', '2019-03-19 10:13:13', NULL, NULL, NULL),
(248, 166, 'test@gmail.com', 'test', '49.206.114.158', '2019-03-19 23:51:37', NULL, NULL, NULL),
(249, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.147', '2019-03-20 00:17:42', NULL, NULL, NULL),
(250, 149, 'veerapandi.picco@gmail.com', 'veer', '49.206.114.158', '2019-03-20 00:21:27', NULL, NULL, NULL),
(251, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.114.158', '2019-03-20 00:23:42', NULL, NULL, NULL),
(252, 166, 'test@gmail.com', 'test', '49.206.114.158', '2019-03-20 04:59:06', NULL, NULL, NULL),
(253, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.147', '2019-03-20 05:10:52', NULL, NULL, NULL),
(254, 166, 'test@gmail.com', 'test', '49.206.114.158', '2019-03-20 05:16:23', NULL, NULL, NULL),
(255, 166, 'test@gmail.com', 'test', '49.206.114.158', '2019-03-20 06:21:37', NULL, NULL, NULL),
(256, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.114.158', '2019-03-20 07:22:46', NULL, NULL, NULL),
(257, 139, 'amitpiccosoft@gmail.com', 'amit', '49.206.114.158', '2019-03-20 07:47:16', NULL, NULL, NULL),
(258, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.114.158', '2019-03-20 09:18:25', NULL, NULL, NULL),
(259, 139, 'amitpiccosoft@gmail.com', 'amit', '60.243.55.27', '2019-03-20 12:49:52', NULL, NULL, NULL),
(260, 173, 'srilekha@novamed.com', 'Srilekha', '49.206.114.188', '2019-03-20 23:45:07', NULL, NULL, NULL),
(261, 173, 'srilekha@novamed.com', 'srilekha', '49.206.114.188', '2019-03-20 23:49:24', NULL, NULL, NULL),
(262, 173, 'srilekha@novamed.com', 'srilekha', '49.206.114.188', '2019-03-20 23:55:48', NULL, NULL, NULL),
(263, 166, 'test@gmail.com', 'test', '183.82.39.153', '2019-03-21 00:29:42', NULL, NULL, NULL),
(264, 139, 'amitpiccosoft@gmail.com', 'amit', '49.206.114.188', '2019-03-21 00:49:20', NULL, NULL, NULL),
(265, 139, 'amitpiccosoft@gmail.com', 'amit', '49.206.114.188', '2019-03-21 00:57:48', NULL, NULL, NULL),
(266, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.114.188', '2019-03-21 01:00:35', NULL, NULL, NULL),
(267, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.114.188', '2019-03-21 01:11:04', NULL, NULL, NULL),
(268, 149, 'veerapandi.picco@gmail.com', 'veer', '183.82.39.153', '2019-03-21 02:18:43', NULL, NULL, NULL),
(269, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.114.188', '2019-03-21 02:30:57', NULL, NULL, NULL),
(270, 139, 'amitpiccosoft@gmail.com', 'amit', '49.206.114.188', '2019-03-21 02:31:24', NULL, NULL, NULL),
(271, 166, 'test@gmail.com', 'test', '49.204.208.7', '2019-03-21 05:58:08', NULL, NULL, NULL),
(272, 166, 'test@gmail.com', 'test', '49.204.209.84', '2019-03-23 00:12:33', NULL, NULL, NULL),
(273, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.84', '2019-03-23 00:44:46', NULL, NULL, NULL),
(274, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.84', '2019-03-23 00:52:35', NULL, NULL, NULL),
(275, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.84', '2019-03-23 00:53:50', NULL, NULL, NULL),
(276, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.220', '2019-03-23 02:30:45', NULL, NULL, NULL),
(277, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.220', '2019-03-23 04:29:02', NULL, NULL, NULL),
(278, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.206.114.54', '2019-03-25 08:59:42', NULL, NULL, NULL),
(279, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.217.15', '2019-03-25 23:55:46', NULL, NULL, NULL),
(280, 183, 'prabhusivansit@gmail.com', 'prabhu', '116.72.231.15', '2019-03-26 03:49:42', NULL, NULL, NULL),
(281, 145, 'amit.picco@gmail.com', 'Amit', '49.204.216.216', '2019-03-26 08:06:04', NULL, NULL, NULL),
(282, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.218.97', '2019-03-26 08:38:36', NULL, NULL, NULL),
(283, 184, 'keyur@gmail.com', 'keyur', '123.201.226.105', '2019-03-27 02:43:45', NULL, NULL, NULL),
(284, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.208.33', '2019-03-29 08:03:33', NULL, NULL, NULL),
(285, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.208.94', '2019-04-01 05:54:41', NULL, NULL, NULL),
(286, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.208.94', '2019-04-01 06:55:56', NULL, NULL, NULL),
(287, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.142', '2019-04-02 00:31:18', NULL, NULL, NULL),
(288, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.142', '2019-04-02 01:27:42', NULL, NULL, NULL),
(289, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '183.82.246.67', '2019-04-02 07:24:37', NULL, NULL, NULL),
(290, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:34:20', NULL, NULL, NULL),
(291, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.246.67', '2019-04-02 07:35:59', NULL, NULL, NULL),
(292, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:44:49', NULL, NULL, NULL),
(293, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:44:57', NULL, NULL, NULL),
(294, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:46:09', NULL, NULL, NULL),
(295, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:47:24', NULL, NULL, NULL),
(296, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:48:18', NULL, NULL, NULL),
(297, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:49:37', NULL, NULL, NULL),
(298, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:50:42', NULL, NULL, NULL),
(299, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:51:57', NULL, NULL, NULL),
(300, 133, 'ganapathy.picco@gmail.com', 'GanapathyRam', '49.204.209.223', '2019-04-02 07:52:49', NULL, NULL, NULL),
(301, 185, 'hari@gmail.com', 'Hari', '49.204.209.223', '2019-04-02 08:49:19', NULL, NULL, NULL),
(302, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.209.187', '2019-04-04 04:12:29', NULL, NULL, NULL),
(303, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.204.209.67', '2019-04-05 00:52:13', NULL, NULL, NULL),
(304, 192, 'vallarasan.piccosoft@gmail.com', 'Vallarasan T', '49.204.209.67', '2019-04-05 01:13:33', NULL, NULL, NULL),
(305, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.209.67', '2019-04-05 01:17:01', NULL, NULL, NULL),
(306, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.208.240', '2019-04-05 05:33:20', NULL, NULL, NULL),
(307, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.208.240', '2019-04-05 05:34:54', NULL, NULL, NULL),
(308, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.210.227', '2019-04-06 00:55:15', NULL, NULL, NULL),
(309, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '183.82.38.84', '2019-04-06 01:50:40', NULL, NULL, NULL),
(310, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.38.84', '2019-04-06 04:44:29', NULL, NULL, NULL),
(311, 196, 'testing@gmail.com', 'veerapandi', '49.204.210.227', '2019-04-06 05:05:50', NULL, NULL, NULL),
(312, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.209.50', '2019-04-08 00:24:19', NULL, NULL, NULL),
(313, 139, 'amitpiccosoft@gmail.com', 'amit', '183.82.247.250', '2019-04-08 06:16:51', NULL, NULL, NULL),
(314, 139, 'amitpiccosoft@gmail.com', 'amit', '49.206.114.79', '2019-04-09 00:36:29', NULL, NULL, NULL),
(315, 139, 'amitpiccosoft@gmail.com', 'amit', '49.206.114.79', '2019-04-09 02:03:08', NULL, NULL, NULL),
(316, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.114.79', '2019-04-09 02:38:24', NULL, NULL, NULL),
(317, 145, 'amit.picco@gmail.com', 'Amit', '183.82.247.251', '2019-04-09 05:02:31', NULL, NULL, NULL),
(318, 145, 'amit.picco@gmail.com', 'Amit', '183.82.247.251', '2019-04-09 05:28:28', NULL, NULL, NULL),
(319, 145, 'amit.picco@gmail.com', 'Amit', '49.206.114.2', '2019-04-10 04:59:59', NULL, NULL, NULL),
(320, 196, 'testing@gmail.com', 'veerapandi', '49.206.114.2', '2019-04-10 06:50:56', NULL, NULL, NULL),
(321, 185, 'hari@gmail.com', 'Hari', '49.204.218.112', '2019-04-11 00:19:31', NULL, NULL, NULL),
(322, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.210.117', '2019-04-11 04:07:18', NULL, NULL, NULL),
(323, 185, 'hari@gmail.com', 'Hari', '49.204.218.112', '2019-04-11 04:23:55', NULL, NULL, NULL),
(324, 185, 'hari@gmail.com', 'Hari', '49.204.210.203', '2019-04-12 06:43:59', NULL, NULL, NULL),
(325, 185, 'hari@gmail.com', 'Hari', '49.204.210.203', '2019-04-12 06:48:10', NULL, NULL, NULL),
(326, 185, 'hari@gmail.com', 'Hari', '49.204.210.203', '2019-04-12 06:55:44', NULL, NULL, NULL),
(327, 185, 'hari@gmail.com', 'Hari', '49.204.210.203', '2019-04-12 07:25:17', NULL, NULL, NULL),
(328, 185, 'hari@gmail.com', 'Hari', '49.204.210.141', '2019-04-13 00:02:53', NULL, NULL, NULL),
(329, 185, 'hari@gmail.com', 'Hari', '49.204.210.141', '2019-04-13 01:28:27', NULL, NULL, NULL),
(330, 185, 'hari@gmail.com', 'Hari', '49.204.210.125', '2019-04-14 01:34:11', NULL, NULL, NULL),
(331, 185, 'hari@gmail.com', 'Hari', '49.204.210.125', '2019-04-14 02:08:35', NULL, NULL, NULL),
(332, 185, 'hari@gmail.com', 'Hari', '49.204.210.125', '2019-04-14 02:54:05', NULL, NULL, NULL),
(333, 185, 'hari@gmail.com', 'Hari', '49.204.210.125', '2019-04-14 05:14:09', NULL, NULL, NULL),
(334, 185, 'hari@gmail.com', 'Hari', '183.82.247.249', '2019-04-15 04:10:08', NULL, NULL, NULL),
(335, 185, 'hari@gmail.com', 'Hari', '49.204.214.24', '2019-04-15 05:07:33', NULL, NULL, NULL),
(336, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.114.181', '2019-04-16 02:40:53', NULL, NULL, NULL),
(337, 145, 'amit.picco@gmail.com', 'Amit', '49.206.114.181', '2019-04-16 02:52:42', NULL, NULL, NULL),
(338, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.114.181', '2019-04-16 04:16:10', NULL, NULL, NULL),
(339, 192, 'vallarasan.piccosoft@gmail.com', 'Vallarasan T', '49.206.114.181', '2019-04-16 05:13:19', NULL, NULL, NULL),
(340, 145, 'amit.picco@gmail.com', 'Amit', '49.206.114.181', '2019-04-16 05:24:43', NULL, NULL, NULL),
(341, 185, 'hari@gmail.com', 'Hari', '49.204.209.70', '2019-04-16 05:42:39', NULL, NULL, NULL),
(342, 145, 'amit.picco@gmail.com', 'Amit', '49.206.114.181', '2019-04-16 06:29:18', NULL, NULL, NULL),
(343, 185, 'hari@gmail.com', 'Hari', '157.50.75.151', '2019-04-16 23:51:02', NULL, NULL, NULL),
(344, 185, 'hari@gmail.com', 'Hari', '49.206.117.61', '2019-04-17 01:10:46', NULL, NULL, NULL),
(345, 138, 'jayaprakash.picco@gmail.com', 'jayaprakash', '49.206.116.107', '2019-04-17 01:12:50', NULL, NULL, NULL),
(346, 145, 'amit.picco@gmail.com', 'Amit', '49.204.208.91', '2019-04-19 01:57:13', NULL, NULL, NULL),
(347, 185, 'hari@gmail.com', 'Hari', '157.46.13.174', '2019-04-21 23:46:17', NULL, NULL, NULL),
(348, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.218.9', '2019-04-22 00:27:33', NULL, NULL, NULL),
(349, 145, 'amit.picco@gmail.com', 'Amit', '49.204.218.9', '2019-04-22 00:27:34', NULL, NULL, NULL),
(350, 145, 'amit.picco@gmail.com', 'Amit', '49.204.218.9', '2019-04-22 00:28:37', NULL, NULL, NULL),
(351, 145, 'amit.picco@gmail.com', 'Amit', '49.204.218.9', '2019-04-22 02:12:17', NULL, NULL, NULL),
(352, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.218.135', '2019-04-22 04:25:24', NULL, NULL, NULL),
(353, 145, 'amit.picco@gmail.com', 'Amit', '49.204.218.135', '2019-04-22 05:29:07', NULL, NULL, NULL),
(354, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.38.180', '2019-04-23 00:07:25', NULL, NULL, NULL),
(355, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.210.60', '2019-04-23 00:23:17', NULL, NULL, NULL),
(356, 145, 'amit.picco@gmail.com', 'Amit', '49.204.210.60', '2019-04-23 00:24:14', NULL, NULL, NULL),
(357, 143, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.209.6', '2019-04-23 01:25:23', NULL, NULL, NULL),
(358, 145, 'amit.picco@gmail.com', 'Amit', '183.82.38.180', '2019-04-23 08:45:57', NULL, NULL, NULL),
(359, 185, 'hari@gmail.com', 'Hari', '49.204.208.185', '2019-04-23 23:49:02', NULL, NULL, NULL),
(360, 185, 'hari@gmail.com', 'Hari', '49.204.208.185', '2019-04-24 00:23:28', NULL, NULL, NULL),
(361, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 00:23:58', NULL, NULL, NULL),
(362, 185, 'hari@gmail.com', 'Hari', '49.204.208.185', '2019-04-24 00:30:56', NULL, NULL, NULL),
(363, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 00:44:11', NULL, NULL, NULL),
(364, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 01:06:03', NULL, NULL, NULL),
(365, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 01:09:13', NULL, NULL, NULL),
(366, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 01:23:02', NULL, NULL, NULL),
(367, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 02:30:14', NULL, NULL, NULL),
(368, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 04:04:27', NULL, NULL, NULL),
(369, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 05:11:29', NULL, NULL, NULL),
(370, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.17', '2019-04-24 05:25:51', NULL, NULL, NULL),
(371, 185, 'hari@gmail.com', 'Hari', '49.204.208.185', '2019-04-24 08:48:13', NULL, NULL, NULL),
(372, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.210.109', '2019-04-24 23:58:32', NULL, NULL, NULL),
(373, 145, 'amit.picco@gmail.com', 'Amit', '49.204.210.109', '2019-04-24 23:59:23', NULL, NULL, NULL),
(374, 143, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.217.200', '2019-04-25 00:57:34', NULL, NULL, NULL),
(375, 185, 'hari@gmail.com', 'Hari', '49.204.217.200', '2019-04-25 01:18:26', NULL, NULL, NULL),
(376, 145, 'amit.picco@gmail.com', 'Amit', '49.204.210.109', '2019-04-25 04:11:17', NULL, NULL, NULL),
(377, 185, 'hari@gmail.com', 'Hari', '157.50.123.86', '2019-04-25 07:03:01', NULL, NULL, NULL),
(378, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.86', '2019-04-26 00:05:03', NULL, NULL, NULL),
(379, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.86', '2019-04-26 00:10:22', NULL, NULL, NULL),
(380, 185, 'hari@gmail.com', 'Hari', '49.206.115.134', '2019-04-26 00:18:20', NULL, NULL, NULL),
(381, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.86', '2019-04-26 00:30:03', NULL, NULL, NULL),
(382, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.86', '2019-04-26 01:52:46', NULL, NULL, NULL),
(383, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.86', '2019-04-26 01:57:43', NULL, NULL, NULL),
(384, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.86', '2019-04-26 02:04:36', NULL, NULL, NULL),
(385, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.115.134', '2019-04-26 02:31:43', NULL, NULL, NULL),
(386, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.117.86', '2019-04-26 04:09:02', NULL, NULL, NULL),
(387, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.117.86', '2019-04-26 07:43:06', NULL, NULL, NULL),
(388, 145, 'amit.picco@gmail.com', 'Amit', '49.206.115.134', '2019-04-26 09:00:22', NULL, NULL, NULL),
(389, 185, 'hari@gmail.com', 'Hari', '49.204.208.141', '2019-04-27 00:19:58', NULL, NULL, NULL),
(390, 145, 'amit.picco@gmail.com', 'Amit', '183.82.246.123', '2019-04-27 00:34:42', NULL, NULL, NULL),
(391, 145, 'amit.picco@gmail.com', 'Amit', '183.82.246.123', '2019-04-27 00:53:08', NULL, NULL, NULL),
(392, 185, 'hari@gmail.com', 'Hari', '157.50.95.246', '2019-04-27 05:31:25', NULL, NULL, NULL),
(393, 185, 'hari@gmail.com', 'Hari', '157.50.72.64', '2019-04-28 08:55:58', NULL, NULL, NULL),
(394, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.208.16', '2019-04-28 23:52:21', NULL, NULL, NULL),
(395, 185, 'hari@gmail.com', 'Hari', '49.204.208.16', '2019-04-28 23:59:01', NULL, NULL, NULL),
(396, 145, 'amit.picco@gmail.com', 'Amit', '49.204.208.203', '2019-04-29 04:35:00', NULL, NULL, NULL),
(397, 211, 'demodemo@email.com', 'demodemo', '182.52.217.160', '2019-04-29 05:44:23', NULL, NULL, NULL),
(398, 212, 'gurneetgurneet10@gmail.com', 'kabir', '171.48.116.53', '2019-04-29 07:10:56', NULL, NULL, NULL),
(399, 185, 'hari@gmail.com', 'Hari', '49.204.217.173', '2019-04-30 00:11:05', NULL, NULL, NULL),
(400, 213, 'singamuthu@gmail.com', 'Singamuthu', '27.62.38.117', '2019-04-30 04:01:50', NULL, NULL, NULL),
(401, 213, 'shine@gmail.com', 'shine', '49.204.217.173', '2019-04-30 04:11:12', NULL, NULL, NULL),
(402, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.173', '2019-04-30 04:31:01', NULL, NULL, NULL),
(403, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.173', '2019-04-30 04:35:19', NULL, NULL, NULL),
(404, 145, 'amit.picco@gmail.com', 'Amit', '183.82.246.141', '2019-04-30 04:41:16', NULL, NULL, NULL),
(405, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.173', '2019-04-30 04:44:20', NULL, NULL, NULL),
(406, 192, 'vallarasan.piccosoft@gmail.com', 'Vallarasan T', '49.204.217.173', '2019-04-30 04:48:31', NULL, NULL, NULL),
(407, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.173', '2019-04-30 05:47:51', NULL, NULL, NULL),
(408, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.173', '2019-04-30 06:43:54', NULL, NULL, NULL),
(409, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.173', '2019-04-30 07:36:18', NULL, NULL, NULL),
(410, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.173', '2019-04-30 08:08:36', NULL, NULL, NULL),
(411, 185, 'hari@gmail.com', 'Hari', '49.204.217.173', '2019-04-30 09:02:07', NULL, NULL, NULL),
(412, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.245', '2019-05-01 23:54:40', NULL, NULL, NULL),
(413, 145, 'amit.picco@gmail.com', 'Amit', '49.206.114.83', '2019-05-01 23:56:48', NULL, NULL, NULL),
(414, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.245', '2019-05-02 00:44:44', NULL, NULL, NULL),
(415, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.245', '2019-05-02 01:06:55', NULL, NULL, NULL),
(416, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.245', '2019-05-02 01:10:29', NULL, NULL, NULL),
(417, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.114.83', '2019-05-02 01:45:45', NULL, NULL, NULL),
(418, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.206.114.83', '2019-05-02 02:01:44', NULL, NULL, NULL),
(419, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.245', '2019-05-02 03:54:30', NULL, NULL, NULL),
(420, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.245', '2019-05-02 04:53:01', NULL, NULL, NULL),
(421, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.245', '2019-05-02 05:08:06', NULL, NULL, NULL),
(422, 185, 'hari@gmail.com', 'Hari', '49.206.114.83', '2019-05-02 07:27:23', NULL, NULL, NULL),
(423, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.114.83', '2019-05-02 07:41:18', NULL, NULL, NULL),
(424, 185, 'hari@gmail.com', 'Hari', '27.62.32.117', '2019-05-02 07:43:32', NULL, NULL, NULL),
(425, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.114.83', '2019-05-02 07:46:11', NULL, NULL, NULL),
(426, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.245', '2019-05-02 08:18:19', NULL, NULL, NULL),
(427, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.226', '2019-05-02 08:59:13', NULL, NULL, NULL),
(428, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.226', '2019-05-02 09:01:30', NULL, NULL, NULL),
(429, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.226', '2019-05-02 09:12:48', NULL, NULL, NULL),
(430, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.226', '2019-05-02 09:17:42', NULL, NULL, NULL),
(431, 145, 'amit.picco@gmail.com', 'Amit', '49.204.217.226', '2019-05-02 09:23:04', NULL, NULL, NULL),
(432, 185, 'hari@gmail.com', 'Hari', '49.206.114.83', '2019-05-02 09:45:13', NULL, NULL, NULL),
(433, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.208.185', '2019-05-03 00:08:40', NULL, NULL, NULL),
(434, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.208.185', '2019-05-03 00:24:21', NULL, NULL, NULL),
(435, 217, 'vallarasan@gmail.com', 'vallarasan', '49.204.208.185', '2019-05-03 00:35:47', NULL, NULL, NULL),
(436, 218, 'vallarasan@spurt.com', 'vallarasan', '49.204.208.185', '2019-05-03 00:36:43', NULL, NULL, NULL),
(437, 145, 'amit.picco@gmail.com', 'Amit', '49.204.208.185', '2019-05-03 00:43:44', NULL, NULL, NULL),
(438, 185, 'hari@gmail.com', 'Hari', '49.206.116.70', '2019-05-03 01:04:19', NULL, NULL, NULL),
(439, 145, 'amit.picco@gmail.com', 'Amit', '49.204.208.185', '2019-05-03 01:58:51', NULL, NULL, NULL),
(440, 221, 'karthi@gmail.com', 'Karthi K', '49.204.208.185', '2019-05-03 02:03:37', NULL, NULL, NULL),
(441, 221, 'karthi@gmail.com', 'Karthi K', '49.204.208.185', '2019-05-03 02:06:07', NULL, NULL, NULL),
(442, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.208.185', '2019-05-03 04:03:12', NULL, NULL, NULL),
(443, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.116.70', '2019-05-03 05:16:30', NULL, NULL, NULL),
(444, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.208.185', '2019-05-03 06:08:58', NULL, NULL, NULL),
(445, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.208.185', '2019-05-03 07:19:25', NULL, NULL, NULL),
(446, 185, 'hari@gmail.com', 'Hari', '183.82.247.94', '2019-05-03 23:09:58', NULL, NULL, NULL),
(447, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.209.24', '2019-05-04 00:25:59', NULL, NULL, NULL),
(448, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.24', '2019-05-04 00:39:53', NULL, NULL, NULL),
(449, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.246.77', '2019-05-04 04:12:00', NULL, NULL, NULL),
(450, 145, 'amit.picco@gmail.com', 'Amit', '183.82.39.126', '2019-05-04 04:16:26', NULL, NULL, NULL),
(451, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.246.77', '2019-05-04 04:43:23', NULL, NULL, NULL),
(452, 145, 'amit.picco@gmail.com', 'Amit', '183.82.39.126', '2019-05-04 05:14:26', NULL, NULL, NULL),
(453, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '183.82.39.126', '2019-05-04 06:29:41', NULL, NULL, NULL),
(454, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.39.126', '2019-05-06 00:03:57', NULL, NULL, NULL),
(455, 145, 'amit.picco@gmail.com', 'Amit', '183.82.39.126', '2019-05-06 00:14:52', NULL, NULL, NULL),
(456, 145, 'amit.picco@gmail.com', 'Amit', '183.82.39.126', '2019-05-06 00:48:01', NULL, NULL, NULL),
(457, 145, 'amit.picco@gmail.com', 'Amit', '183.82.39.126', '2019-05-06 01:08:20', NULL, NULL, NULL),
(458, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '183.82.39.126', '2019-05-06 02:55:04', NULL, NULL, NULL),
(459, 145, 'amit.picco@gmail.com', 'Amit', '183.82.39.126', '2019-05-06 05:30:29', NULL, NULL, NULL),
(460, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.39.126', '2019-05-06 05:36:48', NULL, NULL, NULL),
(461, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.39.126', '2019-05-06 05:38:59', NULL, NULL, NULL),
(462, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.39.126', '2019-05-06 07:24:56', NULL, NULL, NULL),
(463, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.39.126', '2019-05-06 07:25:56', NULL, NULL, NULL),
(464, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.218.56', '2019-05-06 07:45:25', NULL, NULL, NULL),
(465, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.218.56', '2019-05-06 08:06:24', NULL, NULL, NULL),
(466, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.218.56', '2019-05-06 09:54:30', NULL, NULL, NULL),
(467, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.117.137', '2019-05-06 23:37:30', NULL, NULL, NULL),
(468, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.117.137', '2019-05-06 23:51:07', NULL, NULL, NULL),
(469, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.209.101', '2019-05-07 00:50:12', NULL, NULL, NULL),
(470, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.209.101', '2019-05-07 00:57:25', NULL, NULL, NULL),
(471, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.101', '2019-05-07 01:07:05', NULL, NULL, NULL),
(472, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.101', '2019-05-07 01:08:36', NULL, NULL, NULL),
(473, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.209.101', '2019-05-07 01:09:02', NULL, NULL, NULL),
(474, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.101', '2019-05-07 03:00:31', NULL, NULL, NULL),
(475, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.101', '2019-05-07 04:03:03', NULL, NULL, NULL),
(476, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.101', '2019-05-07 04:15:34', NULL, NULL, NULL),
(477, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.209.101', '2019-05-07 04:25:14', NULL, NULL, NULL),
(478, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.209.101', '2019-05-07 04:45:29', NULL, NULL, NULL),
(479, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.209.101', '2019-05-07 05:01:51', NULL, NULL, NULL),
(480, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.117.137', '2019-05-07 08:08:00', NULL, NULL, NULL),
(481, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.247.116', '2019-05-07 23:38:01', NULL, NULL, NULL),
(482, 145, 'amit.picco@gmail.com', 'Amit', '183.82.247.55', '2019-05-08 00:28:12', NULL, NULL, NULL),
(483, 145, 'amit.picco@gmail.com', 'Amit', '183.82.247.55', '2019-05-08 00:46:58', NULL, NULL, NULL),
(484, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '183.82.247.116', '2019-05-08 01:34:35', NULL, NULL, NULL),
(485, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.247.55', '2019-05-08 01:40:14', NULL, NULL, NULL),
(486, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.247.116', '2019-05-08 03:57:05', NULL, NULL, NULL),
(487, 145, 'amit.picco@gmail.com', 'Amit', '183.82.247.55', '2019-05-08 04:11:50', NULL, NULL, NULL),
(488, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '183.82.247.116', '2019-05-08 04:46:38', NULL, NULL, NULL),
(489, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '183.82.247.55', '2019-05-08 05:17:00', NULL, NULL, NULL),
(490, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.247.116', '2019-05-08 07:15:31', NULL, NULL, NULL),
(491, 145, 'amit.picco@gmail.com', 'Amit', '183.82.247.116', '2019-05-08 08:54:37', NULL, NULL, NULL),
(492, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.247.116', '2019-05-08 09:14:43', NULL, NULL, NULL),
(493, 145, 'amit.picco@gmail.com', 'Amit', '183.82.247.116', '2019-05-08 09:15:13', NULL, NULL, NULL),
(494, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.251', '2019-05-08 23:45:44', NULL, NULL, NULL),
(495, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '183.82.246.9', '2019-05-08 23:46:18', NULL, NULL, NULL),
(496, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.251', '2019-05-09 00:27:34', NULL, NULL, NULL),
(497, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.251', '2019-05-09 00:32:47', NULL, NULL, NULL),
(498, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.251', '2019-05-09 00:34:01', NULL, NULL, NULL),
(499, 214, 'ganapathyd.picco@gmail.com', 'sivaGanapathy', '49.204.211.251', '2019-05-09 00:34:49', NULL, NULL, NULL),
(500, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.251', '2019-05-09 00:54:46', NULL, NULL, NULL),
(501, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.218.32', '2019-05-09 00:59:06', NULL, NULL, NULL),
(502, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.251', '2019-05-09 01:38:32', NULL, NULL, NULL),
(503, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.251', '2019-05-09 01:39:40', NULL, NULL, NULL),
(504, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.251', '2019-05-09 02:06:57', NULL, NULL, NULL);
INSERT INTO `login_log` (`id`, `customer_id`, `email_id`, `first_name`, `ip_address`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(505, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.251', '2019-05-09 02:23:44', NULL, NULL, NULL),
(506, 145, 'amit.picco@gmail.com', 'Amit', '49.204.211.251', '2019-05-09 03:32:02', NULL, NULL, NULL),
(507, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.251', '2019-05-09 07:08:19', NULL, NULL, NULL),
(508, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.211.251', '2019-05-09 07:11:51', NULL, NULL, NULL),
(509, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.204.209.204', '2019-05-09 07:59:25', NULL, NULL, NULL),
(510, 139, 'amitpiccosoft@gmail.com', 'amit', '49.204.218.32', '2019-05-09 08:24:10', NULL, NULL, NULL),
(511, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.116.175', '2019-05-10 01:38:03', NULL, NULL, NULL),
(512, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.116.175', '2019-05-10 02:00:52', NULL, NULL, NULL),
(513, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.60', '2019-05-10 02:02:34', NULL, NULL, NULL),
(514, 194, 'sou.piccosoft@gmail.com', 'soundariyaa', '49.206.116.175', '2019-05-10 03:55:24', NULL, NULL, NULL),
(515, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.117.60', '2019-05-10 04:14:02', NULL, NULL, NULL),
(516, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.60', '2019-05-10 04:29:19', NULL, NULL, NULL),
(517, 145, 'amit.picco@gmail.com', 'Amit', '49.206.117.60', '2019-05-10 04:46:21', NULL, NULL, NULL),
(518, 185, 'hari@gmail.com', 'Hari', '49.206.116.175', '2019-05-10 06:49:49', NULL, NULL, NULL),
(519, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.117.60', '2019-05-10 08:52:08', NULL, NULL, NULL),
(520, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.117.60', '2019-05-10 08:53:39', NULL, NULL, NULL),
(521, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.206.116.175', '2019-05-10 09:32:30', NULL, NULL, NULL),
(522, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.208.60', '2019-05-10 23:48:22', NULL, NULL, NULL),
(523, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.208.60', '2019-05-11 00:07:33', NULL, NULL, NULL),
(524, 145, 'amit.picco@gmail.com', 'Amit', '49.204.208.60', '2019-05-11 02:44:41', NULL, NULL, NULL),
(525, 145, 'amit.picco@gmail.com', 'Amit', '49.204.209.204', '2019-05-11 03:52:27', NULL, NULL, NULL),
(526, 145, 'amit.picco@gmail.com', 'Amit', '49.204.208.179', '2019-05-11 06:42:31', NULL, NULL, NULL),
(527, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '183.82.38.79', '2019-05-11 07:07:09', NULL, NULL, NULL),
(528, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '27.62.41.33', '2019-05-11 07:38:08', NULL, NULL, NULL),
(529, 223, 'developer.suresh@gmail.com', 'suresh s', '49.204.210.70', '2019-05-12 01:09:01', NULL, NULL, NULL),
(530, 224, 'hard@hotmail.com', 'Tiago', '187.39.86.27', '2019-05-12 18:31:55', NULL, NULL, NULL),
(531, 142, 'vijayalakshmi.picco@gmail.com', 'viji', '49.204.210.37', '2019-05-12 23:43:12', NULL, NULL, NULL),
(532, 227, 'veerapandi.picco@gmail.com', 'veerapandi', '49.204.210.37', '2019-05-12 23:59:39', NULL, NULL, NULL),
(533, 228, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.210.37', '2019-05-13 01:10:02', NULL, NULL, NULL),
(534, 228, 'aravind.picco@gmail.com', 'Aravindhan', '49.204.210.37', '2019-05-13 01:10:30', NULL, NULL, NULL),
(535, 229, 'ganesh.picco@gmail.com', 'ganesh', '49.204.210.37', '2019-05-13 01:17:50', NULL, NULL, NULL),
(536, 142, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.210.37', '2019-05-13 02:40:19', NULL, NULL, NULL),
(537, 230, 'ganesh@gmail.com', 'ganesh v', '49.204.210.37', '2019-05-13 02:51:11', NULL, NULL, NULL),
(538, 230, 'ganesh@gmail.com', 'ganesh v', '49.204.210.37', '2019-05-13 03:01:20', NULL, NULL, NULL),
(539, 230, 'ganesh@gmail.com', 'ganesh v', '49.204.210.37', '2019-05-13 03:04:20', NULL, NULL, NULL),
(540, 142, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.210.37', '2019-05-13 03:06:59', NULL, NULL, NULL),
(541, 229, 'ganesh.picco@gmail.com', 'ganesh', '49.204.210.37', '2019-05-13 04:11:49', NULL, NULL, NULL),
(542, 142, 'vijayalakshmi.picco@gmail.com', 'vijayalakshmi', '49.204.210.37', '2019-05-13 05:08:42', NULL, NULL, NULL),
(543, 227, 'veerapandi.picco@gmail.com', 'veerapandi', '49.204.210.37', '2019-05-13 08:42:02', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `manufacturer`
--

CREATE TABLE `manufacturer` (
  `manufacturer_id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manufacturer`
--

INSERT INTO `manufacturer` (`manufacturer_id`, `name`, `image`, `image_path`, `sort_order`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(23, 'lenovo', 'Img_1551441402650.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-03-01 05:56:42', '2019-05-11 06:02:23'),
(41, 'DELL', 'Img_1552986470668.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-03-19 04:07:50', '2019-05-06 06:35:33'),
(63, 'SAMSUNG', 'Img_1557142453946.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:34:13', '2019-05-06 06:35:38'),
(65, 'SONY', 'Img_1557142513992.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:35:13', '2019-05-06 06:47:51'),
(67, 'TRESEMME', 'Img_1557142625878.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:37:05', NULL),
(68, 'AXE', 'Img_1557142652359.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:37:32', NULL),
(69, 'GUESS', 'Img_1557142692156.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:38:12', NULL),
(70, 'DICCO', 'Img_1557142708681.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:38:28', NULL),
(71, 'LANCOME', 'Img_1557142729644.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:38:49', NULL),
(72, 'BOSS', 'Img_1557142753865.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:39:13', NULL),
(73, 'PHILIPS', 'Img_1557142776597.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:39:36', NULL),
(74, 'PARAGON', 'Img_1557142795787.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:39:55', NULL),
(75, 'BATA', 'Img_1557142813929.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:40:13', NULL),
(76, 'ADDIDAS', 'Img_1557142832027.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:40:32', NULL),
(77, 'GODREJ', 'Img_1557142854831.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:40:54', NULL),
(79, 'RED MI', 'Img_1557142894352.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:41:34', NULL),
(80, 'OPPO', 'Img_1557142914475.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:41:54', NULL),
(81, 'PETER ENGLAND', 'Img_1557142932385.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:42:12', NULL),
(82, 'RAMRAJ', 'Img_1553152687455.jpeg', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:42:37', NULL),
(83, 'LEVIS', 'Img_1557142984015.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:43:04', NULL),
(84, 'PATHANJALI', 'Img_1557143005785.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:43:25', NULL),
(85, 'LIFEBOY', 'Img_1557143031675.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:43:51', NULL),
(86, 'CLINIC PLUS', 'Img_1557143046803.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:44:06', NULL),
(87, 'UDHAIYAM', 'Img_1557143066637.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:44:26', NULL),
(88, 'ACHI', 'Img_1557143084492.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:44:44', NULL),
(89, 'BRITANIA', 'Img_1557143109064.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:45:09', NULL),
(90, 'HAMAM', 'Img_1557143204374.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:46:44', NULL),
(91, 'HATSUN', 'Img_1557143220906.jpeg', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:47:00', NULL),
(92, 'AAVIN', 'Img_1557143239110.png', 'manufacturer/', 4, 1, NULL, NULL, '2019-05-06 06:47:19', NULL),
(93, 'HP', 'Img_1557143358764.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:49:18', NULL),
(94, 'OTTO', 'Img_1557143401131.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 06:50:01', NULL),
(95, 'MOTO', 'Img_1557144311605.png', 'manufacturer/', 2, 1, NULL, NULL, '2019-05-06 07:05:11', NULL),
(96, 'TITAN', 'Img_1557401673782.png', 'manufacturer/', 10, 1, NULL, NULL, '2019-05-09 06:34:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(11) NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `timestamp`, `name`) VALUES
(1, 1546513939916, 'CreateUserTable1546513939916'),
(2, 1546516990326, 'CreateUserGroupTable1546516990326'),
(3, 1546521833384, 'CreateUserRelationToUserGroupTable1546521833384'),
(4, 1546522725201, 'CreateCategoryTable1546522725201'),
(5, 1546523068121, 'CreateZoneToGeoZoneTable1546523068121'),
(6, 1546523201059, 'CreateCustomerGroupTable1546523201059'),
(7, 1546523577052, 'CreateCustomerIpTable1546523577052'),
(8, 1546523725119, 'CreateGeoZoneTable1546523725119'),
(9, 1546523802480, 'CreateBannerGroupTable1546523802480'),
(10, 1546524333028, 'CreateCurrencyTable1546524333028'),
(11, 1546524561001, 'CreateCustomerTable1546524561001'),
(12, 1546525248338, 'CreateAddessTable1546525248338'),
(13, 1546525786783, 'CreateBannerImageTable1546525786783'),
(14, 1546525833396, 'CreateStockStatusTable1546525833396'),
(15, 1546526076621, 'CreateBannerTable1546526076621'),
(16, 1546526936010, 'CreateBannerImageDescriptionTable1546526936010'),
(17, 1546527306595, 'CreateCustomerTransactionTable1546527306595'),
(18, 1546528787878, 'CreateProductTable1546528787878'),
(19, 1546529746397, 'CreateProductRelatedTable1546529746397'),
(20, 1546529906290, 'CreateManufacturerTable1546529906290'),
(21, 1546530096773, 'CreateProductTagTable1546530096773'),
(22, 1546578299514, 'CreateLanguageTable1546578299514'),
(23, 1546578412979, 'AddProductRelatedRelationToProductTable1546578412979'),
(24, 1546578790576, 'CreateCategoryDescriptionTable1546578790576'),
(25, 1546579410193, 'CreateProductImageTable1546579410193'),
(26, 1546579597970, 'CreateEmailTemplateTable1546579597970'),
(27, 1546579614441, 'CreateProductDescriptionTable1546579614441'),
(28, 1546579884423, 'CreateProductToCategoryTable1546579884423'),
(29, 1546580085881, 'CreateCountryTable1546580085881'),
(30, 1546580179314, 'CreateProductDiscountTable1546580179314'),
(31, 1546580427531, 'CreateProductRatingTable1546580427531'),
(32, 1546580612161, 'CreateZoneTable1546580612161'),
(33, 1546580872313, 'CreateOrderProductTable1546580872313'),
(34, 1546580970382, 'CreateSettingsTable1546580970382'),
(35, 1546581203387, 'CreateOrderOptionTable1546581203387'),
(36, 1546581429998, 'CreateOrderTotalTable1546581429998'),
(37, 1546581683040, 'CreatePageGroupTable1546581683040'),
(38, 1546581933917, 'CreateOrderHistoryTable1546581933917'),
(39, 1546582132870, 'CreateOrderStatusTable1546582132870'),
(40, 1546582513520, 'CreatePageTable1546582513520'),
(41, 1546585163896, 'AddProductImageRelationToProductTable1546585163896'),
(42, 1546585326281, 'AddProductDiscountRelationToProductTable1546585326281'),
(43, 1546585460413, 'AddProductRatingRelationToProductTable1546585460413'),
(44, 1546585572765, 'AddPageRelationToPageGroupTable1546585572765'),
(45, 1546586351105, 'CreateZoneCountryRelationToZoneGeoTable1546586351105'),
(46, 1546587376381, 'CreateOrderTable1546587376381'),
(47, 1546588310183, 'CreateCountryRelationToZoneGeoTable1546588310183'),
(48, 1546588504951, 'CreateZoneRelationToCountryTable1546588504951'),
(49, 1546590314988, 'CreateCountryRelationToSettingsTable1546590314988'),
(50, 1546590433005, 'AddPoductToCategoryRelationToProductTable1546590433005'),
(51, 1546590872444, 'AddPoductToCategoryRelationToCategoryTable1546590872444'),
(52, 1546592870823, 'AddCustomerTransactionRelationToOrderTable1546592870823'),
(53, 1546593012207, 'AddCustomerTransactionRelationToCustomerTable1546593012207'),
(54, 1546593289549, 'AddOrderProductRelationToProductTable1546593289549'),
(55, 1546593359310, 'AddOrderProductRelationToOrderTable1546593359310'),
(56, 1546593427323, 'CreateCategoryRelationToCategoryDescriptionTable1546593427323'),
(57, 1546593494331, 'AddOrderOptionRelationToOrderTable1546593494331'),
(58, 1546593946185, 'AddOrderOptionRelationToOrderProductTable1546593946185'),
(59, 1546594100673, 'CreatebannerRelationToBannerImageDescriptionTable1546594100673'),
(60, 1546594184432, 'AddOrderHistoryRelationToOrderTable1546594184432'),
(61, 1546594262644, 'AddOrderHistoryRelationToOrderStatusTable1546594262644'),
(62, 1546594411489, 'CreateBannerImageRelationToBannerImageDescriptionTable1546594411489'),
(63, 1546594752832, 'AddOrderRelationToCustomerTable1546594752832'),
(64, 1546594852304, 'AddOrderRelationToCurrencyTable1546594852304'),
(65, 1546602183498, 'CreateBannerGroupRelationToBannerTable1546602183498');

-- --------------------------------------------------------

--
-- Table structure for table `option`
--

CREATE TABLE `option` (
  `option_id` int(11) NOT NULL,
  `type` varchar(32) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `option_description`
--

CREATE TABLE `option_description` (
  `option_description_id` int(11) NOT NULL,
  `option_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `option_value`
--

CREATE TABLE `option_value` (
  `option_value_id` int(11) NOT NULL,
  `option_id` int(11) DEFAULT NULL,
  `image` text,
  `image_path` varchar(255) DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `option_value_description`
--

CREATE TABLE `option_value_description` (
  `option_value_description_id` int(11) NOT NULL,
  `option_value_id` int(11) DEFAULT NULL,
  `option_id` int(11) DEFAULT NULL,
  `language_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `currency_id` int(11) DEFAULT NULL,
  `shipping_zone_id` int(11) DEFAULT NULL,
  `payment_zone_id` int(11) DEFAULT NULL,
  `shipping_country_id` int(11) DEFAULT NULL,
  `payment_country_id` int(11) DEFAULT NULL,
  `invoice_no` varchar(45) DEFAULT NULL,
  `invoice_prefix` varchar(45) DEFAULT NULL,
  `order_prefix_id` varchar(255) DEFAULT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `email` varchar(96) DEFAULT NULL,
  `telephone` varchar(32) DEFAULT NULL,
  `fax` varchar(32) DEFAULT NULL,
  `shipping_firstname` varchar(32) DEFAULT NULL,
  `shipping_lastname` varchar(32) DEFAULT NULL,
  `shipping_company` varchar(32) DEFAULT NULL,
  `shipping_address_1` varchar(128) DEFAULT NULL,
  `shipping_address_2` varchar(128) DEFAULT NULL,
  `shipping_city` varchar(128) DEFAULT NULL,
  `shipping_postcode` varchar(10) DEFAULT NULL,
  `shipping_country` varchar(128) DEFAULT NULL,
  `shipping_zone` varchar(128) DEFAULT NULL,
  `shipping_address_format` text,
  `shipping_method` varchar(128) DEFAULT NULL,
  `payment_firstname` varchar(32) DEFAULT NULL,
  `payment_lastname` varchar(32) DEFAULT NULL,
  `payment_company` varchar(32) DEFAULT NULL,
  `payment_address_1` varchar(128) DEFAULT NULL,
  `payment_address_2` varchar(128) DEFAULT NULL,
  `payment_city` varchar(128) DEFAULT NULL,
  `payment_postcode` varchar(10) DEFAULT NULL,
  `payment_country` varchar(128) DEFAULT NULL,
  `payment_zone` varchar(128) DEFAULT NULL,
  `payment_address_format` text,
  `payment_method` varchar(128) DEFAULT NULL,
  `comment` text,
  `total` decimal(10,0) DEFAULT NULL,
  `reward` int(8) DEFAULT NULL,
  `order_status_id` int(11) DEFAULT NULL,
  `affiliate_id` int(11) DEFAULT NULL,
  `commision` decimal(10,0) DEFAULT NULL,
  `currency_code` varchar(3) DEFAULT NULL,
  `currency_value` decimal(11,0) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `payment_flag` int(3) DEFAULT NULL,
  `order_name` varchar(32) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `order_history_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `order_status_id` int(11) DEFAULT NULL,
  `notify` tinytext,
  `comment` text,
  `date_added` datetime DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_log`
--

CREATE TABLE `order_log` (
  `order_log_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `currency_id` int(11) DEFAULT NULL,
  `shipping_zone_id` int(11) DEFAULT NULL,
  `payment_zone_id` int(11) DEFAULT NULL,
  `shipping_country_id` int(11) DEFAULT NULL,
  `payment_country_id` int(11) DEFAULT NULL,
  `invoice_no` varchar(45) DEFAULT NULL,
  `invoice_prefix` varchar(26) DEFAULT NULL,
  `order_prefix_id` varchar(11) DEFAULT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `email` varchar(96) DEFAULT NULL,
  `telephone` varchar(32) DEFAULT NULL,
  `fax` varchar(32) DEFAULT NULL,
  `shipping_firstname` varchar(32) DEFAULT NULL,
  `shipping_lastname` varchar(32) DEFAULT NULL,
  `shipping_company` varchar(32) DEFAULT NULL,
  `shipping_address_1` varchar(128) DEFAULT NULL,
  `shipping_address_2` varchar(128) DEFAULT NULL,
  `shipping_city` varchar(128) DEFAULT NULL,
  `shipping_postcode` varchar(10) DEFAULT NULL,
  `shipping_country` varchar(128) DEFAULT NULL,
  `shipping_zone` varchar(128) DEFAULT NULL,
  `shipping_address_format` text,
  `shipping_method` varchar(128) DEFAULT NULL,
  `payment_firstname` varchar(32) DEFAULT NULL,
  `payment_lastname` varchar(32) DEFAULT NULL,
  `payment_company` varchar(32) DEFAULT NULL,
  `payment_address_1` varchar(128) DEFAULT NULL,
  `payment_address_2` varchar(128) DEFAULT NULL,
  `payment_city` varchar(128) DEFAULT NULL,
  `payment_postcode` varchar(10) DEFAULT NULL,
  `payment_country` varchar(128) DEFAULT NULL,
  `payment_zone` varchar(128) DEFAULT NULL,
  `payment_address_format` text,
  `payment_method` varchar(128) DEFAULT NULL,
  `comment` text,
  `total` decimal(15,4) DEFAULT NULL,
  `reward` int(8) DEFAULT NULL,
  `order_status_id` int(11) DEFAULT NULL,
  `affiliate_id` int(11) DEFAULT NULL,
  `commision` decimal(10,0) DEFAULT NULL,
  `currency_code` varchar(3) DEFAULT NULL,
  `currency_value` decimal(11,0) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `payment_flag` int(3) DEFAULT NULL,
  `order_name` varchar(32) DEFAULT NULL,
  `is_active` varchar(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_option`
--

CREATE TABLE `order_option` (
  `order_option_id` int(11) NOT NULL,
  `product_option_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `order_product_id` int(11) DEFAULT NULL,
  `product_option_value_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `value` text NOT NULL,
  `type` varchar(32) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE `order_product` (
  `order_product_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `quantity` int(4) NOT NULL,
  `trace` decimal(15,4) DEFAULT NULL,
  `product_price` decimal(15,4) DEFAULT NULL,
  `total` decimal(15,4) NOT NULL,
  `tax` decimal(15,4) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `order_status_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `color_code` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`order_status_id`, `name`, `color_code`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1, 'Pending', '#6798e3', 0, NULL, NULL, '2019-02-19 04:04:03', '2019-05-07 06:32:39'),
(2, 'Completed', '#25a006', 1, NULL, NULL, '2019-02-19 04:04:21', '2019-04-05 02:34:14'),
(3, 'Hold', '#f71d1d', 1, NULL, NULL, '2019-02-19 04:04:58', '2019-03-19 08:00:50');

-- --------------------------------------------------------

--
-- Table structure for table `order_total`
--

CREATE TABLE `order_total` (
  `order_total_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT NULL,
  `value` decimal(15,4) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `page`
--

CREATE TABLE `page` (
  `page_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `intro` text,
  `full_text` text,
  `page_group_id` int(11) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` varchar(255) DEFAULT NULL,
  `meta_tag_keywords` varchar(255) DEFAULT NULL,
  `view_page_count` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `page`
--

INSERT INTO `page` (`page_id`, `title`, `intro`, `full_text`, `page_group_id`, `sort_order`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords`, `view_page_count`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(130, 'COMPANY', NULL, '<ul>\n	<li>\n	<p>This InDesign Brochure is Clean &amp; Professional. Create your company&#39;s documentation quick and easy. The template comes with paragraph and character styles, swatches, styles for your spreadsheet / financial info, block quotes, key figures layout, and much more</p>\n	</li>\n</ul>\n', NULL, NULL, 'Company Profile', 'If you continue to have trouble, check out this help file for more tips.', 'company profile', NULL, 0, NULL, NULL, '2019-03-14 06:08:56', '2019-04-04 05:00:40'),
(132, 'RESOURCES', NULL, '<h2><img alt="" src="https://www.google.com/url?sa=i&amp;source=images&amp;cd=&amp;cad=rja&amp;uact=8&amp;ved=2ahUKEwjNqoesyoHhAhUI7HMBHQuNAu8QjRx6BAgBEAU&amp;url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&amp;psig=AOvVaw3BVX6YphWlhIlgpF7S6C_i&amp;ust=1552651106648620" /></h2>\n\n<p>&nbsp;</p>\n\n<h2>a stock or supply of money, materials, staff, and other assets that can be drawn on by a person or organization in order to function effectivel.</h2>\n', NULL, NULL, 'Resources information', 'New Resources Page full of information @2019', ' Resources Page full of information', NULL, 1, NULL, NULL, '2019-03-14 06:16:25', '2019-03-15 00:38:22'),
(133, 'ABOUT US', NULL, '<p><strong>piccocart.com&nbsp;is an Indian e-commerce company based in Chennai, India. Founded by Mr&nbsp;</strong><strong>Suresh Sekar, the company initially focused on software Development, before expanding into other product categories such as consumer electronics, fashion, and lifestyle products.</strong></p>\n', NULL, NULL, 'about us', 'about us', 'The total cost of ownership for software created in this manner is reduced', NULL, 0, NULL, NULL, '2019-03-14 06:30:33', '2019-05-06 08:05:28'),
(138, 'PAGE INFO', NULL, '<p>Description of the page</p>\n', NULL, NULL, '', '', '', NULL, 0, NULL, NULL, '2019-03-21 00:31:43', '2019-05-06 08:05:10');

-- --------------------------------------------------------

--
-- Table structure for table `page_group`
--

CREATE TABLE `page_group` (
  `page_group_id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `sku` varchar(64) DEFAULT NULL,
  `upc` varchar(12) DEFAULT NULL,
  `quantity` int(4) DEFAULT NULL,
  `stock_status_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_path` text,
  `manufacturer_id` int(11) DEFAULT NULL,
  `shipping` tinyint(4) DEFAULT NULL,
  `price` decimal(10,0) NOT NULL,
  `date_available` date DEFAULT NULL,
  `sort_order` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  `amount` float DEFAULT NULL,
  `meta_tag_title` varchar(255) DEFAULT NULL,
  `meta_tag_description` varchar(255) DEFAULT NULL,
  `meta_tag_keyword` varchar(255) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `subtract_stock` int(11) DEFAULT NULL COMMENT '0->no 1->yes',
  `minimum_quantity` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `wishlist_status` int(11) DEFAULT NULL,
  `delete_flag` int(11) NOT NULL DEFAULT '0',
  `is_featured` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `condition` int(11) DEFAULT NULL COMMENT '1->new 2->used',
  `today_deals` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `sku`, `upc`, `quantity`, `stock_status_id`, `image`, `image_path`, `manufacturer_id`, `shipping`, `price`, `date_available`, `sort_order`, `name`, `description`, `amount`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keyword`, `discount`, `subtract_stock`, `minimum_quantity`, `location`, `wishlist_status`, `delete_flag`, `is_featured`, `rating`, `condition`, `today_deals`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(286, 'AB000012', '23324442555', 100, 2, NULL, NULL, 73, 1, '70000', '2019-05-11', 1, 'Sony DSC W830 Cyber-shot 20.1 MP Point and Shoot Camera', '<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Super HAD CCD sensor with 20.1 effective megapixels<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;720p MP4 movie mode the camera shoots 1280 x 720 high definition movies at 30 fps<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;8x optical zoom Carl Zeiss Vario Tessar lens.Refer user manual<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Equipped with sweep panorama, intelligent auto and picture effect<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;2.7-inch (230K dots) clear photo LCD display, Fpr any queries call brand toll free number: 18001037799</p>\n', NULL, 'Sony DSC W830 Cyber-shot 20.1 MP Point and Shoot Camera', NULL, NULL, NULL, 1, 20, 'Tamin nadu', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 04:39:46', '2019-05-11 05:29:54'),
(287, 'AB000012', '23334335446', 100, 2, NULL, NULL, 63, 1, '91900', '2019-05-12', 1, 'Apple iPhone X', '<p>Size name:&nbsp;64GB</p>\n\n<ul>\n	<li>5.8-inch Super Retina display (OLED) with HDR</li>\n	<li>IP67 water and dust resistant (maximum depth of 1 meter up to 30 minutes)</li>\n	<li>12MP dual cameras with dual OIS and 7MP TrueDepth front camera&mdash;Portrait mode and Portrait Lighting</li>\n	<li>Face ID for secure authentication</li>\n	<li>A11 Bionic with Neural Engine</li>\n	<li>Wireless charging&mdash;works with Qi chargers</li>\n	<li>iOS 12 with Memoji, Screen Time, Siri Shortcuts, and Group FaceTime</li>\n</ul>\n', NULL, 'Apple iPhone X', NULL, NULL, NULL, 1, 20, 'Tamin nadu', 0, 0, 1, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 04:50:42', '2019-05-13 04:43:41'),
(288, 'AB000014', '544453336444', 100, 2, NULL, NULL, 63, 1, '20000', '2019-05-10', 1, 'Samsung Guru 1200', '<p>oly Ringtone, Mini-SIM<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;1.52-inch TFT screen with 128x128 pixels resolution; Network: GSM (900/1,800MHz)<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Samsung proprietary operating system<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;800mAH battery providing talktime of 7 hours and standby time of 720 hours<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;1 year manufacturer warranty for device and 6 month manufacturer warranty for in-box accessories including batteries from the date of purchase<br />\n&nbsp;</p>\n', NULL, 'Samsung Guru 1200', NULL, NULL, NULL, 1, 20, 'India', 0, 0, 1, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 04:58:37', '2019-05-11 05:29:54'),
(289, 'V1100', '', 100, 2, NULL, NULL, 23, 2, '28990', '2019-05-10', 1, 'Vivo V11 Pro (Starry Night Black, 6GB RAM, 64GB Storage)', '<ul>\n	<li>Camera: 12+5 MP Dual pixel rear camera with Ultra HD mode, PPT mode, Professional mode, Slow motion, Time-lapse photography, Camera filter, Live photo, Bokeh mode, HDR mode, AI face beauty, Panorama, Palm capture, Gender detection, Retina flash, AR stickers, AI face shaping, Time watermark, AI selfie lighting, AI scene recognition, Google lens, AI portrait framing | 25 MP front camera</li>\n	<li>Display: 16.29 centimetres (6.41-inch) FHD+ Super AMOLED capacitive touchscreen with 2340x1080 pixels, 403 ppi pixel density and 19.5:9 aspect ratio ; V11 Pro comes with an optical fingerprint sensor hidden beneath the display</li>\n	<li>Memory, Storage &amp; SIM: 6GB RAM | 64GB storage expandable up to 256GB | Dual nano SIM with dual-standby (4G+4G)</li>\n	<li>Operating System and Processor: Android v8.1 Oreo based on Funtouch 4.5 operating system with Qualcomm Snapdragon 660AIE octa core processor</li>\n	<li>Battery: 3400 mAH lithium ion battery with Dual-Engine fast charging</li>\n	<li>Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase,for any issues, reach out to brand at 18001023388</li>\n	<li>Included in box: Earphone, Micro USB to USB Cable, USB power adapter, Protective case</li>\n</ul>\n', NULL, '', NULL, NULL, NULL, 1, 2, '', 0, 0, 1, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 05:10:27', '2019-05-10 07:28:49'),
(290, 'AB000018', '54446555766', 100, 2, NULL, NULL, 93, 1, '40000', '2019-05-10', 1, ' HP Pavilion-15-cc134Tx 2017 15.6-inch Laptop', '<p>1.8GHz Intel core_i7 processor<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;8GB DDR4 RAM<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;2TB Serial ATA hard drive<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;15.6-inch screen, NVIDIA GeForce 940MX (4 GB DDR3 dedicated) 4GB Graphics<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Windows 10 home operating system<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;0.30 kg laptop<br />\n&nbsp;</p>\n', NULL, ' HP Pavilion-15-cc134Tx 2017 15.6-inch Laptop', NULL, NULL, NULL, 1, 20, 'India', 0, 0, 1, 0, 1, 1, 1, NULL, NULL, '2019-05-10 05:23:03', '2019-05-12 01:13:20'),
(292, 'ST00004', '2778668990', 100, 2, NULL, NULL, 76, 1, '400', '2019-05-07', 1, 'Latest Collection 100% Cotton Full Sleeve Plain Men Tshirt', '<p>&nbsp;100% COTTON MATERIAL || FULL SLEEVE T-SHIRT<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;MFG : Flat Knitting || Wash Care : Dry Clean Only, Do not wring<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;This Product Uniquely designed by SDK Fashion.<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Disclaimer :- PRODUCT COLOR MAY SLIGHTLY VARY DUE TO PHOTOGRAPHIC LIGHTING SOURCES OR YOUR MONITOR SETTINGS.<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;SDK Fashion<br />\n&nbsp;</p>\n', NULL, 'Latest Collection 100% Cotton Full Sleeve Plain Men Tshirt', NULL, NULL, NULL, 1, 20, 'U.K', 0, 0, 1, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 05:51:02', '2019-05-11 08:51:55'),
(293, 'WA00004', '78889665330', 100, 2, NULL, NULL, 96, 1, '12000', '2019-04-18', 1, 'Fastrack Chrono Upgrade Analog Black Dial Men\'s Watch -NK3072SM02', '<p>Case Shape: Round, Dial Glass Material: Mineral<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Band Color: Silver, Band Material: Stainless Steel<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Watch Movement Type: Quartz, Watch Display Type: Analog<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Case Material: Stainless Steel, Case Diameter: 52.5 x 48.3 millimeters<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Water Resistance Depth: 50 meters, Deployment Clasp<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;1 Year Manufacturing Warranty and 6 Months Battery Warranty<br />\n&nbsp;</p>\n', NULL, 'Fastrack Chrono Upgrade Analog Black Dial Men\'s Watch -NK3072SM02', NULL, NULL, NULL, 1, 20, 'India', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 06:04:50', '2019-05-10 06:14:13'),
(294, 'SK000230', '678967956989', 10, 2, NULL, NULL, 72, 1, '2000', '2019-05-17', 1, 'Casio SA-76 KM15 Digital Portable Keyboard  (44 Keys)', '<p>Let your child play some delightful tunes using this digital portable keyboard from Casio whose ergonomic design with 44 Mini-sized Keys will bring out the creative best in your little one. It comes with about 100 tones, 50 rhythms, and 10 built-in songs to let your child unearth new variations of music.</p>\n', NULL, '', NULL, NULL, NULL, 1, 1, 'chennai', 0, 0, 0, NULL, 1, 1, 1, NULL, NULL, '2019-05-10 06:07:25', '2019-05-10 07:19:36'),
(295, 'SH000012', '155576668550', 100, 2, NULL, NULL, 76, 1, '980', '2019-05-08', 1, 'Men Self Design Formal Shirt', '<p>Product comes in assorted prints. Actual colors and prints might vary for the image shown &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;on the website<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Collection: 24 x 7 ; Style no: 2714<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;80% cotton &amp; 20% poly<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Premium Combed Cotton rich fabric<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Modern fit<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Ribbed crew-neck prevents sagging<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;Authentic Jockey logo label<br />\n&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;To be worn as loungewear leisurewear</p>\n', NULL, 'Men Self Design Formal Shirt', NULL, NULL, NULL, 1, 20, 'U.S.A', 0, 0, 0, 2, 1, 1, 1, NULL, NULL, '2019-05-10 06:18:17', '2019-05-13 00:05:50'),
(298, 'SK868788', 'FR579896', 10, 2, NULL, NULL, 70, 1, '3500', '2019-05-10', 1, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', '<p>Highlights</p>\n\n<ul>\n	<li>Type: Cars &amp; Bikes</li>\n	<li>Material: Plastic</li>\n	<li>Battery Operated, 2 Battteries</li>\n	<li>Rechargeable Batteries</li>\n	<li>Width x Height: 6 inch x 3 inch</li>\n	<li>Minimum Age: 4 years</li>\n</ul>\n\n<p>&nbsp;</p>\n', NULL, 'AR Enterprises RC Jackman 1:18 Ferrari Style Racing Rechargeable Car With Radio Control Steering  (Red)', NULL, NULL, NULL, 1, 1, 'CHENNAI', 0, 0, 0, 2, 1, 1, 1, NULL, NULL, '2019-05-10 06:43:29', '2019-05-13 02:57:55'),
(299, 'CS000016', '666000800010', 100, 2, NULL, NULL, 75, 1, '700', '2019-03-21', 1, 'Red Tape Men\'s Boat Shoes', '<ul>\n	<li>Closure: Lace-Up</li>\n	<li>Material Type: Leather</li>\n	<li>Lifestyle: Casual</li>\n	<li>Closure Type: Lace-Up</li>\n	<li>Toe Style: Round Toe;Warranty Type: Manufacturer</li>\n	<li>There might be minor color variation between actual product and image shown on screen due to lighting on the photography</li>\n	<li>Product warranty against manufacturing defects: 90 days</li>\n	<li>Care Instructions: Clean your shoes with leather cleaner or leather shampoo, and use a good quality brush to remove loose surface dirt; if your shoes are wet after cleaning, let them air-dry before your proceed with the next step; dry shoes in room temperature only and never expose them to the sun, heat from the sun will cause the leather to shrink, wrinkle, harden, dry, and crack</li>\n</ul>\n', NULL, 'Red Tape Men\'s Boat Shoes', NULL, NULL, NULL, 1, 20, 'India', 0, 0, 0, 0, 1, 0, 1, NULL, NULL, '2019-05-10 06:51:47', '2019-05-12 01:13:17'),
(300, 'WT000011', '80070077330', 100, 2, NULL, NULL, 96, 1, '8000', '2019-02-13', 1, 'Timex Analog Blue Dial Men\'s Watch', '<ul>\n	<li>Dial Color: Blue, Case Shape: Round, Dial Glass Material: Mineral, Buckle Clasp</li>\n	<li>Band Color: Brown, Band Material: Leather</li>\n	<li>Watch Movement Type: Quartz, Watch Display Type: Analog</li>\n	<li>Case Material: Brass, Case Diameter: 40 millimeters, Brass Bezel ; Case Thickness: 8.8mm</li>\n	<li>Water Resistance Depth: 30 meters,</li>\n	<li>1 year domestic warranty</li>\n</ul>\n', NULL, 'Timex Analog Blue Dial Men\'s Watch', NULL, NULL, NULL, 1, 20, 'Tamil nadu', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 07:19:51', '2019-05-10 07:22:52'),
(302, 'BB000066', '188000267534', 100, 3, NULL, NULL, 94, 1, '600', '2019-05-11', 1, 'MINNOW Girl\'s Cotton Printed T-Shirt', '<ul>\n	<li>Fit Type: Regular Fit</li>\n	<li>Material : 100% Premium Quality Compact Cotton</li>\n	<li>Wash Care : Cold Machine Wash.</li>\n	<li>Sizes Available : 4-5 Yrs to 14-15 Yrs</li>\n	<li>Perfect for Party,Shopping,Cool Outfit,Etc.</li>\n	<li>Pair It With &quot;Minnow&quot; capris or Jeans for Cool look.</li>\n	<li>Handcrafted by brand &quot;Minnow&quot;</li>\n</ul>\n', NULL, 'MINNOW Girl\'s Cotton Printed T-Shirt', NULL, NULL, NULL, 1, 20, 'Tamil naadu', 0, 0, 0, NULL, 1, 0, 1, NULL, NULL, '2019-05-10 07:34:55', '2019-05-10 08:14:18');

-- --------------------------------------------------------

--
-- Table structure for table `product_description`
--

CREATE TABLE `product_description` (
  `product_description_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `description` text,
  `meta_description` text,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_discount`
--

CREATE TABLE `product_discount` (
  `product_discount_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(4) NOT NULL,
  `priority` int(5) NOT NULL,
  `price` decimal(15,4) NOT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_discount`
--

INSERT INTO `product_discount` (`product_discount_id`, `product_id`, `quantity`, `priority`, `price`, `date_start`, `date_end`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(348, 286, 1, 1, '45000.0000', '2019-05-11', '2019-05-15', NULL, NULL, NULL, NULL, NULL),
(354, 291, 1, 1, '35000.0000', '2019-05-11', '2019-05-15', NULL, NULL, NULL, NULL, NULL),
(360, 292, 1, 1, '350.0000', '2019-05-15', '2019-06-19', NULL, NULL, NULL, NULL, NULL),
(361, 290, 1, 1, '38000.0000', '2019-05-11', '2019-05-22', NULL, NULL, NULL, NULL, NULL),
(362, 288, 1, 1, '15000.0000', '2019-05-11', '2019-05-21', NULL, NULL, NULL, NULL, NULL),
(363, 293, 1, 1, '11000.0000', '2019-05-05', '2019-05-16', NULL, NULL, NULL, NULL, NULL),
(365, 294, 1, 1, '1500.0000', '2019-05-06', '2019-05-17', NULL, NULL, NULL, NULL, NULL),
(367, 295, 1, 1, '800.0000', '2019-06-05', '2019-05-31', NULL, NULL, NULL, NULL, NULL),
(370, 298, 0, 0, '0.0000', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(371, 299, 1, 1, '650.0000', '2019-04-11', '2019-05-23', NULL, NULL, NULL, NULL, NULL),
(373, 287, 1, 1, '80.0000', '2019-05-13', '2019-05-20', NULL, NULL, NULL, NULL, NULL),
(375, 300, 1, 1, '6500.0000', '2019-05-25', '2019-06-13', NULL, NULL, NULL, NULL, NULL),
(378, 289, 5, 5, '27500.0000', '2019-05-08', '2019-05-14', NULL, NULL, NULL, NULL, NULL),
(379, 302, 1, 1, '550.0000', '2019-05-31', '2019-06-05', NULL, NULL, NULL, NULL, NULL),
(381, 285, 0, 0, '0.0000', NULL, NULL, NULL, NULL, NULL, '2019-05-11 07:29:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `product_image_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `container_name` varchar(255) DEFAULT NULL,
  `default_image` int(11) DEFAULT NULL,
  `sort_order` int(3) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_image`
--

INSERT INTO `product_image` (`product_image_id`, `product_id`, `image`, `container_name`, `default_image`, `sort_order`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(1886, 286, 'Img_1557479013318.jpeg', 'Product/Electronics/Camera/', 1, NULL, NULL, NULL, NULL, '2019-05-10 04:39:46', NULL),
(1887, 286, 'Img_1557479003244.jpeg', 'Product/Electronics/Camera/', 0, NULL, NULL, NULL, NULL, '2019-05-10 04:39:46', NULL),
(1888, 286, 'Img_1557478996350.jpeg', 'Product/Electronics/Camera/', 0, NULL, NULL, NULL, NULL, '2019-05-10 04:39:46', NULL),
(1926, 292, 'Img_1557485282860.jpeg', 'Product/MensFashion/TopWear/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:02:35', NULL),
(1927, 292, 'Img_1557485274204.jpeg', 'Product/MensFashion/TopWear/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:02:35', NULL),
(1928, 292, 'Img_1557485295229.jpeg', 'Product/MensFashion/TopWear/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:02:35', NULL),
(1929, 290, 'Img_1557483584798.jpeg', 'Product/Electronics/Laptops/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:02:59', NULL),
(1930, 290, 'Img_1557483592204.jpeg', 'Product/Electronics/Laptops/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:02:59', NULL),
(1931, 290, 'Img_1557483575649.jpeg', 'Product/Electronics/Laptops/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:02:59', NULL),
(1932, 290, 'Img_1557483601109.jpeg', 'Product/Electronics/Laptops/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:02:59', NULL),
(1933, 288, 'Img_1557482120827.jpeg', 'Product/Electronics/Mobile/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:03:38', NULL),
(1934, 288, 'Img_1557482153783.jpeg', 'Product/Electronics/Mobile/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:03:38', NULL),
(1935, 288, 'Img_1557482139753.jpeg', 'Product/Electronics/Mobile/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:03:38', NULL),
(1936, 293, 'Img_1557485979558.jpeg', 'Product/MensFashion/Watches/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:04:50', NULL),
(1937, 293, 'Img_1557485991788.jpeg', 'Product/MensFashion/Watches/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:04:50', NULL),
(1938, 293, 'Img_1557486005501.jpeg', 'Product/MensFashion/Watches/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:04:50', NULL),
(1939, 293, 'Img_1557485999083.jpeg', 'Product/MensFashion/Watches/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:04:50', NULL),
(1942, 294, 'Img_1557484873382.jpeg', 'Product/BabyandKids/Toys/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:12:39', NULL),
(1943, 294, 'Img_1557484910798.jpeg', 'Product/BabyandKids/Toys/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:12:39', NULL),
(1947, 295, 'Img_1557486951819.jpeg', 'Product/MensFashion/TopWear/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:30:28', NULL),
(1948, 295, 'Img_1557486941810.jpeg', 'Product/MensFashion/TopWear/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:30:28', NULL),
(1949, 295, 'Img_1557486925844.jpeg', 'Product/MensFashion/TopWear/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:30:28', NULL),
(1951, 296, 'Img_1557487542287.jpeg', 'Product/BabyandKids/Toys/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:31:35', NULL),
(1955, 298, 'Img_1557488489793.jpeg', 'Product/BabyandKids/Toys/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL),
(1956, 298, 'Img_1557488500018.jpeg', 'Product/BabyandKids/Toys/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL),
(1957, 299, 'Img_1557488842454.jpeg', 'Product/MensFashion/FootWear/Casual Shoes/', 1, NULL, NULL, NULL, NULL, '2019-05-10 06:51:47', NULL),
(1958, 299, 'Img_1557488880089.jpeg', 'Product/MensFashion/FootWear/Casual Shoes/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:51:47', NULL),
(1959, 299, 'Img_1557488867645.jpeg', 'Product/MensFashion/FootWear/Casual Shoes/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:51:47', NULL),
(1960, 299, 'Img_1557488834938.jpeg', 'Product/MensFashion/FootWear/Casual Shoes/', 0, NULL, NULL, NULL, NULL, '2019-05-10 06:51:47', NULL),
(1964, 287, 'Img_1557490591725.jpeg', '', 0, NULL, NULL, NULL, NULL, '2019-05-10 07:18:22', NULL),
(1965, 287, 'Img_1557481636009.jpeg', 'Product/Electronics/Mobile/', 1, NULL, NULL, NULL, NULL, '2019-05-10 07:18:22', NULL),
(1966, 287, 'Img_1557490608386.jpeg', '', NULL, NULL, NULL, NULL, NULL, '2019-05-10 07:18:22', NULL),
(1970, 300, 'Img_1557489636666.jpeg', 'Product/MensFashion/Watches/', 1, NULL, NULL, NULL, NULL, '2019-05-10 07:20:35', NULL),
(1971, 300, 'Img_1557489628164.jpeg', 'Product/MensFashion/Watches/', 0, NULL, NULL, NULL, NULL, '2019-05-10 07:20:35', NULL),
(1972, 300, 'Img_1557489617413.jpeg', 'Product/MensFashion/Watches/', 0, NULL, NULL, NULL, NULL, '2019-05-10 07:20:35', NULL),
(1977, 289, 'Img_1557491249919.jpeg', '', NULL, NULL, NULL, NULL, NULL, '2019-05-10 07:28:49', NULL),
(1978, 289, 'Img_1557491239529.jpeg', '', 1, NULL, NULL, NULL, NULL, '2019-05-10 07:28:49', NULL),
(1979, 302, 'Img_1557491588084.jpeg', 'Product/BabyandKids/GirlsClothing/', 0, NULL, NULL, NULL, NULL, '2019-05-10 07:34:55', NULL),
(1980, 302, 'Img_1557491577745.jpeg', 'Product/BabyandKids/GirlsClothing/', 1, NULL, NULL, NULL, NULL, '2019-05-10 07:34:55', NULL),
(1983, 285, 'Img_1557476594786.jpeg', 'Product/Electronics/Camera/', 1, NULL, NULL, NULL, NULL, '2019-05-11 07:29:15', NULL),
(1984, 285, 'Img_1557476583444.jpeg', 'Product/Electronics/Camera/', 0, NULL, NULL, NULL, NULL, '2019-05-11 07:29:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_option`
--

CREATE TABLE `product_option` (
  `product_option_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `option_id` int(11) DEFAULT NULL,
  `value` text,
  `required` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_option_value`
--

CREATE TABLE `product_option_value` (
  `product_option_value_id` int(11) NOT NULL,
  `product_option_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `option_id` int(11) DEFAULT NULL,
  `option_value_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `subtract` int(11) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `price_prefix` varchar(1) DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  `points_prefix` varchar(1) DEFAULT NULL,
  `weight` decimal(10,0) DEFAULT NULL,
  `weight_prefix` varchar(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_rating`
--

CREATE TABLE `product_rating` (
  `rating_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_product_id` int(11) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `first_name` varchar(512) DEFAULT NULL,
  `last_name` varchar(512) DEFAULT NULL,
  `email` varchar(512) DEFAULT NULL,
  `rating` int(11) NOT NULL,
  `review` text NOT NULL,
  `image_path` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_related`
--

CREATE TABLE `product_related` (
  `related_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `related_product_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_related`
--

INSERT INTO `product_related` (`related_id`, `product_id`, `related_product_id`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(581, 286, 285, NULL, NULL, NULL, '2019-05-10 04:39:46', NULL),
(587, 290, 291, NULL, NULL, NULL, '2019-05-10 06:02:59', NULL),
(588, 288, 287, NULL, NULL, NULL, '2019-05-10 06:03:38', NULL),
(589, 293, 283, NULL, NULL, NULL, '2019-05-10 06:04:50', NULL),
(591, 295, 292, NULL, NULL, NULL, '2019-05-10 06:30:28', NULL),
(592, 296, 294, NULL, NULL, NULL, '2019-05-10 06:31:35', NULL),
(593, 298, 296, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL),
(594, 298, 294, NULL, NULL, NULL, '2019-05-10 06:43:29', NULL),
(595, 299, 297, NULL, NULL, NULL, '2019-05-10 06:51:47', NULL),
(597, 300, 293, NULL, NULL, NULL, '2019-05-10 07:20:35', NULL),
(598, 302, 301, NULL, NULL, NULL, '2019-05-10 07:34:55', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_special`
--

CREATE TABLE `product_special` (
  `product_special_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_group_id` int(11) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `price` decimal(15,2) DEFAULT NULL,
  `date_start` date DEFAULT NULL,
  `date_end` date DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_special`
--

INSERT INTO `product_special` (`product_special_id`, `product_id`, `customer_group_id`, `priority`, `price`, `date_start`, `date_end`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(382, 286, NULL, 1, '40000.00', '2019-05-12', '2019-05-20', NULL, NULL, NULL, NULL),
(394, 292, NULL, 1, '380.00', '2019-05-08', '2019-06-30', NULL, NULL, NULL, NULL),
(395, 290, NULL, 1, '35000.00', '2019-05-06', '2019-05-28', NULL, NULL, NULL, NULL),
(396, 288, NULL, 1, '15000.00', '2019-05-08', '2019-05-24', NULL, NULL, NULL, NULL),
(397, 293, NULL, 1, '10000.00', '2019-04-02', '2019-05-30', NULL, NULL, NULL, NULL),
(399, 294, NULL, 1, '1700.00', '2019-05-08', '2019-05-18', NULL, NULL, NULL, NULL),
(401, 295, NULL, 1, '800.00', '2019-05-01', '2019-06-05', NULL, NULL, NULL, NULL),
(402, 296, NULL, 0, '0.00', NULL, NULL, NULL, NULL, NULL, NULL),
(404, 298, NULL, 0, '0.00', NULL, NULL, NULL, NULL, NULL, NULL),
(405, 299, NULL, 1, '600.00', '2019-05-17', '2019-06-06', NULL, NULL, NULL, NULL),
(407, 287, NULL, 1, '73999.00', '2019-05-09', '2019-05-25', NULL, NULL, NULL, NULL),
(409, 300, NULL, 1, '6000.00', '2019-05-23', '2019-06-05', NULL, NULL, NULL, NULL),
(412, 289, NULL, 5, '23990.00', '2019-05-13', '2019-05-18', NULL, NULL, NULL, NULL),
(413, 302, NULL, 1, '450.00', '2019-05-02', '2019-05-21', NULL, NULL, NULL, NULL),
(415, 285, NULL, 1, '19000.00', '2019-05-10', '2019-05-31', NULL, NULL, '2019-05-11 07:29:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_tag`
--

CREATE TABLE `product_tag` (
  `product_tag_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_tagname` text,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `product_to_category`
--

CREATE TABLE `product_to_category` (
  `product_to_category_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_to_category`
--

INSERT INTO `product_to_category` (`product_to_category_id`, `product_id`, `category_id`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(2188, 286, 4, 1, NULL, NULL, '2019-05-10 04:39:46', NULL),
(2189, 286, 16, 1, NULL, NULL, '2019-05-10 04:39:46', NULL),
(2190, 286, 45, 1, NULL, NULL, '2019-05-10 04:39:46', NULL),
(2224, 292, 1, 1, NULL, NULL, '2019-05-10 06:02:35', NULL),
(2225, 292, 9, 1, NULL, NULL, '2019-05-10 06:02:35', NULL),
(2226, 292, 64, 1, NULL, NULL, '2019-05-10 06:02:35', NULL),
(2227, 290, 4, 1, NULL, NULL, '2019-05-10 06:02:59', NULL),
(2228, 290, 14, 1, NULL, NULL, '2019-05-10 06:02:59', NULL),
(2229, 290, 38, 1, NULL, NULL, '2019-05-10 06:02:59', NULL),
(2230, 288, 4, 1, NULL, NULL, '2019-05-10 06:03:38', NULL),
(2231, 288, 13, 1, NULL, NULL, '2019-05-10 06:03:38', NULL),
(2232, 288, 33, 1, NULL, NULL, '2019-05-10 06:03:38', NULL),
(2233, 293, 1, 1, NULL, NULL, '2019-05-10 06:04:50', NULL),
(2234, 293, 11, 1, NULL, NULL, '2019-05-10 06:04:50', NULL),
(2235, 293, 68, 1, NULL, NULL, '2019-05-10 06:04:50', NULL),
(2236, 294, 3, 1, NULL, NULL, '2019-05-10 06:12:39', NULL),
(2237, 294, 50, 1, NULL, NULL, '2019-05-10 06:12:39', NULL),
(2241, 295, 1, 1, NULL, NULL, '2019-05-10 06:30:28', NULL),
(2242, 295, 9, 1, NULL, NULL, '2019-05-10 06:30:28', NULL),
(2243, 295, 65, 1, NULL, NULL, '2019-05-10 06:30:28', NULL),
(2246, 296, 49, 1, NULL, NULL, '2019-05-10 06:31:35', NULL),
(2250, 298, 17, 1, NULL, NULL, '2019-05-10 06:43:29', NULL),
(2251, 298, 48, 1, NULL, NULL, '2019-05-10 06:43:29', NULL),
(2252, 298, 3, 1, NULL, NULL, '2019-05-10 06:43:29', NULL),
(2253, 299, 1, 1, NULL, NULL, '2019-05-10 06:51:47', NULL),
(2254, 299, 7, 1, NULL, NULL, '2019-05-10 06:51:47', NULL),
(2255, 299, 60, 1, NULL, NULL, '2019-05-10 06:51:47', NULL),
(2259, 287, 4, 1, NULL, NULL, '2019-05-10 07:18:22', NULL),
(2260, 287, 13, 1, NULL, NULL, '2019-05-10 07:18:22', NULL),
(2261, 287, 35, 1, NULL, NULL, '2019-05-10 07:18:22', NULL),
(2265, 300, 1, 1, NULL, NULL, '2019-05-10 07:20:35', NULL),
(2266, 300, 11, 1, NULL, NULL, '2019-05-10 07:20:35', NULL),
(2267, 300, 69, 1, NULL, NULL, '2019-05-10 07:20:35', NULL),
(2274, 289, 4, 1, NULL, NULL, '2019-05-10 07:28:49', NULL),
(2275, 289, 13, 1, NULL, NULL, '2019-05-10 07:28:49', NULL),
(2276, 289, 36, 1, NULL, NULL, '2019-05-10 07:28:49', NULL),
(2277, 302, 3, 1, NULL, NULL, '2019-05-10 07:34:55', NULL),
(2278, 302, 19, 1, NULL, NULL, '2019-05-10 07:34:55', NULL),
(2279, 302, 53, 1, NULL, NULL, '2019-05-10 07:34:55', NULL),
(2283, 285, 44, 1, NULL, NULL, '2019-05-11 07:29:15', NULL),
(2284, 285, 4, 1, NULL, NULL, '2019-05-11 07:29:15', NULL),
(2285, 285, 16, 1, NULL, NULL, '2019-05-11 07:29:15', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_view_log`
--

CREATE TABLE `product_view_log` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `mobile` bigint(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `settings_id` int(11) NOT NULL,
  `url` varchar(250) DEFAULT NULL,
  `meta_tag_title` varchar(250) DEFAULT NULL,
  `meta_tag_description` text,
  `meta_tag_keywords` varchar(250) DEFAULT NULL,
  `store_name` varchar(250) DEFAULT NULL,
  `store_owner` varchar(250) DEFAULT NULL,
  `store_address` text,
  `country_id` int(11) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `store_email` varchar(250) DEFAULT NULL,
  `store_telephone` varchar(50) DEFAULT NULL,
  `store_fax` varchar(30) DEFAULT NULL,
  `store_logo` varchar(250) DEFAULT NULL,
  `store_logo_path` varchar(255) DEFAULT NULL,
  `maintenance_mode` int(3) DEFAULT NULL,
  `store_language_name` varchar(250) DEFAULT NULL,
  `store_currency_id` int(11) DEFAULT NULL,
  `store_image` varchar(255) DEFAULT NULL,
  `store_image_path` text,
  `google` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `order_status` int(11) NOT NULL DEFAULT '1',
  `invoice_prefix` varchar(255) DEFAULT NULL,
  `items_per_page` int(11) DEFAULT NULL,
  `category_product_count` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`settings_id`, `url`, `meta_tag_title`, `meta_tag_description`, `meta_tag_keywords`, `store_name`, `store_owner`, `store_address`, `country_id`, `zone_id`, `store_email`, `store_telephone`, `store_fax`, `store_logo`, `store_logo_path`, `maintenance_mode`, `store_language_name`, `store_currency_id`, `store_image`, `store_image_path`, `google`, `facebook`, `twitter`, `instagram`, `order_status`, `invoice_prefix`, `items_per_page`, `category_product_count`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(2, 'www.spurt.com', 'Spurtcommerce', 'description', 'keyword', 'online shopping sites in india ', 'Admin', 'Chennai, India', 24, 59, 'admin@spurtcommerce.com', '0000000000', '1221', 'Img_1552892256556.jpeg', 'storeLogo/', 0, 'Persian', 57, 'storeImage', NULL, 'https://plus.google.com/106505712715559114904', 'https://www.facebook.com/spurtcommerce/', 'https://twitter.com/Spurtcommerce', 'https://www.instagram.com/spurt_commerce/', 1, 'SPU', 40, 0, 1, '2019-02-13 06:00:00', '2019-05-10 01:59:16', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `stock_status`
--

CREATE TABLE `stock_status` (
  `stock_status_id` int(11) NOT NULL,
  `name` varchar(32) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stock_status`
--

INSERT INTO `stock_status` (`stock_status_id`, `name`, `is_active`, `created_by`, `modified_by`, `created_date`, `modified_date`) VALUES
(78, 'Pre Order', 1, NULL, NULL, '2019-03-25 00:49:53', '2019-04-05 02:33:42'),
(79, 'More Stock', 1, NULL, NULL, '2019-03-25 00:50:34', NULL),
(80, '3 day befor stock', 1, NULL, NULL, '2019-03-25 00:50:50', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_group_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `avatar_path` varchar(255) DEFAULT NULL,
  `code` varchar(32) DEFAULT NULL,
  `ip` varchar(15) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone_number` bigint(20) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_group_id`, `username`, `password`, `first_name`, `last_name`, `email`, `avatar`, `avatar_path`, `code`, `ip`, `address`, `phone_number`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(49, 1, 'admin@piccocart.com', '$2a$10$UxGUfPF1/sHJdueBeEQQsOej8hkvEwypOk487D7FjMgi/FhSRLSny', 'Admin', ' ', 'admin@piccocart.com', 'Img_1558091450014.png', 'user/', NULL, NULL, 'India', 5456465656, 1, '2019-02-15 04:13:22', '2019-05-13 02:12:56', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_group`
--

CREATE TABLE `user_group` (
  `group_id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `slug` varchar(64) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_group`
--

INSERT INTO `user_group` (`group_id`, `name`, `slug`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(1, 'Admin', 'optional', 0, '2019-01-21 10:38:14', '2019-04-08 03:59:33', NULL, NULL),
(78, 'Sales Team', NULL, 1, '2019-02-18 03:58:03', '2019-04-08 01:31:15', NULL, NULL),
(79, 'Role 1', NULL, 0, '2019-02-18 05:08:55', '2019-02-19 00:42:26', NULL, NULL),
(80, 'Role 2', NULL, 1, '2019-02-18 05:09:42', NULL, NULL, NULL),
(81, 'Marketting', NULL, 0, '2019-02-18 23:14:33', '2019-03-19 21:33:00', NULL, NULL),
(82, 'admins', NULL, 1, '2019-02-20 05:52:08', NULL, NULL, NULL),
(83, 'aaaa', NULL, 0, '2019-03-20 04:51:56', NULL, NULL, NULL),
(84, 'Marketing', NULL, 1, '2019-03-20 04:52:22', '2019-03-23 04:56:51', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `zone_id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `code` varchar(32) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `country_id`, `code`, `name`, `is_active`, `created_date`, `modified_date`, `created_by`, `modified_by`) VALUES
(58, 45, 'JAF', 'Jaffna', 0, '2019-02-17 22:17:27', '2019-04-08 01:28:07', NULL, NULL),
(59, 22, 'MUM', 'Mumbai', 1, '2019-02-17 22:17:49', '2019-04-06 03:32:42', NULL, NULL),
(63, 22, 'KL', 'kerala', 1, '2019-02-18 23:46:22', '2019-05-10 04:05:34', NULL, NULL),
(66, 22, 'GOA', 'Goa', 1, '2019-02-19 07:19:48', '2019-03-12 09:11:16', NULL, NULL),
(67, 22, 'PY', 'Pondy', 0, '2019-02-19 07:24:14', '2019-05-10 04:05:46', NULL, NULL),
(68, 24, 'ss', 'ss', 1, '2019-02-19 07:25:57', '2019-04-06 03:33:07', NULL, NULL),
(73, 24, 'Zone', 'Zone', 1, '2019-02-19 07:46:47', '2019-04-06 03:33:01', NULL, NULL),
(74, 30, 'ZX', 'YUY', 1, '2019-02-20 06:38:52', '2019-04-06 03:32:56', NULL, NULL),
(75, 24, 'Y', 'UIU', 1, '2019-02-20 06:39:04', '2019-04-06 03:32:53', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `zone_to_geo_zone`
--

CREATE TABLE `zone_to_geo_zone` (
  `zone_to_geo_zone_id` int(11) NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  `zone_id` int(11) DEFAULT NULL,
  `geo_zone_id` int(11) DEFAULT NULL,
  `is_active` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `modified_date` datetime DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `modified_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `access_token`
--
ALTER TABLE `access_token`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`address_id`),
  ADD KEY `fk_customer_id_tbl_customer_customer_id` (`customer_id`);

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`banner_id`),
  ADD KEY `fk_BannerGroup_Banner` (`banner_group_id`);

--
-- Indexes for table `banner_group`
--
ALTER TABLE `banner_group`
  ADD PRIMARY KEY (`banner_group_id`);

--
-- Indexes for table `banner_image`
--
ALTER TABLE `banner_image`
  ADD PRIMARY KEY (`banner_image_id`);

--
-- Indexes for table `banner_image_description`
--
ALTER TABLE `banner_image_description`
  ADD PRIMARY KEY (`banner_image_description_id`),
  ADD KEY `fk_Banner_BannerImageDescription` (`banner_id`),
  ADD KEY `fk_BannerImage_BannerImageDescription` (`banner_image_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `category_description`
--
ALTER TABLE `category_description`
  ADD PRIMARY KEY (`category_description_id`),
  ADD KEY `fk_Category_CategoryDescription` (`category_id`);

--
-- Indexes for table `category_path`
--
ALTER TABLE `category_path`
  ADD PRIMARY KEY (`category_path_id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `currency`
--
ALTER TABLE `currency`
  ADD PRIMARY KEY (`currency_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_group`
--
ALTER TABLE `customer_group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_ip`
--
ALTER TABLE `customer_ip`
  ADD PRIMARY KEY (`customer_ip_id`);

--
-- Indexes for table `customer_transaction`
--
ALTER TABLE `customer_transaction`
  ADD PRIMARY KEY (`customer_transaction_id`),
  ADD KEY `fk_customer_transaction_order1` (`order_id`),
  ADD KEY `fk_customer_transaction_customer1` (`customer_id`);

--
-- Indexes for table `customer_wishlist`
--
ALTER TABLE `customer_wishlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `email_template`
--
ALTER TABLE `email_template`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `geo_zone`
--
ALTER TABLE `geo_zone`
  ADD PRIMARY KEY (`geo_zone_id`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`language_id`);

--
-- Indexes for table `login_log`
--
ALTER TABLE `login_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `manufacturer`
--
ALTER TABLE `manufacturer`
  ADD PRIMARY KEY (`manufacturer_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `option`
--
ALTER TABLE `option`
  ADD PRIMARY KEY (`option_id`);

--
-- Indexes for table `option_description`
--
ALTER TABLE `option_description`
  ADD PRIMARY KEY (`option_description_id`),
  ADD KEY `option_id` (`option_id`);

--
-- Indexes for table `option_value`
--
ALTER TABLE `option_value`
  ADD PRIMARY KEY (`option_value_id`);

--
-- Indexes for table `option_value_description`
--
ALTER TABLE `option_value_description`
  ADD PRIMARY KEY (`option_value_description_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_order_customer1` (`customer_id`),
  ADD KEY `fk_order_currency1` (`currency_id`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`order_history_id`),
  ADD KEY `fk_order_history_order1` (`order_id`),
  ADD KEY `fk_order_history_order_status1` (`order_status_id`);

--
-- Indexes for table `order_log`
--
ALTER TABLE `order_log`
  ADD PRIMARY KEY (`order_log_id`),
  ADD KEY `fk_order_customer1` (`customer_id`),
  ADD KEY `fk_order_currency1` (`currency_id`);

--
-- Indexes for table `order_option`
--
ALTER TABLE `order_option`
  ADD PRIMARY KEY (`order_option_id`),
  ADD KEY `fk_order_option_order1` (`order_id`),
  ADD KEY `fk_order_option_order_product1` (`order_product_id`);

--
-- Indexes for table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`order_product_id`),
  ADD KEY `fk_order_product_product1` (`product_id`),
  ADD KEY `fk_order_product_order1` (`order_id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`order_status_id`);

--
-- Indexes for table `order_total`
--
ALTER TABLE `order_total`
  ADD PRIMARY KEY (`order_total_id`);

--
-- Indexes for table `page`
--
ALTER TABLE `page`
  ADD PRIMARY KEY (`page_id`),
  ADD KEY `fk_page_page_group1` (`page_group_id`);

--
-- Indexes for table `page_group`
--
ALTER TABLE `page_group`
  ADD PRIMARY KEY (`page_group_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_description`
--
ALTER TABLE `product_description`
  ADD PRIMARY KEY (`product_description_id`);

--
-- Indexes for table `product_discount`
--
ALTER TABLE `product_discount`
  ADD PRIMARY KEY (`product_discount_id`),
  ADD KEY `fk_product_discount_product1` (`product_id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_image_id`),
  ADD KEY `fk_product_image_product1` (`product_id`);

--
-- Indexes for table `product_option`
--
ALTER TABLE `product_option`
  ADD PRIMARY KEY (`product_option_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_option_value`
--
ALTER TABLE `product_option_value`
  ADD PRIMARY KEY (`product_option_value_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `product_rating`
--
ALTER TABLE `product_rating`
  ADD PRIMARY KEY (`rating_id`),
  ADD KEY `fk_product_rating_product1` (`product_id`),
  ADD KEY `product_rating_Cons_order_product` (`order_product_id`);

--
-- Indexes for table `product_related`
--
ALTER TABLE `product_related`
  ADD PRIMARY KEY (`related_id`),
  ADD KEY `fk_product_related_product1` (`product_id`);

--
-- Indexes for table `product_special`
--
ALTER TABLE `product_special`
  ADD PRIMARY KEY (`product_special_id`),
  ADD KEY `product_special_ibfk_1` (`product_id`);

--
-- Indexes for table `product_tag`
--
ALTER TABLE `product_tag`
  ADD PRIMARY KEY (`product_tag_id`);

--
-- Indexes for table `product_to_category`
--
ALTER TABLE `product_to_category`
  ADD PRIMARY KEY (`product_to_category_id`),
  ADD KEY `fk_product_to_category_product1` (`product_id`),
  ADD KEY `fk_product_to_category_category1` (`category_id`);

--
-- Indexes for table `product_view_log`
--
ALTER TABLE `product_view_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_view_log_Cons_product` (`product_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`settings_id`),
  ADD KEY `fk_Country_Settings` (`country_id`);

--
-- Indexes for table `stock_status`
--
ALTER TABLE `stock_status`
  ADD PRIMARY KEY (`stock_status_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD KEY `fk_users_usergroup` (`user_group_id`);

--
-- Indexes for table `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`zone_id`),
  ADD KEY `fk_Zone_Country` (`country_id`);

--
-- Indexes for table `zone_to_geo_zone`
--
ALTER TABLE `zone_to_geo_zone`
  ADD PRIMARY KEY (`zone_to_geo_zone_id`),
  ADD KEY `fk_Zone_ZoneGeo` (`zone_id`),
  ADD KEY `fk_Country_ZoneGeo` (`country_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `access_token`
--
ALTER TABLE `access_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `banner_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;
--
-- AUTO_INCREMENT for table `banner_group`
--
ALTER TABLE `banner_group`
  MODIFY `banner_group_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `banner_image`
--
ALTER TABLE `banner_image`
  MODIFY `banner_image_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `banner_image_description`
--
ALTER TABLE `banner_image_description`
  MODIFY `banner_image_description_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;
--
-- AUTO_INCREMENT for table `category_description`
--
ALTER TABLE `category_description`
  MODIFY `category_description_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `category_path`
--
ALTER TABLE `category_path`
  MODIFY `category_path_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=245;
--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=258;
--
-- AUTO_INCREMENT for table `currency`
--
ALTER TABLE `currency`
  MODIFY `currency_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customer_group`
--
ALTER TABLE `customer_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customer_ip`
--
ALTER TABLE `customer_ip`
  MODIFY `customer_ip_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customer_transaction`
--
ALTER TABLE `customer_transaction`
  MODIFY `customer_transaction_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `customer_wishlist`
--
ALTER TABLE `customer_wishlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=294;
--
-- AUTO_INCREMENT for table `email_template`
--
ALTER TABLE `email_template`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `geo_zone`
--
ALTER TABLE `geo_zone`
  MODIFY `geo_zone_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `language_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT for table `login_log`
--
ALTER TABLE `login_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=544;
--
-- AUTO_INCREMENT for table `manufacturer`
--
ALTER TABLE `manufacturer`
  MODIFY `manufacturer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT for table `option`
--
ALTER TABLE `option`
  MODIFY `option_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `option_description`
--
ALTER TABLE `option_description`
  MODIFY `option_description_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `option_value`
--
ALTER TABLE `option_value`
  MODIFY `option_value_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `option_value_description`
--
ALTER TABLE `option_value_description`
  MODIFY `option_value_description_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `order_history_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_log`
--
ALTER TABLE `order_log`
  MODIFY `order_log_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_option`
--
ALTER TABLE `order_option`
  MODIFY `order_option_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `order_product_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `order_total`
--
ALTER TABLE `order_total`
  MODIFY `order_total_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `page`
--
ALTER TABLE `page`
  MODIFY `page_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=139;
--
-- AUTO_INCREMENT for table `page_group`
--
ALTER TABLE `page_group`
  MODIFY `page_group_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=303;
--
-- AUTO_INCREMENT for table `product_description`
--
ALTER TABLE `product_description`
  MODIFY `product_description_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_discount`
--
ALTER TABLE `product_discount`
  MODIFY `product_discount_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=382;
--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1985;
--
-- AUTO_INCREMENT for table `product_option`
--
ALTER TABLE `product_option`
  MODIFY `product_option_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_option_value`
--
ALTER TABLE `product_option_value`
  MODIFY `product_option_value_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_rating`
--
ALTER TABLE `product_rating`
  MODIFY `rating_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_related`
--
ALTER TABLE `product_related`
  MODIFY `related_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=599;
--
-- AUTO_INCREMENT for table `product_special`
--
ALTER TABLE `product_special`
  MODIFY `product_special_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=416;
--
-- AUTO_INCREMENT for table `product_tag`
--
ALTER TABLE `product_tag`
  MODIFY `product_tag_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `product_to_category`
--
ALTER TABLE `product_to_category`
  MODIFY `product_to_category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2286;
--
-- AUTO_INCREMENT for table `product_view_log`
--
ALTER TABLE `product_view_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `settings_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `stock_status`
--
ALTER TABLE `stock_status`
  MODIFY `stock_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- AUTO_INCREMENT for table `user_group`
--
ALTER TABLE `user_group`
  MODIFY `group_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;
--
-- AUTO_INCREMENT for table `zone`
--
ALTER TABLE `zone`
  MODIFY `zone_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;
--
-- AUTO_INCREMENT for table `zone_to_geo_zone`
--
ALTER TABLE `zone_to_geo_zone`
  MODIFY `zone_to_geo_zone_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `fk_customer_id_tbl_customer_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

--
-- Constraints for table `banner`
--
ALTER TABLE `banner`
  ADD CONSTRAINT `fk_BannerGroup_Banner` FOREIGN KEY (`banner_group_id`) REFERENCES `banner_group` (`banner_group_id`) ON DELETE CASCADE;

--
-- Constraints for table `banner_image_description`
--
ALTER TABLE `banner_image_description`
  ADD CONSTRAINT `fk_BannerImage_BannerImageDescription` FOREIGN KEY (`banner_image_id`) REFERENCES `banner_image` (`banner_image_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_Banner_BannerImageDescription` FOREIGN KEY (`banner_id`) REFERENCES `banner` (`banner_id`) ON DELETE CASCADE;

--
-- Constraints for table `customer_transaction`
--
ALTER TABLE `customer_transaction`
  ADD CONSTRAINT `fk_customer_transaction_customer1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `fk_customer_transaction_order1` FOREIGN KEY (`order_id`) REFERENCES `order` (`order_id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
