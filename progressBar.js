var barDisplay1 : float = 0;
var barDisplay2 : float = 0;
var pos : Vector2 = new Vector2(60,40);
var size : Vector2 = new Vector2(60,20);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;

var sizeIcon : Vector2 = new Vector2(200,130); 
var cross0:Texture2D;
var cross1:Texture2D;
var cross2:Texture2D;
var cross3:Texture2D;
private var icons:Texture2D;
private var temp: Vector3;

private var carScript : Car;
private var aiScript : CarAi;
public var dead1:int;
public var dead2:int;


private var ScriptRestart : restart;
public var score:int;
private var UIScore:String;
var MyFont : Font;
var imageScore:Texture;
function Start()
{
dead1=0;
dead2=0;
icons=cross0;
ScriptRestart=GameObject.Find("restartObj").GetComponent(restart);

score=0;

}
function OnGUI()
{
    // draw the icons:
//if player is dead and ai is still alive
//draw cross sign on player's car icon
    if (dead1==1 && dead2==0 )
   	  icons=cross1;
//if  ai is dead and player is still alive
//draw cross sign on ai's car icon
    if (dead1==0 && dead2==1)
   	 {
   	   icons=cross2;
   	   //won
   	   
   	   ScriptRestart.isButtonNextVisible=true;
   	   transform.rigidbody.isKinematic=true;
   	   GameObject.FindGameObjectWithTag("enemy1").rigidbody.isKinematic=true;
   	 }
//if both are dead
    if (dead1==1 && dead2==1)
   	  icons=cross3; 
   	  
 GUI.Box (Rect (0,0, sizeIcon.x, sizeIcon.y),icons);
 
 
 //----------draw progress bar for player and ai
 
 
    // draw the background1: player
    GUI.BeginGroup (new Rect (pos.x, pos.y, size.x, size.y));
   
       GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);
 
        // draw the filled-in part1:player
        GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay1, size.y));
            GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
            
        GUI.EndGroup ();
 
    GUI.EndGroup ();
    
        // draw the background2:ai1
    GUI.BeginGroup (new Rect (pos.x, pos.y+40, size.x, size.y));
        GUI.Box (Rect (0,0, size.x, size.y),progressBarEmpty);
 
        // draw the filled-in part2:ai1
        GUI.BeginGroup (new Rect (0, 0, size.x * barDisplay2, size.y));
            GUI.Box (Rect (0,0, size.x, size.y),progressBarFull);
        GUI.EndGroup ();
 
    GUI.EndGroup ();
        
    
  UIScore=score.ToString();
   GUI.skin.font = MyFont;
    GUI.contentColor = Color.cyan;
    GUI.Label (Rect (150,5, 140, 40), "SCORE");
  

   GUI.Label (Rect (290, 5, 500, 40), UIScore);

} 
 
function Update()
{

       carScript =transform.GetComponent(Car);
       aiScript =GameObject.Find("ai2").GetComponent(CarAi);

	           
	 if (barDisplay1<0.1)
		 {
		  carScript.carIsDead=true;
		  dead1=1;
		 }
	 if (barDisplay2<0.1)
		 {
		aiScript.carIsDead=true;
		  dead2=1;
		 }

	 

}
