<?php 
	/**
	* 
	*/
	class ConMysql {
		public $servername;
		public $username;
		public $password;
		public $dbname;
		public $con = '';
		public function  __construct($servername,$username,$password,$dbname){
			$this->servername =$servername;
			$this->username =$username;
			$this->password =$password;
			$this->dbname =$dbname;

		}
		public  function getConnectsql(){
			try {
			    $db ="mysql:host=$this->servername;dbname=$this->dbname";
			    $this->con = new PDO($db, $this->username, $this->password);
			}
			catch(PDOException $e)
			{
			    echo $e->getMessage();
			}
		}
		public  function updateDate($sql)
		{

			if($this->con==null){

				$this->getConnectsql();
			};
			header("Content-type: application/json; charset=utf-8"); 
			$res = $this->con->exec($sql);
			$arr = array('result'=>$res);
			echo json_encode($arr);
			$this->closeConn();
		}
		public function closeConn()
		{
			$this->con =null;
		}
	}
	class realConn extends ConMysql {
		
		public function  __construct($servername,$username,$password,$dbname){
			parent::__construct($servername,$username,$password,$dbname);
		}
		public function realupdateDate()
		{
			$sql ="UPDATE  count  SET  count = count +1 WHERE id=1";
			$this->updateDate($sql);
		}
	}
	$parise =  new  realConn("localhost", "root", "", "jzhu");
	$parise->realupdateDate();

 ?>
