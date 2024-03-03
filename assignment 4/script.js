var names=new Array();
names[0]="Yaakov";
names[1]="mark";
names[2]="Justin";
names[3]="malak";
names[4]="paul";
names[5]="roro";
names[6]="lucas";
names[7]="jean";
names[8]="william";
names[9]="marie";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}