<?php
class userController extends Controller{
    
    function __construct() {
        require(ROOT . 'Models/User.php');
      }

    
    function index(){
        $xvar = 'salam';
        $this->set(['xvar'=>$xvar]);
        $this->render("index"); // call view
    }

    function show(){
        if(isset($_POST["title"])){
            echo $_POST["title"];
        }
    }

    function createUser(){
        $result = ['status'=>true , 'description'=>''];
        $user= new User();

        if (!empty($user->showUser("arash"))){
            $result['status'] = false;
            $result['description'] = "user already exist";
            print_r(json_encode($result)); 
            return;
        }

        $data = [
            'username'=>'arash',
            'password'=>'123',
            'email'=>'arash',
            'firstname'=>'arash',
            'lastname'=>'arash',
            'age'=>'arash',
            'city'=>'arash',
            'country'=>'arash',
            'avatar'=>'arash',
        ];

        if($user->create($data)){
            $result['status'] = true;
            $result['description'] = "user created";
            print_r(json_encode($result));
        }else{
            $result['status'] = false;
            $result['description'] = "creation failed with unknown reasons";
            print_r(json_encode($result));
        }
        
    }

    function login(){
        $user= new User();
        $entered_pass = '123';
        $db_pass = $user->login('arash');
        $result = ['status'=>true , 'description'=>''];

        if(empty($db_pass)){
            $result['status'] = false;
            $result['description'] = "user does not exist";
        }else if($db_pass == $entered_pass){
            $result['status'] = true;
            $result['description'] = "login sucessful";
        }else{
            $result['status'] = false;
            $result['description'] = "password failed";
        }
        print_r(json_encode($result));
    }

    public function updateUser($username){
        $user = new User();
        $user_db = $user->showUser($username);
        if(!$user_db){
            echo "error";
            return;
        }
        foreach ($user_db as $key => $value) {
            if (is_numeric($key))   continue;
            echo $key . "::::" . $value;
            echo "<br>";
        }
    }

    /*
    use this function only one time
    */
    private function createTable(){
        $user = new User();
        print_r($user->createTable());
    }
}

?>