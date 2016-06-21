
	



var speed:float = 5.0;

var rotateSpeed:float = 5.0;

var bullitPrefab:Transform;


function Update () {


var controller : CharacterController = GetComponent(CharacterController);



//Rotate around y axis

transform.Rotate(0, Input.GetAxis("Horizontal") * rotateSpeed, 0);


// move forward and backward

var forward = transform.TransformDirection(Vector3.forward);


var curSpeed = speed * Input.GetAxis("Vertical");

controller.SimpleMove(forward * curSpeed);

/*

if(Input.GetButtonDown("Jump"))
	{
		var bullit = Instantiate(bullitPrefab, GameObject.Find("spawnPoint").transform.position, Quaternion.identity);
	     
	     bullit.rigidbody.AddForce(transform.forward * 2000);
	
	
	
	}
	*/
	
}



@script RequireComponent(CharacterController)

