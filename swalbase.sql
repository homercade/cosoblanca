-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: cosdd
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tblaccounts`
--

DROP TABLE IF EXISTS `tblaccounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblaccounts` (
  `intAccountID` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `strDevice` varchar(45) NOT NULL,
  `strEmailAccount` longtext,
  `strEmailPass` varchar(45) DEFAULT NULL,
  `strIDAccount` longtext NOT NULL,
  `strIDAccPassword` varchar(45) NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intStoClaim` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`intAccountID`),
  KEY `intStoClaim` (`intStoClaim`),
  CONSTRAINT `intStoClaim` FOREIGN KEY (`intStoClaim`) REFERENCES `tblemployee` (`intZFEmpID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblaccounts`
--

LOCK TABLES `tblaccounts` WRITE;
/*!40000 ALTER TABLE `tblaccounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblaccounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblbrand`
--

DROP TABLE IF EXISTS `tblbrand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblbrand` (
  `intUnitID` int(11) NOT NULL AUTO_INCREMENT,
  `strUnitBrand` varchar(45) NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  PRIMARY KEY (`intUnitID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblbrand`
--

LOCK TABLES `tblbrand` WRITE;
/*!40000 ALTER TABLE `tblbrand` DISABLE KEYS */;
INSERT INTO `tblbrand` VALUES (1,'Apple',1);
/*!40000 ALTER TABLE `tblbrand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbldept`
--

DROP TABLE IF EXISTS `tbldept`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbldept` (
  `intDeptID` int(11) NOT NULL AUTO_INCREMENT,
  `strDeptCode` varchar(10) NOT NULL,
  `txtDeptName` longtext NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  PRIMARY KEY (`intDeptID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbldept`
--

LOCK TABLES `tbldept` WRITE;
/*!40000 ALTER TABLE `tbldept` DISABLE KEYS */;
INSERT INTO `tbldept` VALUES (1,'HR','Human Resource Management',1),(5,'ET','Extra Terrestrial',1),(6,'OS','Operating Systems',1),(7,'HRS','Human Resource Management',1),(8,'BOI','Corporate Operations and Systems Offices',1),(9,'OS','Operating Systems',1),(10,'COSO','Corporate Operations and Systems Office',1);
/*!40000 ALTER TABLE `tbldept` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblemployee`
--

DROP TABLE IF EXISTS `tblemployee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblemployee` (
  `intZFEmpID` int(6) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `strFirstName` varchar(45) NOT NULL,
  `strLastName` varchar(45) NOT NULL,
  `strEmpDept` varchar(11) DEFAULT NULL,
  `intPresence` tinyint(1) NOT NULL,
  PRIMARY KEY (`intZFEmpID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblemployee`
--

LOCK TABLES `tblemployee` WRITE;
/*!40000 ALTER TABLE `tblemployee` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblemployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblmodel`
--

DROP TABLE IF EXISTS `tblmodel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblmodel` (
  `intModelID` int(11) NOT NULL AUTO_INCREMENT,
  `strModelName` varchar(45) NOT NULL,
  `intPresence` tinyint(4) NOT NULL,
  `intCompBool` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`intModelID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblmodel`
--

LOCK TABLES `tblmodel` WRITE;
/*!40000 ALTER TABLE `tblmodel` DISABLE KEYS */;
INSERT INTO `tblmodel` VALUES (1,'MacBook Pro',1,1);
/*!40000 ALTER TABLE `tblmodel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblnetwork`
--

DROP TABLE IF EXISTS `tblnetwork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblnetwork` (
  `intNetworkID` int(11) NOT NULL AUTO_INCREMENT,
  `strOwnerName` varchar(45) DEFAULT NULL,
  `strDeviceName` varchar(45) NOT NULL,
  `strNetworkAddress` longtext NOT NULL,
  `strWifiAddress` longtext,
  `intPresence` tinyint(1) NOT NULL,
  `intAccConf` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`intNetworkID`),
  KEY `intAccConf` (`intAccConf`),
  CONSTRAINT `intAccConf` FOREIGN KEY (`intAccConf`) REFERENCES `tblaccounts` (`intAccountID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblnetwork`
--

LOCK TABLES `tblnetwork` WRITE;
/*!40000 ALTER TABLE `tblnetwork` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblnetwork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbloffice`
--

DROP TABLE IF EXISTS `tbloffice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbloffice` (
  `intMSID` int(11) NOT NULL AUTO_INCREMENT,
  `strMSSerial` varchar(45) NOT NULL,
  `intVacancy` int(1) DEFAULT NULL,
  `intPresence` tinyint(1) NOT NULL,
  PRIMARY KEY (`intMSID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbloffice`
--

LOCK TABLES `tbloffice` WRITE;
/*!40000 ALTER TABLE `tbloffice` DISABLE KEYS */;
INSERT INTO `tbloffice` VALUES (14,'hello',5,0),(15,'hello',5,0),(16,'NAN20178',5,0);
/*!40000 ALTER TABLE `tbloffice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblofficeassign`
--

DROP TABLE IF EXISTS `tblofficeassign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblofficeassign` (
  `intOAID` int(11) NOT NULL AUTO_INCREMENT,
  `intOAFKEmpID` int(6) unsigned zerofill DEFAULT NULL,
  `strPassword` varchar(45) DEFAULT NULL,
  `strPCName` varchar(45) NOT NULL,
  `strOASerial` varchar(8) DEFAULT NULL,
  `strOAEmpName` varchar(45) DEFAULT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intOASerial` int(11) DEFAULT NULL,
  PRIMARY KEY (`intOAID`),
  KEY `intOAFKEmpID` (`intOAFKEmpID`),
  KEY `intOASerial_idx` (`intOASerial`),
  CONSTRAINT `intOAFKEmpID` FOREIGN KEY (`intOAFKEmpID`) REFERENCES `tblemployee` (`intZFEmpID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `intOASerial` FOREIGN KEY (`intOASerial`) REFERENCES `tbloffice` (`intMSID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblofficeassign`
--

LOCK TABLES `tblofficeassign` WRITE;
/*!40000 ALTER TABLE `tblofficeassign` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblofficeassign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblownership`
--

DROP TABLE IF EXISTS `tblownership`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblownership` (
  `intOwnershipID` int(6) unsigned NOT NULL AUTO_INCREMENT,
  `strOwnerDept` varchar(45) NOT NULL,
  `txtActualEquipment` longtext,
  `txtPropertyNumber` longtext NOT NULL,
  `txtSerialNumber` longtext NOT NULL,
  `txtPARNumber` longtext NOT NULL,
  `dtmMRDate` date DEFAULT NULL,
  `intPriceFlagID` int(11) DEFAULT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intOwnedBy` int(6) unsigned zerofill NOT NULL,
  `intNetworkFlag` tinyint(1) DEFAULT NULL,
  `isDevice` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`intOwnershipID`),
  KEY `intOwnedBy` (`intOwnedBy`),
  KEY `intPriceFlag` (`intPriceFlagID`),
  CONSTRAINT `intOwnedBy` FOREIGN KEY (`intOwnedBy`) REFERENCES `tblemployee` (`intZFEmpID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `intPriceFlag` FOREIGN KEY (`intPriceFlagID`) REFERENCES `tblstorage` (`intStorageID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblownership`
--

LOCK TABLES `tblownership` WRITE;
/*!40000 ALTER TABLE `tblownership` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblownership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblstorage`
--

DROP TABLE IF EXISTS `tblstorage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblstorage` (
  `intStorageID` int(11) NOT NULL AUTO_INCREMENT,
  `txtStorageEquip` longtext NOT NULL,
  `strBrand` varchar(45) DEFAULT NULL,
  `strMod` varchar(45) DEFAULT NULL,
  `strUnit` longtext,
  `intStorageQty` int(6) NOT NULL,
  `fltPrice` float NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intIsDevice` tinyint(1) DEFAULT NULL COMMENT 'to determine whether or not the unit is a device or not\n\n0 - not a device\n1 - is a device',
  PRIMARY KEY (`intStorageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblstorage`
--

LOCK TABLES `tblstorage` WRITE;
/*!40000 ALTER TABLE `tblstorage` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblstorage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblunittype`
--

DROP TABLE IF EXISTS `tblunittype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblunittype` (
  `intUnitTypeID` int(11) NOT NULL AUTO_INCREMENT,
  `strUnitTypeDesc` varchar(45) NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intCompBool` tinyint(1) DEFAULT NULL COMMENT 'intCompBool: this is to determine whether a unit is a computing device or a peripheral device (to be used in network addresses).\n\n0 - Peripheral Devices\n1 - Computing Devices',
  PRIMARY KEY (`intUnitTypeID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblunittype`
--

LOCK TABLES `tblunittype` WRITE;
/*!40000 ALTER TABLE `tblunittype` DISABLE KEYS */;
INSERT INTO `tblunittype` VALUES (1,'Laptop',1,1),(2,'Desktop',1,1);
/*!40000 ALTER TABLE `tblunittype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbluser`
--

DROP TABLE IF EXISTS `tbluser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbluser` (
  `intUserID` int(11) NOT NULL AUTO_INCREMENT,
  `strUsername` varchar(11) NOT NULL,
  `strPassword` varchar(11) NOT NULL,
  PRIMARY KEY (`intUserID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluser`
--

LOCK TABLES `tbluser` WRITE;
/*!40000 ALTER TABLE `tbluser` DISABLE KEYS */;
INSERT INTO `tbluser` VALUES (1,'admin','password'),(2,'root','pass'),(3,'homer@dev','rofohpde');
/*!40000 ALTER TABLE `tbluser` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-02 23:50:29
