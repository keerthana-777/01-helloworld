<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <jsp:include page="myheader.html"/>
   convert a string to uppercase: <%= new String("Hello world").toUpperCase() %>
   <br/><br/>
   25 multiplied by 4 = <%= 25*4 %>
   <br/><br/>
   Is 75 less than 70 ? <%= 75 < 60 %>
</body>
</html>