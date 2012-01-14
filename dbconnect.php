<?php
// SQL CONNECT HERE
  mysql_connect("db876.1und1.de", "dbo202568527","ildms5sk") or die
    ("Keine Verbindung moeglich");
  mysql_select_db("db202568527") or die
    ("Die Datenbank existiert nicht.");

function dosql($sql)
{
	// echo "<pre>".$sql."</pre>";
	return mysql_query($sql);
}

function sqlMakeProAry($sql)
{
	$providerliste = array();
	
	if(!preg_match("/vip_provider/i",$sql))
	{ die("sqlMakeProAry(...) kann nur aus Providern ein Array erstellen"); }
   
  $ergebnis = dosql($sql);
  while($row = mysql_fetch_object($ergebnis))
  {
	 $hidden = array();
	 $visible = array();
	 
	 $visible['id'] = $row->vpr_id;
	 $visible['Name'] =  $row->vpr_name;
	 $visible['Straße'] =  $row->vpr_addr_street;
	 $visible['Postleitzahl'] =  $row->vpr_addr_zipcode;
	 $visible['Stadt'] =  $row->vpr_addr_city;
	 $visible['Telefonnummer'] =  $row->vpr_phone;
	 
	 $provider['visible'] = $visible;
     $provider['hidden'] = $hidden;
	 
	 $providerliste[$row->vpr_id] = $provider;
  }
  
  return $providerliste;
}

function sqlFillServices($providerliste)
{
	// Jeder Provider muss das Feld Services erhalten
	$dummysql = '';
	foreach($providerliste as $id => $ary)
	{
		$providerliste[$id]['visible']['Services'] = '';
		$dummysql .= " vpr_id = $id or";
	}
	$dummysql = substr($dummysql,0,-3);
	
	// TODO SQL muss dynamischer sein - die IDs müssen von der Providerliste abhängen
	$sql = 'SELECT vpr_id, vse_name, vse_desc FROM `vip_service` 
				left join `vip_provider_service` on vse_id = vps_vse_id
				left join `vip_provider` on vps_vpr_id = vpr_id
				WHERE '.$dummysql;
			
	$ergebnis = dosql($sql);
	
	while($row = mysql_fetch_object($ergebnis))
	{
	 $row->vpr_id;
	
	// Trennkomma einfügen falls noch nichts vorhanden ist
	if($providerliste[$row->vpr_id]['visible']['Services'] != '')
	{ $providerliste[$row->vpr_id]['visible']['Services'] .= ","; }
	
	$providerliste[$row->vpr_id]['visible']['Services'] .= "<span title=\"".$row->vse_desc."\">".$row->vse_name."</span>";
	}
	
	return $providerliste;
}

function sqlGetProvider($id)
{
	$sql = "SELECT * FROM vip_provider WHERE vpr_id = '$id'";
	$providerliste = sqlMakeProAry($sql);
	return $providerliste[$id];
}

function sqlDelProvider($id)
{
	//TODO Zusätzlich müssen seine Services gelöscht werden !
	$sql = "DELETE FROM vip_provider WHERE vpr_id = '$id'";
	$ergebnis = dosql($sql);
	return $ergebnis;
}

function sqlGetServiceList()
{
	$services = array();
	
	$sql = "SELECT vse_id, vse_name, vse_desc FROM `vip_service` order by vse_name";
	$ergebnis = dosql($sql);
	
	while($row = mysql_fetch_object($ergebnis))
	{
		$services[$row->vse_id]['Name'] = $row->vse_name;
		$services[$row->vse_id]['Beschreibung'] = $row->vse_desc;
	}
	
	return $services;
}

function sqlGetMaxProviderId()
{
	$srvid = '';
	
	$sql = 'SELECT max(vpr_id) as idserv FROM `vip_provider`';
	$result = dosql($sql);
	while($row = mysql_fetch_object($result))
	{
		$srvid = $row->idserv;
	}
	return $srvid;
}




/*
INSERT INTO `vip_provider` ( `vpr_id` , `vpr_name` , `vpr_addr_street` , `vpr_addr_zipcode` , `vpr_addr_city` , `vpr_phone` , `vpr_mail` , `vpr_website` , `vpr_memo` )
VALUES (
'', 'Le Meridien', 'Bayerstraße 41', '80335', 'München', '+49 (89) 2422-0', 'info.muenchen@lemeridien.com', 'www.lemeridien.com/munich/', NULL
);
*/
?>