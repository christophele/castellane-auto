-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mer. 18 avr. 2018 à 14:26
-- Version du serveur :  5.6.35
-- Version de PHP :  7.1.6

DROP DATABASE IF EXISTS auto_ecole_ppe1;

CREATE DATABASE auto_ecole_ppe1;

USE auto_ecole_ppe1;

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `auto_ecole_ppe1`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `numadmin` int(11) NOT NULL,
  `nomadmin` varchar(30) NOT NULL,
  `prenomadmin` varchar(30) NOT NULL,
  `adresseadmin` varchar(100) NOT NULL,
  `numteladmin` varchar(10) NOT NULL,
  `mailadmin` varchar(200) NOT NULL,
  `mdpadmin` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`numadmin`, `nomadmin`, `prenomadmin`, `adresseadmin`, `numteladmin`, `mailadmin`, `mdpadmin`) VALUES
(2, 'le', 'chris', '23 villa d\'este', '0670690086', 'le_christophe@hotmail.fr', '1234678');

-- --------------------------------------------------------

--
-- Structure de la table `archiveclient`
--

CREATE TABLE `archiveclient` (
  `numclient` int(11) NOT NULL,
  `nomclient` varchar(20) DEFAULT NULL,
  `prenomclient` varchar(20) DEFAULT NULL,
  `adresseclient` varchar(20) DEFAULT NULL,
  `datedenaissanceclient` date DEFAULT NULL,
  `telephoneclient` varchar(20) DEFAULT NULL,
  `mailclient` varchar(50) DEFAULT NULL,
  `dateinscriptionclient` date DEFAULT NULL,
  `modefacturation` varchar(20) DEFAULT NULL,
  `typeclient` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `archiveclient`
--

INSERT INTO `archiveclient` (`numclient`, `nomclient`, `prenomclient`, `adresseclient`, `datedenaissanceclient`, `telephoneclient`, `mailclient`, `dateinscriptionclient`, `modefacturation`, `typeclient`) VALUES
(46, 'Aime', 'Simon', '23 rue des faubourgs', '1986-03-06', '0765456578', 'as.aime@gmail.com', '2015-11-13', 'esp', 'salarie'),
(48, 'Bridet', 'tibo', '54 rue des ratpis', '1986-11-28', '0654321234', 'bridet.tibo@gmail.com', '2015-09-04', 'chq', 'salarie'),
(49, 'rolan', 'valentin', '23 rue du four', '1986-02-23', '0654321234', 'rolan@gmail.com', '2015-09-04', 'chq', 'salarie'),
(50, 'keyvan', 'keke', '34 rue de saint vill', '1991-04-17', '0654434553', 'keyvan@gmail.com', '2016-01-14', 'chq', 'etudiant'),
(51, 'Allianny', 'Jordan', '02 rue du temple par', '1994-06-15', '0123456789', 'jojo@gmail.com', '2016-02-25', 'chq', 'etudiant'),
(52, 'Allianny', 'Jordan', '02 rue du temple par', '1994-06-15', '0123456789', 'jojo@gmail.com', '2016-02-25', 'chq', 'etudiant'),
(53, 'Yves', 'Quentin', '2 rue de la paie par', '1999-12-10', '0129876543', 'y.quentin@gmail.com', '2016-02-26', 'chq', 'etudiant'),
(55, 'Yves', 'Quentin', '2 rue de la paie par', '1999-12-10', '0129876543', 'y.quentin@gmail.com', '2016-02-26', 'chq', 'etudiant'),
(56, 'Yves', 'Quentin', '2 rue de la paie par', '1999-12-10', '0129876543', 'y.quentin@gmail.com', '2016-02-26', 'chq', 'etudiant'),
(57, 'Yves', 'Quentin', '2 rue de la paie par', '1999-12-10', '0129876543', 'y.quentin@gmail.com', '2016-02-26', 'chq', 'etudiant'),
(58, 'Durand', 'dominique', '7 rue du temple pari', '1989-07-22', '0634569872', 'durand.dom@gmail.com', '2016-02-27', 'chq', 'etudiant'),
(59, 'Aliany', 'Jordan', '02 rue du temple par', '1992-09-22', '0129384756', 'jojo@gmail.com', '2016-02-27', 'chq', 'etudiant'),
(60, 'Yves', 'Quentin', '21 passage robespier', '1992-10-22', '0189765432', 'y.quentin@gmail.com', '2016-02-27', 'chq', 'etudiant');

-- --------------------------------------------------------

--
-- Structure de la table `archivedemandelecon`
--

CREATE TABLE `archivedemandelecon` (
  `id_demande` int(11) NOT NULL DEFAULT '0',
  `datelecon` date NOT NULL,
  `heurelecon` time NOT NULL,
  `mailclient` varchar(50) NOT NULL,
  `etat` varchar(10) DEFAULT 'en attente',
  `date_archive` date NOT NULL DEFAULT '0000-00-00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `archivedemandelecon`
--

INSERT INTO `archivedemandelecon` (`id_demande`, `datelecon`, `heurelecon`, `mailclient`, `etat`, `date_archive`) VALUES
(19, '2016-03-09', '09:00:00', 'fr.laurent@gmail.com', 'annulé', '2016-03-04'),
(21, '2016-03-06', '13:00:00', 'samirra.tol@yahoo.fr', 'annulÃ©', '2016-03-04'),
(24, '2016-03-06', '10:00:00', 'fr.laurent@gmail.com', 'annulÃ©', '2016-03-07'),
(40, '2016-03-28', '17:00:00', 'nara.david@gmail.com', 'annulÃ©', '2016-03-17'),
(51, '2016-03-28', '08:00:00', 'samirra.tol@yahoo.fr', 'annulÃ©', '2016-04-08'),
(25, '2016-03-09', '16:00:00', 'samirra.tol@yahoo.fr', 'annulÃ©', '2016-06-09'),
(55, '2016-06-17', '13:00:00', 'fr.laurent@gmail.com', 'annulÃ©', '2016-06-09');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `numclient` int(11) NOT NULL,
  `nomclient` varchar(20) NOT NULL,
  `prenomclient` varchar(20) NOT NULL,
  `adresseclient` varchar(100) NOT NULL,
  `datedenaissanceclient` date NOT NULL,
  `telephoneclient` varchar(20) NOT NULL,
  `mailclient` varchar(50) NOT NULL,
  `dateinscriptionclient` date NOT NULL,
  `modefacturation` varchar(20) NOT NULL,
  `typeclient` varchar(10) DEFAULT NULL,
  `mdpclient` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`numclient`, `nomclient`, `prenomclient`, `adresseclient`, `datedenaissanceclient`, `telephoneclient`, `mailclient`, `dateinscriptionclient`, `modefacturation`, `typeclient`, `mdpclient`) VALUES
(42, 'francois', 'Laurent', '5 rue du louvre 75019', '1993-11-24', '0765456578', 'fr.laurent@gmail.com', '2015-12-16', 'espece', 'etudiant', '12'),
(47, 'Tolennk', 'Samira', '34 boulevard jaures ', '1990-02-18', '09877665433', 'samirra.tol@yahoo.fr', '2015-10-24', 'cheque', 'etudiant', '1234'),
(62, 'Alvarez', 'Monica', '32 boulevard degaule', '1887-04-12', '0638267917', 'm.alvarez@gmail.com', '2016-02-27', 'chq', 'salarie', '123'),
(63, 'Abaleee', 'Yvon', '23 rue de cannes 75018', '1993-12-12', '0798612534', 'Y.abale@gmail.com', '2016-03-11', 'cheque', 'etudiant', ''),
(64, 'Romeo', 'Julien', '26, rue de villiers 72890', '1993-06-22', '0652786542', 'julien.r@gmail.com', '2016-04-08', 'chq', 'etudiant', '');

--
-- Déclencheurs `client`
--
DELIMITER $$
CREATE TRIGGER `td_client` AFTER DELETE ON `client` FOR EACH ROW begin


    delete from passercode
    where passercode.numclient = old.numclient;

    delete from passerconduite
    where passerconduite.numclient = old.numclient;

    delete from planning
    where planning.numclient = old.numclient;

    delete from etudiant
    where etudiant.numclient = old.numclient;

    delete from salarie
    where salarie.numclient = old.numclient;

end
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `tu_client` AFTER UPDATE ON `client` FOR EACH ROW begin
if old.numclient != new.numclient
then update passercode
set passercode.numclient = new.numclient
where passercode.numclient = new.numclient;
end if;
if old.numclient != new.numclient
then update passerconduite
set passerconduite.numclient = new.numclient
where passerconduite.numclient = new.numclient;
end if ;
if old.numclient != new.numclient
then update planning
set planning.numclient = new.numclient
where planning.numclient = new.numclient;
end if;
if old.numclient != new.numclient
then update etudiant
set etudiant.numclient = new.numclient
where etudiant.numclient = new.numclient;
end if;
if old.numclient != new.numclient
then update salarie
set salarie.numclient = new.numclient
where salarie.numclient = new.numclient;
end if ;
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `id_comm` int(11) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `commentaires`
--

INSERT INTO `commentaires` (`id_comm`, `nom`, `email`, `message`) VALUES
(3, 'Amaskane', 'Elias@gmail.com', 'ca marche'),
(4, 'Amaskane', 'Elias@gmail.com', 'bonjour je dois annuler ma seance de 14h demain');

-- --------------------------------------------------------

--
-- Structure de la table `demandelecon`
--

CREATE TABLE `demandelecon` (
  `id_demande` int(11) NOT NULL,
  `datelecon` date NOT NULL,
  `heurelecon` time NOT NULL,
  `mailclient` varchar(50) CHARACTER SET latin1 NOT NULL,
  `etat` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `demandelecon`
--

INSERT INTO `demandelecon` (`id_demande`, `datelecon`, `heurelecon`, `mailclient`, `etat`) VALUES
(26, '2016-03-10', '11:00:00', 'fr.laurent@gmail.com', 'valide'),
(27, '2016-03-11', '18:00:00', 'fr.laurent@gmail.com', 'valide'),
(28, '2016-03-23', '09:00:00', 'fr.laurent@gmail.com', 'valide'),
(29, '2016-03-11', '10:00:00', 'fr.laurent@gmail.com', 'valide'),
(30, '2016-03-12', '07:00:00', 'samirra.tol@yahoo.fr', 'valide'),
(31, '2016-03-13', '10:00:00', 'fr.laurent@gmail.com', 'valide'),
(42, '2016-03-24', '11:00:00', 'samirra.tol@yahoo.fr', 'valide'),
(43, '2016-03-17', '07:00:00', 'fr.laurent@gmail.com', 'valide'),
(44, '2016-03-18', '09:00:00', 'fr.laurent@gmail.com', 'valide'),
(45, '2016-03-18', '16:00:00', 'fr.laurent@gmail.com', 'disponible'),
(51, '2016-04-30', '10:00:00', 'fr.laurent@gmail.com', 'disponible'),
(52, '2016-05-04', '12:00:00', 'fr.laurent@gmail.com', 'annulÃ©'),
(53, '2016-04-30', '10:00:00', 'fr.laurent@gmail.com', 'annulÃ©'),
(54, '2016-06-17', '13:00:00', 'fr.laurent@gmail.com', 'valide');

-- --------------------------------------------------------

--
-- Structure de la table `etudiant`
--

CREATE TABLE `etudiant` (
  `nometablissement` varchar(30) NOT NULL,
  `adresseetablissement` varchar(20) NOT NULL,
  `nivetude` varchar(50) NOT NULL,
  `reduction` varchar(30) NOT NULL,
  `numclient` int(11) NOT NULL,
  `nomclient` varchar(20) NOT NULL,
  `prenomclient` varchar(20) NOT NULL,
  `adresseclient` varchar(20) NOT NULL,
  `datedenaissanceclient` date NOT NULL,
  `telephoneclient` varchar(20) NOT NULL,
  `mailclient` varchar(50) NOT NULL,
  `dateinscriptionclient` date NOT NULL,
  `modefacturation` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déclencheurs `etudiant`
--
DELIMITER $$
CREATE TRIGGER `ti_etudiant` AFTER INSERT ON `etudiant` FOR EACH ROW begin
declare numrows integer;
select count(*) into numrows
from client
where new.numclient = client.numclient;
if numrows = 0
then Signal SQLSTATE'45000'
set MESSAGE_TEXT="Impossible d'ajouter etudiant car client n'existe pas !!";
end if;
end
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `tu_etudiant` AFTER UPDATE ON `etudiant` FOR EACH ROW begin
if new.numclient != old.numclient
then SIGNAL SQLSTATE'45000'
set MESSAGE_TEXT ='modification de la cle etrangere referencant la table client interdite.';
end if;
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `examincode`
--

CREATE TABLE `examincode` (
  `id_exam_code` int(11) NOT NULL,
  `salle` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `examinconduite`
--

CREATE TABLE `examinconduite` (
  `id_exam_conduite` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `lecon`
--

CREATE TABLE `lecon` (
  `numlecon` int(11) NOT NULL,
  `datelecon` date DEFAULT NULL,
  `heurelecon` time NOT NULL,
  `tarifheure` float(10,2) NOT NULL,
  `id_demande` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `lecon`
--

INSERT INTO `lecon` (`numlecon`, `datelecon`, `heurelecon`, `tarifheure`, `id_demande`) VALUES
(41, '2016-03-11', '18:00:00', 45.00, 27),
(42, '2016-03-23', '09:00:00', 45.00, 28),
(43, '2016-03-11', '10:00:00', 45.00, 29),
(44, '2016-03-12', '07:00:00', 45.00, 30),
(45, '2016-03-13', '10:00:00', 45.00, 31),
(46, '2016-03-19', '07:00:00', 45.00, 32),
(47, '2016-03-18', '09:00:00', 45.00, 33),
(48, '2016-03-20', '12:00:00', 45.00, 34),
(49, '2016-03-22', '10:00:00', 45.00, 35),
(50, '2016-03-23', '10:00:00', 45.00, 36),
(51, '2016-03-28', '17:00:00', 45.00, 39),
(52, '2016-03-24', '11:00:00', 45.00, 42),
(53, '2016-03-28', '08:00:00', 45.00, 41),
(55, '2016-03-25', '11:00:00', 45.00, 47),
(56, '2016-03-24', '15:00:00', 45.00, 49),
(57, '2016-03-17', '07:00:00', 45.00, 43),
(58, '2016-03-18', '09:00:00', 45.00, 44),
(59, '2016-03-25', '15:00:00', 45.00, 50),
(60, '2016-03-26', '13:00:00', 45.00, 48);

-- --------------------------------------------------------

--
-- Structure de la table `moniteur`
--

CREATE TABLE `moniteur` (
  `nummoniteur` int(11) NOT NULL,
  `nommoniteur` varchar(20) NOT NULL,
  `prenommoniteur` varchar(20) NOT NULL,
  `adressemoniteur` varchar(200) NOT NULL,
  `numtelephonemoniteur` varchar(10) NOT NULL,
  `mailmoniteur` varchar(200) NOT NULL,
  `mdpmoniteur` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `moniteur`
--

INSERT INTO `moniteur` (`nummoniteur`, `nommoniteur`, `prenommoniteur`, `adressemoniteur`, `numtelephonemoniteur`, `mailmoniteur`, `mdpmoniteur`) VALUES
(1, 'oben', 'okasha', '98 avenue de l\'arbre', '0656453423', 'oben@gmail.com', '123'),
(2, 'elias', 'amaskane', '\'importe quoi', '0765456543', 'elias@gmail.com', '1234'),
(3, 'bribri', 'vivi', '4 ru du shit', '0987654321', 'bribri@gmail.com', '12345'),
(4, 'malraux', 'andr', '7 avenue du champs', '0656879812', 'andre@gmail.com', '123456'),
(5, 'nara', 'david', '67 rue de choisi', '0645343265', 'nara@gmail.com', '1234567'),
(6, 'juelz', 'mojito', '02 ru nain', '0987654321', 'juelz@gmail.fr', '12345'),
(7, 'Chouaki', 'Abdel', '02 rue clicli', '0987654321', 'c.Abdel@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Structure de la table `moto`
--

CREATE TABLE `moto` (
  `couleurmoto` varchar(20) NOT NULL,
  `numvehicule` int(11) NOT NULL,
  `marque` varchar(30) NOT NULL,
  `modele` varchar(30) NOT NULL,
  `année` date NOT NULL,
  `cylindrée` int(5) NOT NULL,
  `nbkm` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `passercode`
--

CREATE TABLE `passercode` (
  `resultat` int(10) NOT NULL,
  `dateheurepassage` datetime NOT NULL,
  `id_exam_code` int(11) NOT NULL,
  `numclient` int(11) NOT NULL,
  `salle` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `passerconduite`
--

CREATE TABLE `passerconduite` (
  `resultat` int(10) NOT NULL,
  `dateheurepassage` datetime NOT NULL,
  `id_exam_conduite` int(11) NOT NULL,
  `numclient` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `planning`
--

CREATE TABLE `planning` (
  `datelecon` date NOT NULL,
  `heurelecon` time NOT NULL,
  `etatplanning` varchar(50) NOT NULL,
  `numclient` int(11) NOT NULL,
  `numvehicule` int(11) NOT NULL,
  `numlecon` int(11) NOT NULL,
  `nummoniteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `planning`
--

INSERT INTO `planning` (`datelecon`, `heurelecon`, `etatplanning`, `numclient`, `numvehicule`, `numlecon`, `nummoniteur`) VALUES
('2016-06-17', '13:00:00', 'En attente', 42, 1, 0, 2),
('2016-06-17', '13:00:00', 'En attente', 42, 1, 0, 7),
('2016-04-30', '10:00:00', 'En attente', 42, 1, 62, 1);

-- --------------------------------------------------------

--
-- Structure de la table `rouler`
--

CREATE TABLE `rouler` (
  `numvehicule` int(11) NOT NULL,
  `anneemois` int(8) NOT NULL,
  `nbkmparcourusmois` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `salarie`
--

CREATE TABLE `salarie` (
  `nomentreprise` varchar(20) NOT NULL,
  `adresseentreprise` varchar(20) NOT NULL,
  `statut` varchar(20) NOT NULL,
  `numclient` int(11) NOT NULL,
  `nomclient` varchar(20) NOT NULL,
  `prenomclient` varchar(20) NOT NULL,
  `adresseclient` varchar(20) NOT NULL,
  `datedenaissanceclient` date NOT NULL,
  `telephoneclient` varchar(20) NOT NULL,
  `mailclient` varchar(50) NOT NULL,
  `dateinscriptionclient` date NOT NULL,
  `modefacturation` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déclencheurs `salarie`
--
DELIMITER $$
CREATE TRIGGER `ti_salarie` AFTER INSERT ON `salarie` FOR EACH ROW begin
declare numrows integer;
select count(*) into numrows
from client
where new.numclient = client.numclient;
if numrows = 0
then Signal SQLSTATE'45000'
set MESSAGE_TEXT="Impossible d'ajouter etudiant car client n'existe pas !!";
end if;
end
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `tu_salarie` AFTER UPDATE ON `salarie` FOR EACH ROW begin
if old.numclient != new.numclient
then Signal SQLSTATE'45000'
set MESSAGE_TEXT="Impossible d'ajouter etudiant car client n'existe pas !!";
end if;
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Structure de la table `souscription`
--

CREATE TABLE `souscription` (
  `id_sous` int(11) NOT NULL,
  `nomclient` varchar(20) NOT NULL,
  `prenomclient` varchar(20) NOT NULL,
  `adresseclient` varchar(100) NOT NULL,
  `datenaissanceclient` date NOT NULL,
  `telephoneclient` varchar(15) NOT NULL,
  `mailclient` varchar(50) NOT NULL,
  `dateinscriptionclient` date NOT NULL,
  `modefacturation` varchar(20) NOT NULL,
  `typeclient` varchar(10) NOT NULL,
  `mdpclient` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `souscription`
--

INSERT INTO `souscription` (`id_sous`, `nomclient`, `prenomclient`, `adresseclient`, `datenaissanceclient`, `telephoneclient`, `mailclient`, `dateinscriptionclient`, `modefacturation`, `typeclient`, `mdpclient`) VALUES
(2, 'yvon', 'abale', '44 rue lenoir 75020', '1993-06-22', '0635237242', 'y.abale@gmail.com', '2016-06-08', 'chq', 'etudiant', '12'),
(3, 'MEITE', 'Massoma', 'rue de toulouse', '1992-12-05', '0619201991', 'bangs@19.fr', '2016-06-08', 'esp', 'etudiant', 'calmement');

-- --------------------------------------------------------

--
-- Structure de la table `vehicule`
--

CREATE TABLE `vehicule` (
  `numvehicule` int(11) NOT NULL,
  `marque` varchar(30) NOT NULL,
  `immatriculation` varchar(30) NOT NULL,
  `model` varchar(30) NOT NULL,
  `date_achat` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `vehicule`
--

INSERT INTO `vehicule` (`numvehicule`, `marque`, `immatriculation`, `model`, `date_achat`) VALUES
(0, 'citroen', 'AA-A31-75','c3', '2011-01-01'),
(1, 'Renault', 'BB-B31-75' ,'clio4', '2014-06-16'),
(2, 'peugeot', 'CC-C31-77' ,'308', '2014-12-12'),
(3, 'Renault', 'DD-D31-69','Megane', '2013-12-12');

-- --------------------------------------------------------

--
-- Structure de la table `voiture`
--

CREATE TABLE `voiture` (
  `couleurvoiture` varchar(30) NOT NULL,
  `nbpassager` int(10) NOT NULL,
  `numvehicule` int(11) NOT NULL,
  `marque` varchar(30) NOT NULL,
  `modele` varchar(30) NOT NULL,
  `annee` varchar(30) NOT NULL,
  `nbchevaux` int(5) NOT NULL,
  `nbkm` int(10) NOT NULL,
  `energie` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `vp`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `vp` (
`nummoniteur` int(11)
);

-- --------------------------------------------------------

--
-- Doublure de structure pour la vue `vueplanning`
-- (Voir ci-dessous la vue réelle)
--
CREATE TABLE `vueplanning` (
`nomclient` varchar(20)
,`nommoniteur` varchar(20)
,`modelvehicule` varchar(30)
,`datelecon` date
,`heurelecon` time
);

-- --------------------------------------------------------

--
-- Structure de la vue `vp`
--
DROP TABLE IF EXISTS `vp`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vp`  AS  select distinct `moniteur`.`nummoniteur` AS `nummoniteur` from `moniteur` where (not(`moniteur`.`nummoniteur` in (select distinct `p`.`nummoniteur` from (`planning` `p` join `demandelecon` `d`) where ((`p`.`datelecon` = `d`.`datelecon`) and (`p`.`heurelecon` = `d`.`heurelecon`))))) order by `moniteur`.`nummoniteur` ;

-- --------------------------------------------------------

--
-- Structure de la vue `vueplanning`
--
DROP TABLE IF EXISTS `vueplanning`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `vueplanning`  AS  select `c`.`nomclient` AS `nomclient`,`m`.`nommoniteur` AS `nommoniteur`,`v`.`model` AS `modelvehicule`,`l`.`datelecon` AS `datelecon`,`l`.`heurelecon` AS `heurelecon` from ((((`planning` join `client` `c` on((`c`.`numclient` = `planning`.`numclient`))) join `moniteur` `m` on((`m`.`nummoniteur` = `planning`.`nummoniteur`))) join `vehicule` `v` on((`v`.`numvehicule` = `planning`.`numvehicule`))) join `lecon` `l` on((`l`.`numlecon` = `planning`.`numlecon`))) ;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`numadmin`);

--
-- Index pour la table `archiveclient`
--
ALTER TABLE `archiveclient`
  ADD PRIMARY KEY (`numclient`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`numclient`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`id_comm`);

--
-- Index pour la table `demandelecon`
--
ALTER TABLE `demandelecon`
  ADD PRIMARY KEY (`id_demande`);

--
-- Index pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD PRIMARY KEY (`numclient`);

--
-- Index pour la table `examincode`
--
ALTER TABLE `examincode`
  ADD PRIMARY KEY (`id_exam_code`);

--
-- Index pour la table `examinconduite`
--
ALTER TABLE `examinconduite`
  ADD PRIMARY KEY (`id_exam_conduite`);

--
-- Index pour la table `lecon`
--
ALTER TABLE `lecon`
  ADD PRIMARY KEY (`numlecon`),
  ADD KEY `id_demande` (`id_demande`);

--
-- Index pour la table `moniteur`
--
ALTER TABLE `moniteur`
  ADD PRIMARY KEY (`nummoniteur`);

--
-- Index pour la table `moto`
--
ALTER TABLE `moto`
  ADD PRIMARY KEY (`numvehicule`);

--
-- Index pour la table `passercode`
--
ALTER TABLE `passercode`
  ADD PRIMARY KEY (`id_exam_code`,`numclient`),
  ADD KEY `I_FK_PASSERCODE_EXAMINCODE` (`id_exam_code`),
  ADD KEY `I_FK_PASSERCODE_client` (`numclient`);

--
-- Index pour la table `passerconduite`
--
ALTER TABLE `passerconduite`
  ADD PRIMARY KEY (`id_exam_conduite`,`numclient`),
  ADD KEY `I_FK_PASSERCONDUITE_EXAMINCODUITE` (`id_exam_conduite`),
  ADD KEY `I_FK_PASSERCONDUITE_client` (`numclient`);

--
-- Index pour la table `planning`
--
ALTER TABLE `planning`
  ADD PRIMARY KEY (`numclient`,`numlecon`,`nummoniteur`,`numvehicule`,`datelecon`,`heurelecon`),
  ADD KEY `I_FK_PLANNING_LECON` (`numlecon`),
  ADD KEY `I_FK_PLANNING_VEHICULE` (`numvehicule`),
  ADD KEY `I_FK_PLANNING_CLIENT` (`numclient`),
  ADD KEY `I_FK_PLANNING_MONITEUR` (`nummoniteur`);

--
-- Index pour la table `rouler`
--
ALTER TABLE `rouler`
  ADD PRIMARY KEY (`numvehicule`,`anneemois`);

--
-- Index pour la table `salarie`
--
ALTER TABLE `salarie`
  ADD PRIMARY KEY (`numclient`);

--
-- Index pour la table `souscription`
--
ALTER TABLE `souscription`
  ADD PRIMARY KEY (`id_sous`);

--
-- Index pour la table `vehicule`
--
ALTER TABLE `vehicule`
  ADD PRIMARY KEY (`numvehicule`);

--
-- Index pour la table `voiture`
--
ALTER TABLE `voiture`
  ADD PRIMARY KEY (`numvehicule`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `numadmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `numclient` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `id_comm` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT pour la table `demandelecon`
--
ALTER TABLE `demandelecon`
  MODIFY `id_demande` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;
--
-- AUTO_INCREMENT pour la table `etudiant`
--
ALTER TABLE `etudiant`
  MODIFY `numclient` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `examincode`
--
ALTER TABLE `examincode`
  MODIFY `id_exam_code` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `examinconduite`
--
ALTER TABLE `examinconduite`
  MODIFY `id_exam_conduite` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `lecon`
--
ALTER TABLE `lecon`
  MODIFY `numlecon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
--
-- AUTO_INCREMENT pour la table `moniteur`
--
ALTER TABLE `moniteur`
  MODIFY `nummoniteur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT pour la table `salarie`
--
ALTER TABLE `salarie`
  MODIFY `numclient` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `souscription`
--
ALTER TABLE `souscription`
  MODIFY `id_sous` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `etudiant`
--
ALTER TABLE `etudiant`
  ADD CONSTRAINT `etudiant_ibfk_1` FOREIGN KEY (`numclient`) REFERENCES `client` (`numclient`),
  ADD CONSTRAINT `etudiant_ibfk_2` FOREIGN KEY (`numclient`) REFERENCES `client` (`numclient`);

--
-- Contraintes pour la table `lecon`
--
ALTER TABLE `lecon`
  ADD CONSTRAINT `lecon_ibfk_1` FOREIGN KEY (`id_demande`) REFERENCES `demandelecon` (`id_demande`);

--
-- Contraintes pour la table `rouler`
--
ALTER TABLE `rouler`
  ADD CONSTRAINT `rouler_ibfk_1` FOREIGN KEY (`numvehicule`) REFERENCES `vehicule` (`numvehicule`);

--
-- Contraintes pour la table `salarie`
--
ALTER TABLE `salarie`
  ADD CONSTRAINT `salarie_ibfk_1` FOREIGN KEY (`numclient`) REFERENCES `client` (`numclient`),
  ADD CONSTRAINT `salarie_ibfk_2` FOREIGN KEY (`numclient`) REFERENCES `client` (`numclient`);

--
-- Contraintes pour la table `voiture`
--
ALTER TABLE `voiture`
  ADD CONSTRAINT `voiture_ibfk_1` FOREIGN KEY (`numvehicule`) REFERENCES `vehicule` (`numvehicule`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
