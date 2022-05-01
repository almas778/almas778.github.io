var names=new Array();
names[0]="Almas";
names[1]="Amin";
names[2]="Aman";
names[3]="Naman";
names[4]="Ajay";
names[5]="Samai";
names[6]="Abhishek";
names[7]="joshi";
names[8]="Aditya";

for (var i = 0; i < names.length; i++){
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
		console.log("Goodbye " +names[i])
	}
	else{
		console.log("Hello "+names[i])
	}
}