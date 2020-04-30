-- MySQL dump 10.13  Distrib 8.0.19, for osx10.14 (x86_64)
--
-- Host: localhost    Database: shoe
-- ------------------------------------------------------
-- Server version	8.0.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryId` int NOT NULL AUTO_INCREMENT,
  `categoryName` varchar(50) NOT NULL,
  PRIMARY KEY (`categoryId`),
  UNIQUE KEY `CategoryID_UNIQUE` (`categoryId`),
  UNIQUE KEY `categoryName_UNIQUE` (`categoryName`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (7,'campaign'),(4,'curve'),(2,'dresses'),(6,'kids'),(1,'men'),(5,'sale'),(3,'women');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `imageId` int NOT NULL AUTO_INCREMENT,
  `imageSrc` varchar(200) NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`imageId`),
  KEY `productimg_fk_idx` (`productId`),
  CONSTRAINT `productimg_fk` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1537/16753/NERIMANU_X_BT_06-7__97715.1558421566.jpg?c=2',1),(2,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1537/16591/BT-AW19-M0111_-_CAMEL_CORD__42093.1555293575.png?c=2',1),(3,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1536/16756/NERIMANU_X_BT_02-16__67154.1558421872.jpg?c=2',2),(4,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1536/16590/BT-AW19-M0111_-_BLACK_CORD__55578.1555292752.png?c=2',2),(5,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1327/16760/outfit5-3__49087.1558422211.jpg?c=2',3),(6,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1327/14552/WR_-_180725_BT_eCOMM_75_3497__08977.1534747504.jpg?c=2',3),(7,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1319/15091/Rust__25160.1539317034.jpg?c=2',4),(8,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1319/14629/WR_-_180725_BT_eCOMM_72_3394__41394.1534748435.jpg?c=2',4),(9,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/1318/15096/Navy__32750.1539317533.jpg?c=2',5),(10,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/1337/14813/Bone-Blazer__85872.1536209083.jpg?c=2',5),(11,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1330/15088/Chambray-Linen__88328.1539317013.jpg?c=2',6),(12,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1330/14564/WR_-_180725_BT_eCOMM_87_3764__89788.1534747566.jpg?c=2',6),(13,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1322/14816/Khaki-Pant__38940.1536209142.jpg?c=2',7),(14,'https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/800x800/products/1322/14608/WR_-_180725_BT_eCOMM_55_2820__08915.1534748266.jpg?c=2',7);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `productId` int NOT NULL AUTO_INCREMENT,
  `productName` varchar(200) NOT NULL,
  `productCost` float DEFAULT NULL,
  `productPrice` float NOT NULL,
  `productSku` varchar(45) DEFAULT NULL,
  `productNote` varchar(200) DEFAULT NULL,
  `productType` varchar(20) DEFAULT NULL,
  `productDecription` longtext,
  `categoryId` int DEFAULT NULL,
  PRIMARY KEY (`productId`),
  UNIQUE KEY `productId_UNIQUE` (`productId`),
  KEY `catogoryId_fk_idx` (`categoryId`),
  CONSTRAINT `catogoryId_fk` FOREIGN KEY (`categoryId`) REFERENCES `category` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'MISTER CLASSIC CHINO IN RUST',149,80,'BT-AW19-D400 BLACK','THIS IS A FINAL CLEARANCE ITEM',NULL,'Experts at summer dressing, Bohemian Traders knows exactly what it takes to keep you looking sharp in the heat. These classic chinos are cut from cotton-twill in a straight-leg profile. Try them with one of the cool  linen shirts from our exclusive Mister Bohemian capsule.',1),(2,'MISTER CLASSIC CHINO IN NAVY',149,80,'BT-AW19-D400 BLACK','THIS IS A FINAL CLEARANCE ITEM',NULL,'Experts at summer dressing, Bohemian Traders knows exactly what it takes to keep you looking sharp in the heat. These classic chinos are cut from cotton-twill in a straight-leg profile. Try them with one of the cool  linen shirts from our exclusive Mister Bohemian capsule.',1),(3,'MISTER ITALIAN SLIM PANT IN KHAKI',179.95,100,'BT-AW19-D400 BLACK','THIS IS A FINAL CLEARANCE ITEM',NULL,'The Mister Bohemian Italian Slim Pant is crafted from crisp and flexible stretch-cotton that will maintain its shape even on steamy summer days. Cut for a slim fit and finished with 4 pocket detailing, they have a polished feel that\'s ideal for the office.',1),(4,'MISTER CLASSIC SHORT IN NAVY',129.95,60,'BT-AW19-D400 BLACK','THIS IS A FINAL CLEARANCE ITEM',NULL,'Here at Bohemian Traders we have always specialised in timeless pieces that will last our customers for years to come. Made from cotton-twill, these khaki shorts will be your best friend from the first wear. Loafers and a linen shirt are the most natural pairing.',1),(5,'MISTER LINEN SHORT IN SAND',149.95,80,'BT-AW19-D400 BLACK','THIS IS A FINAL CLEARANCE ITEM',NULL,'We design clothes for people who love the ocean and great outdoors. If that’s you, these shorts are just the ones you\'ll want to be wearing on trips to the country or coast. Cut for a relaxed fit, they\'re made from linen that\'s lightweight, breathable and comfortable enough for walks along the beach, yet smart enough for al fresco dinners. A contrast drawcord keeps the looks fresh.',1),(6,'MISTER LINEN SHORT IN BLACK',149.95,90,'BT-AW19-D400 BLACK','THIS IS A FINAL CLEARANCE ITEM',NULL,'We design clothes for people who love the ocean and great outdoors. If that’s you, these shorts are just the ones you\'ll want to be wearing on trips to the country or coast. Cut for a relaxed fit, they\'re made from linen that\'s lightweight, breathable and comfortable enough for walks along the beach, yet smart enough for al fresco dinners. A contrast drawcord keeps the looks fresh.',1),(7,'MISTER SKINNY JEAN IN BLACK',229.95,90,'BT-AW19-D400 BLACK','THIS IS A FINAL CLEARANCE ITEM',NULL,'You\'ll never regret having a pair of black jeans in your wardrobe - this classic Mister Bohemian style will smarten up weekend outfits and works in a casual office, too. They\'re cut for a skinny fit from stretch-denim that makes them really comfortable to wear. ',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productsize`
--

DROP TABLE IF EXISTS `productsize`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productsize` (
  `productSizeId` int NOT NULL AUTO_INCREMENT,
  `productSize` varchar(4) NOT NULL,
  `productQuantity` int NOT NULL,
  `productId` int NOT NULL,
  PRIMARY KEY (`productSizeId`),
  KEY `productID_fk_idx` (`productId`),
  CONSTRAINT `productID_fk` FOREIGN KEY (`productId`) REFERENCES `products` (`productId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productsize`
--

LOCK TABLES `productsize` WRITE;
/*!40000 ALTER TABLE `productsize` DISABLE KEYS */;
/*!40000 ALTER TABLE `productsize` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tokens` (
  `tokenId` int NOT NULL AUTO_INCREMENT,
  `accessToken` varchar(1000) NOT NULL,
  `refreshToken` varchar(1000) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`tokenId`),
  UNIQUE KEY `tokenId_UNIQUE` (`tokenId`),
  KEY `userId_fk_idx` (`userId`),
  CONSTRAINT `userId_fk` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MTg2NDcsImV4cCI6MTU4NzgyMjI0N30.-W3T5Fq364vSflxeEhnn-rwuys357uIl4_pRX8e4CV4','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MTg2NDcsImV4cCI6MTkwMzE3ODY0N30.E_foN5U4L3drkLraiV4Uwki232f13DYmqEzjp_PHOMo',1),(2,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzA5MTMsImV4cCI6MTU4NzgzNDUxM30.gDXPNAPDZ70lXwWQzmT_ycReunp8LEcGB0VynB_rnO4','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzA5MTMsImV4cCI6MTkwMzE5MDkxM30.Ql4GimwJtm-O37dvPdyjjJbc-5hr_BbPPmf0AtSPbjw',1),(3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzA5NzQsImV4cCI6MTU4NzgzNDU3NH0.zJdnnAJMzJ6lx4XQS-ziyqxrFdX41PO6gEeKeGdFeMg','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzA5NzQsImV4cCI6MTkwMzE5MDk3NH0.f4L0VkLDbr2DbLprnXsP75nZOsrCiS7m9Et3OEIpB4s',1),(4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzE1MDcsImV4cCI6MTU4NzgzNTEwN30.jCjSuI1oVt-gf7z8nMILuF_ZcG5KEN2Ij2hpHp7KI84','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzE1MDcsImV4cCI6MTkwMzE5MTUwN30.Pv41c8nsNwRwoNKzZogZKl3JY4i8GRP9Yvq_ttIMQ0Q',1),(5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzE1ODEsImV4cCI6MTU4NzgzNTE4MX0.z1QcWtU7wIh0XZLwOlnvfcVaMjVKeL2IETs9_Miuk4w','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzE1ODEsImV4cCI6MTkwMzE5MTU4MX0.uXyK5F7Y-1fdIMKs-H-1SmSXMnRsJDwJePn6xbjT_LE',1),(6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzE1OTgsImV4cCI6MTU4NzgzNTE5OH0.QAMyWmY8HTJVVnzlM99IJOLCUW85aZCuQkI9-jk405Y','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4MzE1OTgsImV4cCI6MTkwMzE5MTU5OH0.OZkCub5QgFgs4dMZb0vmGMPmo4vGMpt8BG3sCSh_uRQ',1),(7,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4NjEzMDcsImV4cCI6MTU4Nzg2NDkwN30.MNogbZpbj8oV3n_bCRa10v84MEzF7fbSyAxOkTsD1Vo','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoidGhhbmhkYXRAZ21haWwuY29tIiwiZmlyc3RuYW1lIjoibGUiLCJsYXN0bmFtZSI6ImRhdCIsInBhc3N3b3JkIjoiJDJiJDEwJGlHQmUzUUhSbS8xc3B5ZGh5MzhGRGVnOHJsWi4zYUlMZTE3dWxBc2wvSkVROG8weTAvRUllIiwicmVnaXN0cmF0aW9uZGF0ZSI6IjIwMjAtMDQtMjVUMTE6MDc6MzcuMDAwWiIsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyJ9LCJpYXQiOjE1ODc4NjEzMDcsImV4cCI6MTkwMzIyMTMwN30.z5Wb6VsLOCMvJuJpR71IoUpjxIcAYEsBcKG0VL-wREE',1),(8,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NjMyNzUsImV4cCI6MTU4Nzg2Njg3NX0.oSNJuigxU-_3F4GriwEvXvjICGp2j2NbgUMM0NiN3mk','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NjMyNzUsImV4cCI6MTkwMzIyMzI3NX0.zhK0Gbx_pU-NGOkalkxeNlEhZSa-nRv1Scji4OYE4E0',1),(9,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NjQ2MTUsImV4cCI6MTU4Nzg2ODIxNX0.DmMAoEbvse52O_qKIJY6pNuM7DH8nvB5r1XlL0LU0kQ','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NjQ2MTUsImV4cCI6MTkwMzIyNDYxNX0.Nwl4bSYvEq_XXRJihKLPkh3CdNWhygB6cx13TuFa-nY',1),(10,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NjczNjAsImV4cCI6MTU4Nzg3MDk2MH0._HWqMVy5_tnkQ7By5_Up4-zhnL6XXxaUgfV_-bh6qe0','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NjczNjAsImV4cCI6MTkwMzIyNzM2MH0.km2GPSNy3JMMmYVrtCEbclYZP3_l-tTHQuvnsG45qXw',1),(11,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4Njc0NTYsImV4cCI6MTU4Nzg3MTA1Nn0.-vw_wehuzkIAs3c3oHV1ZOxNkpn5yUJy3jAQaBTASno','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4Njc0NTYsImV4cCI6MTkwMzIyNzQ1Nn0.XbalU7vKsv3SaCULj-GhbSjs4QL4-2vjCoFgbygg0t4',1),(12,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4Njc0ODcsImV4cCI6MTU4Nzg3MTA4N30.He-2KyV8k9XRZ4UxPY7cZKqaiWmmr8C1W8QZ08WnXzY','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4Njc0ODcsImV4cCI6MTkwMzIyNzQ4N30.fHFqUm27AAgjIVX707o4_2S7cDl4IcllMfqGmEUmmr4',1),(13,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NzUzNDIsImV4cCI6MTU4Nzg3ODk0Mn0.Mk7icWw2z35jPt8SnfybOfHpUVsZw2VzhrUKLHghXLI','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4NzUzNDIsImV4cCI6MTkwMzIzNTM0Mn0.jbeZUyPdFZXapfYF7wTb3uuw-rIUkQl1OaW0sl21mcc',1),(14,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4ODIwNzEsImV4cCI6MTU4Nzg4NTY3MX0.x4D9Q5C14LrAkgJJWoeESIhupDYMLmi6jxj-kp76_MY','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc4ODIwNzEsImV4cCI6MTkwMzI0MjA3MX0.dZZLHR-j9l3BbuiYS5ANkCyf2FpoV73WDO1PUL8EVd4',1),(15,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MiwidXNlcm5hbWUiOiJsZWRhdDEyMzMiLCJmaXJzdG5hbWUiOiJMw6oiLCJsYXN0bmFtZSI6IsSQ4bqhdCIsImVtYWlsIjoibHRoYW5oZGF0MTB4QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc5ODMyNTgsImV4cCI6MTU4Nzk4Njg1OH0.DiiWDYI3oG9HPUGmg-vazCX8lmX40EjwrPPLK5aawcM','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MiwidXNlcm5hbWUiOiJsZWRhdDEyMzMiLCJmaXJzdG5hbWUiOiJMw6oiLCJsYXN0bmFtZSI6IsSQ4bqhdCIsImVtYWlsIjoibHRoYW5oZGF0MTB4QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc5ODMyNTgsImV4cCI6MTkwMzM0MzI1OH0.ehs97WysG1gp086eJPKgqNKjQ9KDhEdn-83Y7ElU-4w',2),(16,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc5OTI2ODIsImV4cCI6MTU4Nzk5NjI4Mn0.BoPvCYGzFNcV1f1jSWJcFgFT2GyoQwiGnWEUcrqloyo','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlcm5hbWUiOiJsZWRhdDEyMyIsImZpcnN0bmFtZSI6ImxlIiwibGFzdG5hbWUiOiJkYXQiLCJlbWFpbCI6InRoYW5oZGF0QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODc5OTI2ODIsImV4cCI6MTkwMzM1MjY4Mn0.belIOjfpocigHE3GRfn86NPtOvigZI_1s4mgav3Hjhg',1),(17,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MiwidXNlcm5hbWUiOiJsZWRhdDEyMzMiLCJmaXJzdG5hbWUiOiJMw6oiLCJsYXN0bmFtZSI6IsSQ4bqhdCIsImVtYWlsIjoibHRoYW5oZGF0MTB4QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNTE2OTQsImV4cCI6MTU4ODA1NTI5NH0.FVrK1xGx_qqfKNqXdY0PV8_o865VdgdDA-lwb23wrzs','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MiwidXNlcm5hbWUiOiJsZWRhdDEyMzMiLCJmaXJzdG5hbWUiOiJMw6oiLCJsYXN0bmFtZSI6IsSQ4bqhdCIsImVtYWlsIjoibHRoYW5oZGF0MTB4QGdtYWlsLmNvbSJ9LCJpYXQiOjE1ODgwNTE2OTQsImV4cCI6MTkwMzQxMTY5NH0.qb8v9Fq6x7CuTIowVQv1-dvASSF9BjKHR-JUCgQxj6s',2);
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `registrationdate` timestamp NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `UserEmail_UNIQUE` (`email`),
  UNIQUE KEY `UserName_UNIQUE` (`username`),
  UNIQUE KEY `UserID_UNIQUE` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ledat123','thanhdat@gmail.com','$2b$10$iGBe3QHRm/1spydhy38FDeg8rlZ.3aILe17ulAsl/JEQ8o0y0/EIe','le','dat','2020-04-25 04:07:37'),(2,'ledat1233','lthanhdat10x@gmail.com','$2b$10$F3bJIioZebuGJWCB71Kjx.8oKMav6yW5N54.jdpFZbVBxII72LjEC','Lê','Đạt','2020-04-27 03:27:38');
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

-- Dump completed on 2020-04-28 19:29:09
