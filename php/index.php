<html>
 <head>
 <meta http-equiv="Content-type" content="text/html; charset=UTF-8" />
  <title>TEST홈페이지</title>
 </head>
 <body>
   <table border="0" width="100%" height="100%" align="center" cellspacing="0" cellpadding="0">
   <tr>
   <td width="100%" height="80" align="center" bgcolor="#764300">
	<font color="#FFFFFF"><strong>[홈페이지 상단입니다]</strong></font>
   </td>

   <tr>
   <td width="100%" height="50" align="center"><a href="./member/jon.php"><strong>[회원가입]</strong></a> &nbsp; &nbsp;</td>

   <tr>
   <td width="100%" height="30" align="center" bgcolor="#EDEDED">My SQL 데이터 생성</td>

   <tr>
   <td width="100%" height="20" align="left" valign="top" bgcolor="#FFFFFF">
   <form action="./test2.php" name="test" method="post">
   <input type="hidden" name="id" value="test" >
	<li>아이디: <input type="text" name="user_id" size="10">
	<li>이름: <input type="text" name="name" size="10">
	<li>비밀번호: <input type="password" name="pw" size="10">

	<br><br>
	-메모-<br>
	<textarea name="memo" cols="100" rows="5"></textarea>
	<br><br>
	<input type="submit" value="전송">

   </form>
   </td>

   <tr>
   <td width="100%" height='50' align="left" valign="top" bgcolor="#FFFFFF">
   

   <?
   $connect= mysql_connect("localhost","tenshikim","kcs0809!!!");
   mysql_select_db("tenshikim",$connect);
   if(!$connect)die("연결에 실패 하였습니다.".mysql_error() );

   //쿼리문으로 데이터를 불러오기
   $query= 'select * from bbs_1 where id="test"';
   mysql_query("set names utf8", $connect);
   $result= mysql_query($query,$connect);
   while($data= mysql_fetch_array($result)){

	   $data_Y = substr($data[regdate], 0, 4);
	   $data_m = substr($data[regdate], 4, 2); 
	   $data_d = substr($data[regdate], 6, 2); //6에서 부터 2개 잘라라
	   $data_h = substr($data[regdate], 8, 2);
	   $data_i = substr($data[regdate], 10, 2);
   ?>
   <tr>
	<td width="100%" height="30" align="left" valign="top" bgcolor="#FFFFFF">
	여기에 데이터 값을 가지고 옵니다.
	-이름: <?=$data[name]?> &nbsp; &nbsp; -아이디: <?=$data[user_id]?> &nbsp;&nbsp; -date:<?=$data_Y?>년 <?=$data_m?>월 <?=$data_d?>일 <?=$data_h?>:<?=$data_i?><br>
	-메모: <?=$data[memo]?>
	<hr size=0.1 />
	</>
	<?}?>

   <td width="100%" height="100%" align="center" bgcolor="#FFFFFF">&nbsp;</td>
   <tr>
   </table>
 </body>
</html>
