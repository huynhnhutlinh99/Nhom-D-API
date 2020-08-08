-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1:3306
-- Thời gian đã tạo: Th8 04, 2020 lúc 05:06 AM
-- Phiên bản máy phục vụ: 10.4.10-MariaDB
-- Phiên bản PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `demo`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ourservices`
--

DROP TABLE IF EXISTS `ourservices`;
CREATE TABLE IF NOT EXISTS `ourservices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Des` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ImageUrl` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ourservices`
--

INSERT INTO `ourservices` (`id`, `Name`, `Des`, `ImageUrl`) VALUES
(1, 'Portfolio Management 1', 'Aenean lacinia bibendum nulla sed consectetur', 'https://i.pinimg.com/564x/cc/e7/fa/cce7fa567da9f06946c9dae73279d0ba.jpg'),
(2, 'Portfolio Management 2', 'Aenean lacinia bibendum nulla sed consectetur', 'https://i.pinimg.com/236x/cc/02/7c/cc027c1122c8942d37cf978b023a4761.jpg'),
(3, 'Portfolio Management 3', 'Aenean lacinia bibendum nulla sed consectetur', 'https://i.pinimg.com/236x/4b/a2/54/4ba254f3c276d188410cff02624874a7.jpg'),
(4, 'Portfolio Management 4', 'Aenean lacinia bibendum nulla sed consectetur', 'https://i.pinimg.com/564x/a5/7a/34/a57a3420e84fd0d9c25edae54e826d49.jpg'),
(5, 'Portfolio Management 5', 'Aenean lacinia bibendum nulla sed consectetur', 'https://i.pinimg.com/236x/c2/a8/21/c2a821719755767e7740ea5bb73eb4dc.jpg'),
(6, 'Portfolio Management 6', 'Aenean lacinia bibendum nulla sed consectetur', 'https://i.pinimg.com/236x/4b/09/0b/4b090b9f9993316f408758fb3de7e16c.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
