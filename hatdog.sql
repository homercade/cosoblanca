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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblaccounts`
--

LOCK TABLES `tblaccounts` WRITE;
/*!40000 ALTER TABLE `tblaccounts` DISABLE KEYS */;
INSERT INTO `tblaccounts` VALUES (000001,'MacBook Pro','nh@_cosdd001','heyyyy','nha_cosdd001@icloud.com','nhacosdd001',1,000001),(000002,'Lenovo','dianenguyen@gmail.com','sadgirl','dianenguyen@icloud.com','sadgirl',0,000002),(000003,'MacBookPro','hey@gmail.com','dadasd','fish@icloud.com','aadasdasd',0,000008),(000004,'MacBook Pro','aryastark@winterfell.com','onetwothree','aryastark@icloud.com','onethreefour',1,000003),(000005,'MacBook Pro','dianenguyen@gmail.com','sadgirl','dianenguyen@icloud.com','sadsadgirl',1,000002),(000006,'MacBook Pro','klinkpachinko@gmail.com','klink','klinkpachinko@icloud.com','klinkklink',1,000008);
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
INSERT INTO `tblbrand` VALUES (1,'Apple',1),(2,'Dell',0),(3,'Bear Brand',0),(4,'LG',0),(5,'Lenovo',0),(6,'HP',0),(7,'hey',0),(8,'Letter Q',0),(9,'Lenovo',1),(10,'EPSON',1),(11,'Printer',0),(12,'HP',1),(13,'Huawei',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbldept`
--

LOCK TABLES `tbldept` WRITE;
/*!40000 ALTER TABLE `tbldept` DISABLE KEYS */;
INSERT INTO `tbldept` VALUES (1,'None','No department assigned yet',1),(2,'OGM','Office of the General Manager',1),(3,'HR','Human Resource',1),(4,'AGM','Assisstant of the General Manager',1),(5,'ACCO','Secretariat',1),(8,'COSO','Corporate Operations and Systems Office',1),(9,'TEST','Testings',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblemployee`
--

LOCK TABLES `tblemployee` WRITE;
/*!40000 ALTER TABLE `tblemployee` DISABLE KEYS */;
INSERT INTO `tblemployee` VALUES (000001,'Homer','Cadena','COSO',1),(000002,'Diane','Nguyen','OGM',1),(000003,'Arya','Stark','HR',1),(000006,'Jeffry','Paguia','ACCO',1),(000007,'Richel','Natividad','COSDD',0),(000008,'Klink','Pachinko','None',1),(000009,'new','employee','None',0),(000010,'John Homer','Cadena','ACCO',0);
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
INSERT INTO `tblinventory` VALUES (1,'Dell Something','100000','100000','2019-01-17',1,000001),(2,'Another Dell or Something','600000','700000','2019-02-08',1,000002);
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
  `intCompBool` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`intModelID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblmodel`
--

LOCK TABLES `tblmodel` WRITE;
/*!40000 ALTER TABLE `tblmodel` DISABLE KEYS */;
INSERT INTO `tblmodel` VALUES (1,'MacBook Pro',1,1),(6,'Think Pad',1,0),(7,'Inkjet',1,0),(8,'Tower',1,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblnetwork`
--

LOCK TABLES `tblnetwork` WRITE;
/*!40000 ALTER TABLE `tblnetwork` DISABLE KEYS */;
INSERT INTO `tblnetwork` VALUES (3,'Homer Cadena','Apple MacBook Pro','A0:B0:C0:D0:E0:F0','00-11-22-33-44-55',1,000001),(4,'Arya Stark','Apple MacBook Pro','8A:B5:34:71:DE:AA','10-20-40-AE-10-BB',1,000003),(5,'Diane Nguyen','Apple MacBook Pro','21:21:21:21:21:21','01-02-03-04-05-06',0,000002),(6,'Diane Nguyen','Apple MacBook Pro','yetretert','fghfghfgh',0,000002),(7,'Homer Cadena','Apple MacBook Pro','yyyyyyyyyyy','yyyyyyyyyyyy',1,000001),(9,'Arya Stark','Apple MacBook Pro','werwerer','werwerer',1,000003),(10,'Diane Nguyen','Apple MacBook Pro','d:i:a:n:e','n:g:u:y:e:n',1,000002);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbloffice`
--

LOCK TABLES `tbloffice` WRITE;
/*!40000 ALTER TABLE `tbloffice` DISABLE KEYS */;
INSERT INTO `tbloffice` VALUES (1,'Fab23536',5,1),(2,'padaosdsid',5,0),(3,'hello',5,0),(4,'Dab75322',2,1),(5,'Nan21082',5,1);
/*!40000 ALTER TABLE `tbloffice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tblofficeassign`
--

DROP TABLE IF EXISTS `tblofficeassign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tblofficeassign` (
  `intOAID` int(11) NOT NULL,
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
INSERT INTO `tblofficeassign` VALUES (1,000001,'Fab23565_01','PC-8EL','Fab23565','Homer Cadena',1,1),(2,000003,'Sel71048_01','PC-8LD','Sel71048','Arya Stark',1,4);
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblownership`
--

LOCK TABLES `tblownership` WRITE;
/*!40000 ALTER TABLE `tblownership` DISABLE KEYS */;
INSERT INTO `tblownership` VALUES (3,'COSDD','Apple MacBook Pro - Laptop','COSO001','ABCD132','19-08-90','2019-01-17',2,1,000001,0,1),(11,'OGM','Lenovo ThinkPad - Monitor','OGM371','ABCE132','19-08-91','2019-02-02',1,1,000002,0,0),(12,'COSDD','Apple MacBook Pro - Laptop','COSO002','ADGE132','19-08-92','2019-01-23',2,1,000001,0,1),(13,'Secretariat','EPSON L120 - Printer','HATDOG','S4NDW1CH','19-08-93','2019-04-01',10,1,000003,0,0),(21,'OGM','Huawei D Series - Document Reader','OGM002','ATTP13','19-08-94','2019-05-08',11,1,000003,0,0),(22,'COSDD','Lenovo ThinkPad - Monitor','COSO003','BNHA132','19-08-95','2019-02-01',1,1,000001,0,0),(23,'OGM','Huawei D Series - Document Reader','OGM004','PRNH132','19-08-96','2019-02-18',11,1,000003,0,0),(25,'COSDD','Apple MacBook Pro - Laptop','COSO00069','JGHT132','19-08-97','2019-02-07',2,1,000006,0,1),(26,'COSDD','Apple MacBook Pro - Laptop','COSO0011','ABCD111','19-08-98','2019-02-07',2,1,000007,0,1),(27,'HR','Lenovo ThinkPad - Monitor','COSO0100','ABCDEFG','19-08-13','2019-02-11',1,1,000008,0,0),(28,'HR','Apple MacBook Pro - Laptop','COSO0100','ABCDEFG','19-08-13','2019-02-11',2,1,000008,0,1);
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
INSERT INTO `tblprice` VALUES (2,'Apple MacBook Pro - Laptop',71000,1,2);
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
INSERT INTO `tblstatus` VALUES (1,'Unchecked','The unit\'s status is still unknown.'),(2,'Working','The unit is working and and functional.'),(3,'Defective','The unit received is not working properly.');
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
  `intIsDevice` tinyint(1) DEFAULT NULL COMMENT 'to determine whether or not the unit is a device or not\n\n0 - not a device\n1 - is a device',
  PRIMARY KEY (`intStorageID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblstorage`
--

LOCK TABLES `tblstorage` WRITE;
/*!40000 ALTER TABLE `tblstorage` DISABLE KEYS */;
INSERT INTO `tblstorage` VALUES (1,'Lenovo ThinkPad - Monitor','Lenovo','ThinkPad','Monitor',200,3250,1,0),(2,'Apple MacBook Pro - Laptop','Apple','MacBook Pro','Laptop',5,71000,1,1),(10,'EPSON L120 - Printer','EPSON','L120','Printer',9,13500,1,0),(11,'Huawei D Series - Document Reader','Huawei','D Series','Document Reader',6,1975,1,0),(12,'Testing Protocols Testing Protocosl - Laptop','Testing Protocol','Testing Protocol','Desktop',77,8857570,0,NULL);
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
INSERT INTO `tbltechnician` VALUES (10,'Richel','Natividad',1),(11,'John Kenneth','Clemente',1),(12,'Jan Arvee','Pineda',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tblunittype`
--

LOCK TABLES `tblunittype` WRITE;
/*!40000 ALTER TABLE `tblunittype` DISABLE KEYS */;
INSERT INTO `tblunittype` VALUES (1,'Laptop',1,1),(2,'Desktop',1,1),(3,'Printer',1,0),(4,'Keyboard',0,0),(5,'UPS',1,0),(6,'Monitor',0,0),(7,'Document Reader',1,NULL),(8,'henlo',0,NULL),(9,'Functionality Tests',0,NULL),(10,'OMG',0,NULL);
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

-- Dump completed on 2019-02-20 16:42:28
