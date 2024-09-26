let user = {
    name: 'Ethan',
    id: 1,
    gender: 'male',
};

let users = [
	{
		"name": "Rylee Schneider",
		"email": "purus.gravida.sagittis@aol.com",
		"phone": "(790) 440-3298",
		"address": "P.O. Box 986, 4609 Enim. Ave",
		"postalZip": "6486",
		"region": "South Chungcheong",
		"country": "Chile",
		"list": 17,
		"numberrange": 9
	},
	{
		"name": "Cedric Robertson",
		"email": "purus.maecenas@hotmail.ca",
		"phone": "1-884-772-5884",
		"address": "Ap #243-1689 Non Avenue",
		"postalZip": "26751",
		"region": "Burgenland",
		"country": "Turkey",
		"list": 11,
		"numberrange": 5
	},
	{
		"name": "Yoshi Martin",
		"email": "interdum.sed.auctor@aol.ca",
		"phone": "1-611-508-2171",
		"address": "Ap #408-3314 Ut Road",
		"postalZip": "6965",
		"region": "North Chungcheong",
		"country": "Pakistan",
		"list": 1,
		"numberrange": 7
	},
	{
		"name": "Kay Hayden",
		"email": "metus.facilisis@outlook.couk",
		"phone": "1-863-562-8961",
		"address": "P.O. Box 758, 6578 Turpis Rd.",
		"postalZip": "5253",
		"region": "Queensland",
		"country": "Australia",
		"list": 11,
		"numberrange": 3
	},
	{
		"name": "Perry Willis",
		"email": "cum.sociis.natoque@icloud.org",
		"phone": "1-733-372-5142",
		"address": "2624 Massa. Road",
		"postalZip": "466525",
		"region": "Sachsen",
		"country": "Netherlands",
		"list": 11,
		"numberrange": 3
	}
];

// console.log(user.name);

// users.forEach(user => {
//     console.log(`user name ${user.name}`)
//     // return user;
// })

for(let i = 0 ; i < users.length ; i++) {
    console.log(`user name ${users[i].name}`)
}
