-- MySQL dump 10.13  Distrib 5.6.24, for Win32 (x86)
--
-- Host: 127.0.0.1    Database: cosdd2
-- ------------------------------------------------------
-- Server version	5.7.25

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
  `strDeviceAccount` longtext NOT NULL,
  `strEmailAccount` longtext NOT NULL,
  `strIDAccount` longtext NOT NULL,
  `strPassword` varchar(45) NOT NULL,
  `strNetworkAddress` longtext NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  PRIMARY KEY (`intAccountID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblbrand`
--

LOCK TABLES `tblbrand` WRITE;
/*!40000 ALTER TABLE `tblbrand` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbldept`
--

LOCK TABLES `tbldept` WRITE;
/*!40000 ALTER TABLE `tbldept` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblemployee`
--

LOCK TABLES `tblemployee` WRITE;
/*!40000 ALTER TABLE `tblemployee` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblemployee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblinventory`
--

DROP TABLE IF EXISTS `tblinventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblinventory` (
  `intInvID` int(11) NOT NULL AUTO_INCREMENT,
  `txtInvEquipment` longtext NOT NULL,
  `strInvPropNo` varchar(10) NOT NULL,
  `strInvSerialNo` varchar(10) NOT NULL,
  `dtmDateReceived` date NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intEmployeeID` int(6) unsigned zerofill DEFAULT NULL,
  PRIMARY KEY (`intInvID`),
  KEY `intEmployeeID_idx` (`intEmployeeID`),
  CONSTRAINT `intEmployeeID` FOREIGN KEY (`intEmployeeID`) REFERENCES `tblemployee` (`intZFEmpID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblinventory`
--

LOCK TABLES `tblinventory` WRITE;
/*!40000 ALTER TABLE `tblinventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblinventory` ENABLE KEYS */;
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
  PRIMARY KEY (`intModelID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblmodel`
--

LOCK TABLES `tblmodel` WRITE;
/*!40000 ALTER TABLE `tblmodel` DISABLE KEYS */;
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
  `strOwnerName` varchar(45) NOT NULL,
  `strDeviceID` varchar(45) NOT NULL,
  `strDeviceName` varchar(45) NOT NULL,
  `strNetworkAddress` varchar(45) NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  PRIMARY KEY (`intNetworkID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblnetwork`
--

LOCK TABLES `tblnetwork` WRITE;
/*!40000 ALTER TABLE `tblnetwork` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblnetwork` ENABLE KEYS */;
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
  `dtmMRDate` date DEFAULT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intOwnedBy` int(6) unsigned zerofill NOT NULL,
  `intPriceFlagID` int(11) DEFAULT NULL,
  PRIMARY KEY (`intOwnershipID`),
  KEY `intOwnedBy` (`intOwnedBy`),
  KEY `intPriceFlag_idx` (`intPriceFlagID`),
  CONSTRAINT `intOwnedBy` FOREIGN KEY (`intOwnedBy`) REFERENCES `tblemployee` (`intZFEmpID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `intPriceFlag` FOREIGN KEY (`intPriceFlagID`) REFERENCES `tblstorage` (`intStorageID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblownership`
--

LOCK TABLES `tblownership` WRITE;
/*!40000 ALTER TABLE `tblownership` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblownership` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblprice`
--

DROP TABLE IF EXISTS `tblprice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblprice` (
  `intPriceID` int(11) NOT NULL AUTO_INCREMENT,
  `txtUnitDesc` longtext,
  `fltPrice` float NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  `intStoreID` int(11) DEFAULT NULL,
  PRIMARY KEY (`intPriceID`),
  KEY `intPresence` (`intStoreID`),
  CONSTRAINT `intStoreID` FOREIGN KEY (`intStoreID`) REFERENCES `tblstorage` (`intStorageID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblprice`
--

LOCK TABLES `tblprice` WRITE;
/*!40000 ALTER TABLE `tblprice` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblprice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblstatus`
--

DROP TABLE IF EXISTS `tblstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblstatus` (
  `intStatusID` int(11) NOT NULL AUTO_INCREMENT,
  `strStatusName` varchar(45) NOT NULL,
  `txtStatusDesc` longtext,
  PRIMARY KEY (`intStatusID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblstatus`
--

LOCK TABLES `tblstatus` WRITE;
/*!40000 ALTER TABLE `tblstatus` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblstatus` ENABLE KEYS */;
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
  PRIMARY KEY (`intStorageID`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblstorage`
--

LOCK TABLES `tblstorage` WRITE;
/*!40000 ALTER TABLE `tblstorage` DISABLE KEYS */;
/*!40000 ALTER TABLE `tblstorage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbltechnician`
--

DROP TABLE IF EXISTS `tbltechnician`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbltechnician` (
  `intTechnicianID` int(11) NOT NULL AUTO_INCREMENT,
  `strTechnicianFName` varchar(45) NOT NULL,
  `strTechnicianLName` varchar(45) NOT NULL,
  `intPresence` tinyint(1) NOT NULL,
  PRIMARY KEY (`intTechnicianID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbltechnician`
--

LOCK TABLES `tbltechnician` WRITE;
/*!40000 ALTER TABLE `tbltechnician` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbltechnician` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblunittype`
--

LOCK TABLES `tblunittype` WRITE;
/*!40000 ALTER TABLE `tblunittype` DISABLE KEYS */;
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
  `strUserName` varchar(6) NOT NULL,
  `strUserPass` varchar(8) NOT NULL,
  PRIMARY KEY (`intUserID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbluser`
--

LOCK TABLES `tbluser` WRITE;
/*!40000 ALTER TABLE `tbluser` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbluser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'diane','nguyen'),(2,'hollyhock','mannheim'),(3,'bojack','horseman'),(4,'gina','cazador'),(5,'mr','peanutbutter'),(6,'princess ','carolyn'),(7,'hey babyboi','helo');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-10 22:58:05
