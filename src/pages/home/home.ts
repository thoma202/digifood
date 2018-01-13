import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	menu = [
		{
			image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
			name: "Le festin de Thanksgiving",
			price: 160,
			description:"Si vous en avez marre des repas simplistes, rien ne vaus ce superbe assortiment de Thanksgiving."
		},
		{
			image:'https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg',
			name:"Un burger et des frites",
			price:25,
			description: "Classique mais inégalé dans son efficacité, le burger frites vous fera rêvez avec son bacon croustillant et son cheddar fondant",
			options: [
				{
					name:"Cheese ?", 
					price:2
				},
				{
					name:"Bacon ?",
					price:2
				}
			]
		},
		{
			image:'http://static2.businessinsider.com/image/590a3ea52ceae9f2108b4c1d/the-most-successful-fast-food-chains-in-america.jpg',
			name:"Une bonne part de pizza",
			description: "Tout droit venue d'Italie pour vous régaler, la pizza salami est l'incontournable de vos soirées",
			price:7
		},
		{
			image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7NsUq3AGaz-GkTkSCyUdQPGoLtrQ5IDTD1ZQKZClmxaZGcuki',
			name:"Pikachucake",
			description: "Pour tous les fans de mangas et de gateaux, un bon mix pour finir votre repas en beauté",
			price:10
		}
	];

	constructor(public navCtrl: NavController) {

	}

}
