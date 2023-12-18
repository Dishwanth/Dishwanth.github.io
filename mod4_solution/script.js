var names=new Array();
names[0]="Dish";
names[1]="Kavya";
names[2]="Elango";
names[3]="Gowshi";
names[4]="Kiran";
names[5]="Tarun";
names[6]="Vamsi";
names[7]="Lokesh";
names[8]="Hemnath";
names[9]="Akash";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}