import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

//const pushExpenses = (expenses) => {
//	expenses.forEach((expense) => {
//		database.ref('expenses').push(expense);
//	});
//};
//
//database.ref('expenses').on('child_changed', (snapshot) => {
//	console.log(snapshot.val());
//});
//
//database.ref('expenses')
//	.once('value')
//	.then((snapshot) => {
//		const expenses = [];
//
//		snapshot.forEach((child) => {
//			expenses.push({
//				id: child.key,
//				...child.val()
//			});
//		});
//		console.log(expenses);
//	});

//pushExpenses(expenses);

//const callbackFunction = database.ref().on('value', (snapshot) => {
//	console.log('snapshot: ', snapshot.val());
//}, (e) => {
//	console.log('error fetching values:', e);
//});

//database.ref('age').set(42);
//database.ref('age').set(20);

//database.ref().off('value', callbackFunction);

//database.ref('age').set(100);


//database.ref().set({
//	name: 'Gaetan Duron',
//	age: 20,
//	job: {
//		title: 'Software developer',
//		compagny: 'Google'
//	},
//	stressLevel: 3,
//	location: {
//		city: 'Paris',
//		country: 'France'
//	}
//}).then(() => {
//	console.log('The database has been updated');
//}).catch((error) => {
//	console.log('error: ', error);
//})
//
//database.ref().update({
//	stressLevel: 9,
//	'job/compagny': 'Amazon',
//	'location/city': 'Seattle'
//});
