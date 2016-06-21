#pragma strict
var speed : float = 1.0;

public var moveSpeed : float = 10f;
public var turnSpeed : float = 50f;

function Start () {

}

function Update () {


GetComponent.<ConstantForce>().relativeForce.z = Input.GetAxis("Vertical") * speed * Time.deltaTime; // Moves the spaceship forward


 if(Input.GetKey(KeyCode.UpArrow))
        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.DownArrow))
        transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.LeftArrow))
        transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.RightArrow))
        transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);


}


/*
#pragma strict

public var moveSpeed : float = 10f;
public var turnSpeed : float = 50f;


function Update ()
{
    if(Input.GetKey(KeyCode.UpArrow))
        transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.DownArrow))
        transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.LeftArrow))
        transform.Rotate(Vector3.up, -turnSpeed * Time.deltaTime);
    
    if(Input.GetKey(KeyCode.RightArrow))
        transform.Rotate(Vector3.up, turnSpeed * Time.deltaTime);
}



*/