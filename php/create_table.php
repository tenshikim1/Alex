<?header("content-type:text/html; charset=UTF=8");

include("./db_connect.php");
$connect= dbconn();

$sql="CREATE TABLE member
		(no int not null auto_increment,
		PRIMARY KEY(no),
		id char(15),
		user_id char(15),
		name char(15),
		birth char(8),
		sex char(6),
		tel char(12),
		email char(30),
		pw char(30))";

mysql_query($sql,$connect);
if(!$sql)die("테이블 생성에 실패 하였습니다.".mysql_error());

?>