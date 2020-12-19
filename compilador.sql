-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-04-2019 a las 07:46:00
-- Versión del servidor: 10.1.37-MariaDB
-- Versión de PHP: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `compilador`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `caracter`
--

CREATE TABLE `caracter` (
  `id_caracter` int(11) NOT NULL,
  `simbolo` char(10) CHARACTER SET latin1 COLLATE latin1_general_cs NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `caracter`
--

INSERT INTO `caracter` (`id_caracter`, `simbolo`) VALUES
(1, 'A'),
(2, 'B'),
(3, 'C'),
(4, 'D'),
(5, 'E'),
(6, 'F'),
(7, 'G'),
(8, 'H'),
(9, 'I'),
(10, 'J'),
(11, 'K'),
(12, 'L'),
(13, 'M'),
(14, 'N'),
(15, 'O'),
(16, 'P'),
(17, 'Q'),
(18, 'R'),
(19, 'S'),
(20, 'T'),
(21, 'U'),
(22, 'V'),
(23, 'W'),
(24, 'X'),
(25, 'Y'),
(26, 'Z'),
(27, 'a'),
(28, 'b'),
(29, 'c'),
(30, 'd'),
(31, 'e'),
(32, 'f'),
(33, 'g'),
(34, 'h'),
(35, 'i'),
(36, 'j'),
(37, 'k'),
(38, 'l'),
(39, 'm'),
(40, 'n'),
(41, 'o'),
(42, 'p'),
(43, 'q'),
(44, 'r'),
(45, 's'),
(46, 't'),
(47, 'u'),
(48, 'v'),
(49, 'w'),
(50, 'x'),
(51, 'y'),
(52, 'z'),
(53, '1'),
(54, '2'),
(55, '3'),
(56, '4'),
(57, '5'),
(58, '6'),
(59, '7'),
(60, '8'),
(61, '9'),
(62, '0'),
(63, '+'),
(64, '-'),
(65, '*'),
(66, '/'),
(67, '\"'),
(68, ':'),
(69, '='),
(70, ';'),
(71, '['),
(72, ']'),
(73, '('),
(74, ')'),
(75, '<'),
(76, '>'),
(77, '&'),
(78, '|'),
(79, '.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `descripcion`
--

CREATE TABLE `descripcion` (
  `id_descripcion` int(11) NOT NULL,
  `texto` text COLLATE latin1_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `descripcion`
--

INSERT INTO `descripcion` (`id_descripcion`, `texto`) VALUES
(1, 'Palabra Reservada Simple'),
(2, 'Palabra Reservada Compuesta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `palabra_reservada`
--

CREATE TABLE `palabra_reservada` (
  `id_reservada` int(11) NOT NULL,
  `reservada` text COLLATE latin1_spanish_ci NOT NULL,
  `id_iddescripcion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `palabra_reservada`
--

INSERT INTO `palabra_reservada` (`id_reservada`, `reservada`, `id_iddescripcion`) VALUES
(1, 'programa', 1),
(2, 'inicio', 1),
(3, 'fin', 1),
(4, 'var', 1),
(5, 'as', 1),
(6, 'integer', 1),
(7, 'string', 1),
(8, 'double', 1),
(9, 'float', 1),
(10, 'boolean', 1),
(11, 'if', 1),
(12, 'else', 1),
(13, 'for', 1),
(14, 'while', 1),
(15, 'do', 1),
(16, 'switch', 1),
(17, 'case', 1),
(18, 'true', 1),
(19, 'false', 1),
(20, 'then', 1),
(21, 'and', 1),
(22, 'or', 1),
(23, 'enddo', 2),
(24, 'endif', 2),
(25, 'endwhile', 2),
(26, 'endswitch', 2),
(27, 'endfor', 2),
(28, '/*', 2),
(29, '*/', 2),
(30, ':=', 2),
(31, 'inimat', 2),
(32, 'enmat', 2),
(33, 'elseif', 2),
(34, '&&', 2),
(35, '||', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablaascii`
--

CREATE TABLE `tablaascii` (
  `id_tablaASCII` int(11) NOT NULL,
  `codigo` int(11) NOT NULL,
  `simbolo` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Volcado de datos para la tabla `tablaascii`
--

INSERT INTO `tablaascii` (`id_tablaASCII`, `codigo`, `simbolo`) VALUES
(1, 32, 'Espacio'),
(2, 33, '!'),
(3, 34, '\"'),
(4, 35, '#'),
(5, 36, '#'),
(6, 37, '%'),
(7, 38, '&'),
(8, 39, '\''),
(9, 40, '('),
(10, 41, ')'),
(11, 42, '*'),
(12, 43, '+'),
(13, 44, ','),
(14, 45, '-'),
(15, 46, '.'),
(16, 47, '/'),
(17, 48, '0'),
(18, 49, '1'),
(19, 50, '2'),
(20, 51, '3'),
(21, 52, '4'),
(22, 53, '5'),
(23, 54, '6'),
(24, 55, '7'),
(25, 56, '8'),
(26, 57, '9'),
(27, 58, ':'),
(28, 59, ';'),
(29, 60, '<'),
(30, 61, '='),
(31, 62, '>'),
(32, 63, '?'),
(33, 64, '@'),
(34, 65, 'A'),
(35, 66, 'B'),
(36, 67, 'C'),
(37, 68, 'D'),
(38, 69, 'E'),
(39, 70, 'F'),
(40, 71, 'G'),
(41, 72, 'H'),
(42, 73, 'I'),
(43, 74, 'J'),
(44, 75, 'K'),
(45, 76, 'L'),
(46, 77, 'M'),
(47, 78, 'N'),
(48, 79, 'O'),
(49, 80, 'P'),
(50, 81, 'Q'),
(51, 82, 'R'),
(52, 83, 'S'),
(53, 84, 'T'),
(54, 85, 'U'),
(55, 86, 'V'),
(56, 87, 'W'),
(57, 88, 'X'),
(58, 89, 'Y'),
(59, 90, 'Z'),
(60, 91, '['),
(61, 92, '\\'),
(62, 93, ']'),
(63, 94, '^'),
(64, 95, '_'),
(65, 96, '`'),
(66, 97, 'a'),
(67, 98, 'b'),
(68, 99, 'c'),
(69, 100, 'd'),
(70, 101, 'e'),
(71, 102, 'f'),
(72, 103, 'g'),
(73, 104, 'h'),
(74, 105, 'i'),
(75, 106, 'j'),
(76, 107, 'k'),
(77, 108, 'l'),
(78, 109, 'm'),
(79, 110, 'n'),
(80, 111, 'o'),
(81, 112, 'p'),
(82, 113, 'q'),
(83, 114, 'r'),
(84, 115, 's'),
(85, 115, 't'),
(86, 117, 'u'),
(87, 118, 'v'),
(88, 119, 'w'),
(89, 120, 'x'),
(90, 121, 'y'),
(91, 122, 'z'),
(92, 123, '{'),
(93, 124, '|'),
(94, 125, '}'),
(95, 126, '~'),
(96, 127, '⌂'),
(97, 128, 'Ç '),
(98, 129, '?'),
(99, 130, '? '),
(100, 131, '? '),
(101, 132, '?  '),
(102, 133, '?'),
(103, 134, '?'),
(104, 135, '? '),
(105, 136, '? '),
(106, 137, '?'),
(107, 138, '? '),
(108, 139, '?'),
(109, 140, '?'),
(110, 141, '?'),
(111, 142, '?'),
(112, 143, '?'),
(113, 144, '?'),
(114, 145, '?'),
(115, 146, '?'),
(116, 147, '?'),
(117, 148, '?'),
(118, 149, '?'),
(119, 150, '?'),
(120, 151, '?'),
(121, 152, '?'),
(122, 153, '?'),
(123, 154, '?'),
(124, 155, '?'),
(125, 155, '?'),
(126, 156, '?'),
(127, 157, '?'),
(128, 158, '?'),
(129, 159, '?'),
(130, 160, '?'),
(131, 161, '?'),
(132, 162, '?'),
(133, 163, '?'),
(134, 164, '?'),
(135, 165, '?'),
(136, 166, '?'),
(137, 167, '?'),
(138, 168, '?'),
(140, 169, '?	'),
(141, 170, '?'),
(142, 171, '?'),
(143, 172, '?'),
(144, 173, '?'),
(145, 174, '?	'),
(146, 175, '?'),
(147, 176, '?'),
(148, 177, '?	'),
(149, 178, '?	'),
(150, 179, '?');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `caracter`
--
ALTER TABLE `caracter`
  ADD PRIMARY KEY (`id_caracter`);

--
-- Indices de la tabla `descripcion`
--
ALTER TABLE `descripcion`
  ADD PRIMARY KEY (`id_descripcion`);

--
-- Indices de la tabla `palabra_reservada`
--
ALTER TABLE `palabra_reservada`
  ADD PRIMARY KEY (`id_reservada`);

--
-- Indices de la tabla `tablaascii`
--
ALTER TABLE `tablaascii`
  ADD PRIMARY KEY (`id_tablaASCII`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `caracter`
--
ALTER TABLE `caracter`
  MODIFY `id_caracter` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT de la tabla `descripcion`
--
ALTER TABLE `descripcion`
  MODIFY `id_descripcion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `palabra_reservada`
--
ALTER TABLE `palabra_reservada`
  MODIFY `id_reservada` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `tablaascii`
--
ALTER TABLE `tablaascii`
  MODIFY `id_tablaASCII` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
