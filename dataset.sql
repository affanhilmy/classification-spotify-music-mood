-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 25, 2022 at 04:05 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mood_music`
--

-- --------------------------------------------------------

--
-- Table structure for table `dataset`
--

CREATE TABLE `dataset` (
  `id` varchar(100) NOT NULL,
  `title` varchar(200) NOT NULL,
  `artist` varchar(100) NOT NULL,
  `dancebility` float NOT NULL,
  `tempo` float NOT NULL,
  `energy` float NOT NULL,
  `valance` float NOT NULL,
  `mood` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dataset`
--

INSERT INTO `dataset` (`id`, `title`, `artist`, `dancebility`, `tempo`, `energy`, `valance`, `mood`) VALUES
('01beCqR9wsVnwzkAJZyTqq', 'I Love You but I\'m Letting Go', 'Pamungkas', 0.393, 79.628, 0.319, 0.131, 'Sedih'),
('04aAxqtGp5pv12UXAg4pkq', 'Centuries', 'Fall Out Boy', 0.393, 176.042, 0.858, 0.56, 'Senang'),
('0Eqg0CQ7bK3RQIMPw1A7pl', 'Malibu Nights', 'LANY', 0.559, 74.002, 0.422, 0.191, 'Sedih'),
('0g6eyRQ1216ffExtp8NuZO', 'Eastside - Acoustic', 'benny blanco', 0.689, 90.011, 0.492, 0.868, 'Santai'),
('0GDSRwMesUM2S8qtoUT5L4', 'Walau Habis Terang', 'Peterpan', 0.583, 124.992, 0.786, 0.547, 'Senang'),
('0GgN4MhR5GKn5IcKN0e0rG', 'Cancer', 'My Chemical Romance', 0.457, 74.984, 0.515, 0.222, 'Marah'),
('0gplL1WMoJ6iYaPgMCL0gX', 'Easy On Me', 'Adele', 0.604, 141.981, 0.366, 0.13, 'Sedih'),
('0jlREJOAyFtUKmW3vAKogF', 'Move Along', 'Summerlane', 0.378, 179.971, 0.983, 0.694, 'Senang'),
('0KKkJNfGyhkQ5aFogxQAPU', 'That\'s What I Like', 'Bruno Mars', 0.853, 134.066, 0.56, 0.86, 'Senang'),
('0lgiIwUU7Y10uXfKkgXdjk', 'In Bloom', 'Neck Deep', 0.593, 110.979, 0.958, 0.378, 'Marah'),
('0OVcoOK5WVvE6D9CXkopa9', 'Separuh Aku', 'Noah', 0.547, 150.002, 0.752, 0.716, 'Senang'),
('0P5b1NOiH7ptjklmz9cdio', 'Better Days', 'Elephant Kind', 0.625, 143.977, 0.534, 0.631, 'Senang'),
('0pDmW5AOpl1Wi58Ob0xXB8', 'Labirin', 'Tulus', 0.699, 96.062, 0.486, 0.673, 'Santai'),
('0rgEL2cD2T5MDzSDJTQNlw', 'Jatuh Hati', 'Raisa', 0.536, 132.131, 0.355, 0.234, 'Sedih'),
('0Tw60ETiprzweU3AYHuTdq', 'Lowlife', 'Neck Deep', 0.584, 128.006, 0.915, 0.677, 'Senang'),
('0TziqLMlv3abspIvcEmxcY', 'if this is the last time', 'LANY', 0.566, 147.942, 0.586, 0.428, 'Marah'),
('0urpBLpcm6DOGzs86rcKd8', 'Untuk Perempuan Yang Sedang Di Pelukan', 'Payung Teduh', 0.477, 148.984, 0.493, 0.463, 'Sedih'),
('0WOvSEVpUGkNufX0w0M06F', '13', 'LANY', 0.784, 133.963, 0.539, 0.697, 'Senang'),
('14esDChp9k4yiTMupceWHO', 'Dibalik Awan', 'Noah', 0.543, 112.984, 0.723, 0.747, 'Senang'),
('15ahYSiHAIMxAnujlXVtta', 'Super Far', 'LANY', 0.575, 95.952, 0.46, 0.462, 'Sedih'),
('161DnLWsx1i3u1JT05lzqU', 'Talking to the Moon', 'Bruno Mars', 0.498, 145.867, 0.59, 0.0784, 'Marah'),
('1f8zcJPvJKvxAOjEqM0pyc', 'Love Yourself', 'Justin Bieber', 0.609, 100.418, 0.378, 0.515, 'Santai'),
('1hEHhT0DQMOPUcV6UP1cos', 'Mungkin Nanti', 'Peterpan', 0.591, 115.967, 0.684, 0.175, 'Marah'),
('1HNE2PX70ztbEl6MLxrpNL', 'In Too Deep', 'Sum 41', 0.568, 116.046, 0.844, 0.766, 'Senang'),
('1k5vv2ood14aa5uBYWBlWh', 'Resah', 'Payung Teduh', 0.415, 136.095, 0.286, 0.36, 'Sedih'),
('1MdjZzEInrmDBXf8zs0nKS', 'Dan...', 'Sheila On 7', 0.658, 125.041, 0.539, 0.536, 'Senang'),
('1MDVXlgY8Of2n2otw57hw0', 'Di Atas Meja', 'Payung Teduh', 0.581, 76.845, 0.443, 0.446, 'Sedih'),
('1nfOP7xNHeFSPOlziXswJc', 'Hari Bersamanya', 'Sheila On 7', 0.63, 119.984, 0.68, 0.792, 'Senang'),
('1q1dsfckKMgjfr8DfdeKfs', 'Amin Paling Serius', 'Sal Priadi', 0.361, 129.968, 0.255, 0.22, 'Sedih'),
('1QUtm56yu82Q7loVRmon0a', 'Laskar Pelangi', 'Nidji', 0.554, 90.023, 0.476, 0.512, 'Santai'),
('1SaQZoFXNu7ZAxxKImzFgf', 'Remaja', 'Hivi!', 0.623, 122.862, 0.439, 0.695, 'Santai'),
('1tS1dRfxIV9FzqdYTbJgMn', 'Kenangan Manis', 'Pamungkas', 0.604, 139.974, 0.678, 0.721, 'Senang'),
('1U1qumuS2O5Qttw8G7UXOZ', 'Teman Hidup', 'Tulus', 0.718, 83.033, 0.259, 0.426, 'Sedih'),
('1u8c2t2Cy7UBoG4ArRcF5g', 'Blank Space', 'Taylor Swift', 0.76, 95.997, 0.703, 0.57, 'Senang'),
('1vT1rKlEzvT9r0uYwAuwC8', 'Manusia Kuat', 'Tulus', 0.61, 111.949, 0.495, 0.622, 'Santai'),
('28MIhQn4HxHaGaNWuGB4bY', 'Biarlah', 'Nidji', 0.618, 141.985, 0.904, 0.844, 'Senang'),
('2bkzqem4veyueCgtIJ7bMV', 'Our First Song', 'Joseph Vincent', 0.701, 158.087, 0.252, 0.723, 'Santai'),
('2btKtacOXuMtC9WjcNRvAA', 'ILYSB', 'LANY', 0.636, 100.026, 0.623, 0.389, 'Marah'),
('2dIBMHByUGcNPzmYBJ6OAj', 'Evaluasi', 'Hindia', 0.609, 102.014, 0.966, 0.505, 'Senang'),
('2dpaYNEQHiRxtZbfNsse99', 'Happier', 'Marshmello', 0.687, 100.015, 0.792, 0.671, 'Senang'),
('2hHeGD57S0BcopfVcmehdl', 'Hati-Hati di Jalan', 'Tulus', 0.643, 71.969, 0.436, 0.755, 'Santai'),
('2lvVwe5EUHEO9iHMyYyD64', 'Bintang di Surga', 'Noah', 0.208, 74.297, 0.592, 0.305, 'Marah'),
('2MJz8BxxMsERULatmBikDH', 'At My Worst', 'Pink Sweat$', 0.813, 91.921, 0.415, 0.667, 'Santai'),
('2qgjqbi96IAOBzZFC6H57U', 'Diri', 'Tulus', 0.576, 96.103, 0.289, 0.485, 'Sedih'),
('2VMhO32IsyhshnUoKhjCBE', 'you!', 'LANY', 0.5, 94, 0.635, 0.276, 'Marah'),
('2wAiFWjRupWmnDkQcu91MF', 'Rumah Ke Rumah', 'Hindia', 0.72, 116.032, 0.786, 0.488, 'Marah'),
('2x9UGhofPBZdeam4uZCUID', '1000 Tahun Lamanya', 'Tulus', 0.707, 85.993, 0.475, 0.764, 'Santai'),
('2y5l3yERcNdgEjRCZ2Q5xS', 'Say You Won\'t Let Go', 'Joseph Vincent', 0.479, 186.34, 0.079, 0.565, 'Santai'),
('30WzWPV3Zi5ZJoSoftU30f', 'Closure', 'Pamungkas', 0.384, 139.82, 0.351, 0.268, 'Sedih'),
('32Pdf9eyXDEMoClEJW6yYP', 'Interaksi', 'Tulus', 0.464, 177.713, 0.344, 0.751, 'Santai'),
('3bNv3VuUOKgrf5hu3YcuRo', 'Someone Like You', 'Adele', 0.556, 135.187, 0.319, 0.294, 'Sedih'),
('3Dkvp3L4w0uJFYfIPa8E9H', 'ILYSB - STRIPPED', 'LANY', 0.661, 83.851, 0.393, 0.165, 'Sedih'),
('3EwuBUGd74g0h6i5ek0PS5', 'Puan Bermain Hujan', 'Payung Teduh', 0.703, 94.032, 0.487, 0.531, 'Santai'),
('3FcCAFQj4bLpfxo8gj1kk9', 'Adu Rayu', 'Yovie Widianto', 0.558, 99.953, 0.374, 0.217, 'Sedih'),
('3IesVVqYxCsRCsz5OCmC7q', 'April', 'Fiersa Besari', 0.399, 79.752, 0.466, 0.573, 'Santai'),
('3mHqANRsDYvDoRPR1YlrW4', 'Putuskan Saja Pacarmu', 'Bravesboy', 0.723, 129.954, 0.641, 0.917, 'Senang'),
('3NuKl7HM691ycLcCa6Vbq2', 'Menghapus Jejakmu', 'Noah', 0.763, 125.013, 0.631, 0.964, 'Senang'),
('3pCt2wRdBDa2kCisIdHWgF', 'To the Bone', 'Pamungkas', 0.668, 139.991, 0.727, 0.939, 'Senang'),
('3rN1JX75VL6IxVZoL4IA7n', 'Iki Sing Goblok Aku', 'Bravesboy', 0.825, 109.994, 0.47, 0.765, 'Santai'),
('3T03rPwlL8NVk1yIaxeD8U', 'Off My Face', 'Justin Bieber', 0.509, 90.674, 0.228, 0.586, 'Santai'),
('3wlLknnMtD8yZ0pCtCeeK4', 'Angel Baby', 'Troye Sivan', 0.559, 72.498, 0.559, 0.338, 'Marah'),
('3xTRHJwjjTP9dBP9aWbCi1', 'Ruang Sendiri', 'Tulus', 0.322, 159.866, 0.514, 0.362, 'Marah'),
('3z2Kcl9Oz1IxSgVoKN6RXo', 'Tak Pernah Ternilai', 'Last Child', 0.53, 134.988, 0.837, 0.412, 'Marah'),
('41CgzGD7xlgnJe14R4cqkL', 'Paris in the Rain', 'Lauv', 0.426, 76.309, 0.408, 0.528, 'Santai'),
('4aYMKMpoKrFBgo3TTIYT2Z', 'Diam', 'Payung Teduh', 0.73, 89.98, 0.396, 0.681, 'Santai'),
('4BLpx15uqj0UykcYPXALGO', 'Intuisi', 'Yura Yunita', 0.492, 80.077, 0.129, 0.358, 'Sedih'),
('4CvYHgcpBFbefsz6Q55ID1', 'Kali Kedua', 'Raisa', 0.518, 137.867, 0.517, 0.313, 'Marah'),
('4GfK1qOF3uBWidbPlTCQRL', 'Monokrom', 'Tulus', 0.534, 88.046, 0.462, 0.519, 'Santai'),
('4RAOI1etsgbh5NP3T5R8rN', 'I Don\'t Love You', 'My Chemical Romance', 0.289, 169.835, 0.796, 0.33, 'Marah'),
('4reIsHKw5hUj4pV8zzMjLA', 'I Still Love You', 'TheOvertunes', 0.446, 119.93, 0.159, 0.172, 'Sedih'),
('4rHZZAmHpZrA3iH5zx8frV', 'Mirrors', 'Justin Timberlake', 0.574, 76.899, 0.512, 0.512, 'Senang'),
('4so9pTT3Sc5g6MikgT38Uo', 'Diam Keroncong', 'Payung Teduh', 0.73, 89.98, 0.396, 0.681, 'Santai'),
('4Ssi6tKwrTHi5qvDndrZRP', 'Wish You Were Here', 'Neck Deep', 0.53, 159.957, 0.496, 0.535, 'Santai'),
('52dnMWMQIptDXcaaVqv5zA', 'Dewe Yo Wani', 'Bravesboy', 0.812, 97.443, 0.461, 0.776, 'Santai'),
('5BgZ1bi8xeWVxmg12RfWzv', 'Pelangi', 'Hivi!', 0.549, 97.781, 0.256, 0.178, 'Sedih'),
('5dFLCZFECZMRYICtN31BMg', 'Is It The Answer', 'Reality Club', 0.722, 117.496, 0.708, 0.462, 'Marah'),
('5drW6PGRxkE6MxttzVLNk5', 'Secukupnya', 'Hindia', 0.731, 102.006, 0.796, 0.933, 'Senang'),
('5IwUFTiNkarb5HEtNRtRtc', 'mother tongue', 'Bring Me The Horizon', 0.598, 107.009, 0.872, 0.609, 'Senang'),
('5j9tdGzuCDzYrz5Eey4q3N', 'Kultusan', 'Sal Priadi', 0.231, 175.865, 0.215, 0.176, 'Sedih'),
('5MIpcd16T59wFeqAChSYwC', 'Duka', 'Last Child', 0.566, 135.015, 0.885, 0.31, 'Marah'),
('5thYdqTZJZFtzSR9cXJzwk', 'Wait a Minute', 'Pamungkas', 0.47, 109.81, 0.651, 0.313, 'Marah'),
('5UwluJ6hCnGTvweMFwRFSi', 'True Love', 'Elephant Kind', 0.626, 133.989, 0.747, 0.124, 'Marah'),
('5Ven9G4zXjfTPf4vsZH5oq', 'Lights Up', 'Elephant Kind', 0.565, 126.93, 0.406, 0.153, 'Sedih'),
('5wQnmLuC1W7ATsArWACrgW', 'Welcome to the Black Parade', 'My Chemical Romance', 0.217, 96.95, 0.905, 0.236, 'Marah'),
('5zQyqgNXKzhifkivumzxDS', 'My Girl', 'Otis Redding', 0.74, 102.889, 0.322, 0.629, 'Santai'),
('6BZ6pl5bczDc3cMF1kBaOy', 'pink skies', 'LANY', 0.719, 103.968, 0.631, 0.466, 'Marah'),
('6DEMMeWXfmFAXgDUMMzeg6', 'All I Ask', 'Adele', 0.591, 141.916, 0.28, 0.348, 'Sedih'),
('6hf3tkbmLLUQmN8MaxNwRq', 'You Belong With Me (Taylor’s Version)', 'Taylor Swift', 0.632, 130.033, 0.773, 0.474, 'Marah'),
('6HP1bbIqafhFCRwMw81c7G', 'Yang Terdalam', 'Noah', 0.617, 137.973, 0.489, 0.554, 'Santai'),
('6i5sIqE4lglanzlXXl8gCj', 'Usai Di Sini', 'Raisa', 0.445, 121.468, 0.201, 0.547, 'Santai'),
('6Khn20yWc0YGJy1wbkz3Be', 'Could It Be', 'Raisa', 0.673, 100.03, 0.537, 0.632, 'Senang'),
('6o39Ln9118FKTMbM4BvcEy', 'Drown', 'Bring Me The Horizon', 0.405, 143.126, 0.94, 0.24, 'Marah'),
('6O5TrlFWTYvznd9fMC0VvU', 'When We Were Young', 'Adele', 0.376, 144.361, 0.595, 0.265, 'Marah'),
('74OLXYsvpfmSgPCMMi898K', 'bitterlove', 'Ardhito Pramono', 0.678, 149.393, 0.531, 0.574, 'Senang'),
('7aBxAcWHtFv9Miccdcifn3', 'Ikat Aku Di Tulang Belikatmu', 'Sal Priadi', 0.136, 165.886, 0.22, 0.0675, 'Sedih'),
('7BqBn9nzAq8spo5e7cZ0dJ', 'Just the Way You Are', 'Bruno Mars', 0.635, 109.021, 0.841, 0.424, 'Marah'),
('7c98gah3Qah9o76kgkzfrV', 'Bahasa Kalbu', 'Raisa', 0.22, 83.837, 0.284, 0.155, 'Sedih'),
('7GbAp0HKPQW7WnFJAzMoRk', 'Thru These Tears', 'LANY', 0.711, 119.945, 0.517, 0.294, 'Marah'),
('7JFFMicliyVArHQgwEqVBS', 'Alexandra', 'Reality Club', 0.382, 138.419, 0.355, 0.146, 'Sedih'),
('7tZ69fC235bauF9Dyxk8Ps', 'Berdua Saja', 'Payung Teduh', 0.379, 177.814, 0.28, 0.251, 'Sedih');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dataset`
--
ALTER TABLE `dataset`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
