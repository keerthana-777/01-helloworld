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
  <h3>hello world</h3>
  The time on the server is <%= new java.util.Date() %>
  <jsp:include page="myFooter.jsp"/>
</body>
</html>