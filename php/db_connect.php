<?
function dbconn(){
	$host_name="localhost";
	$db_user_id="tenshikim";
	$db_name="tenshikim";
	$db_pw="kcs0809!!!";
	$connect=mysql_connect($host_name,$db_user_id,$db_pw);
	mysql_query("set names utf8",$connect);
	mysql_select_db($db_name,$connect);
	if(!$connect)die("���ῡ �����Ͽ����ϴ�.".mysql_error());
	return $connect;
}
?>