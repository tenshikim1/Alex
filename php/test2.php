<?header("content-type:text/html; charset=UTF-8");

$id= $_POST[id];
$user_id= $_POST[user_id];
$name= $_POST[name];
$pw= $_POST[pw];
$memo= $_POST[memo];

echo $regdate=date("YmdHis", time());
$ip=getenv("REMOTE_ADDR");

$connect=mysql_connect("localhost","tenshikim","kcs0809!!!");
mysql_select_db("tenshikim",$connect);
if(!$connect){
	echo "연결에 실패 하였습니다.".mysql_error();
}

$query="insert into bbs_1(id, user_id, name, pw, memo, regdate, ip) 
						values('$id','$user_id','$name','$pw','$memo','$regdate','$ip')";
mysql_query($query,$connect);
mysql_close; 
?>

<script>
window.alert("쿼리가 정상적으로 전송 되었습니다.");
location.href='./index.php';
</script>

