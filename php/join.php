<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>회원가입</title>
</head>

<body>
<TABLE BORDER="0" CELLSPACING="0" width="100%" height="100%" align="center" valign="top">
<tr>
<td width="100%" height="70" align="left"valign="middle"bgcolor="#E89C05">
&nbsp;&nbsp; <a href="../index.php"><strong>[홈]</strong>
</td>


<tr>
<td width="100%" height="100%" align="center" valign="top">
<table border="0" width="750" height="100%" bgcolor="FFFFFF"align="center" cellspacing="0" cellpadding="0">
<tr>

<form action="./jon_post.php" name="member" method="post">

	<td height="30" bgcolor="EEEEEE" align="center">
	<strong>[회 원 가 입 ]</strong> <br>



	<input type="hidden" name="id" value="test">
<li>회원아이디: <input type="text" name="user_id" size="10">
<br>
<li>이름: <input type="text" name="name" size="10"> &nbsp; &nbsp; &nbsp; 닉네임: <input type="text" name="nick_name" size="10">
<br>
<li>생년월일: <input type="text" name="birth" size="10"> &nbsp;&nbsp; &nbsp;
	성별: <input type="radio" name="sex" value="male">남자&nbsp;&nbsp; <input type="radio" name="sex" value="female">여자
<br>
<li>연락처: <input type="text" name="tel" size="10"> &nbsp;&nbsp;  이메일<input type="text" name="email" size="10">
<br>
<li>비밀번호: <input type="password" name="pw" size="10">
<br>
<li>주소: <input type="text" name="addr_1" size="15"> &nbsp; &nbsp; 상세주소<input type="text" name="addr_2" size="15" >
<br>
<input type="submit" value="가입하기">

</form>
</body>


</html>