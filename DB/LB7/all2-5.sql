USE clasific;

SELECT COUNT(*) AS ProdCount,
       SUM(Oplata) AS TotalCount,
       MIN(Oplata) AS MinPrice,
       MAX(Oplata) AS MaxPrice,
       AVG(Oplata) AS AvgPrice
FROM navantazhennya