import {ActivityIndicator, NavigationView, Page, ScrollView, TextView, ui} from 'tabris';

let navigationView = new NavigationView({
	left: 0, top: 0, right: 0, bottom: 0
}).appendTo(ui.contentView);

let page = new Page({
	title: "Don't Shake the Baby"
}).appendTo(navigationView);

let scrollView = new ScrollView({
	left: 0, right: 0, top: 0, bottom: 0
}).appendTo(page);

new TextView({
	top: 0, left: 16, right: 16,
	id: 'title',
	text: 'Baby',
	font: 'bold 28px'
}).appendTo(scrollView);