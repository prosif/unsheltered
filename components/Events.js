var Events = {
	one: {
		id: 1,
		type: "health",
		top: 200,
		left: 400,
		text: "Room has opened up at the nearby shelter and you are able to rest for the night there. Additionally, they are serving dinner, a meal which will give you some much needed energy. Opportunities like this are rare for you; since shelters have very limited space and are typically reserve room for families, children, and emergency situations. On the downside, while you were eating dinner, you had to leave your bag in the room and some items were stolen.",
		health: 7,
		time: 8,
		cost: 5
	},
	two: {
		id: 2,
		type: "low",
		top: 75,
		left: 250,
		text: "When you are at a shelter seeing if they have room for night (unfortunately, they did not), the front desk does notify you that your application for food stamps was finally processed at the local SNAP(Supplemental Nutrition Assistance Program) Office and you receive some benefits.",
		time: 3,
		health: 2,
		reward: 5,
		criticalSuccess: 10,
		criticalFail: 10
	},
	three: {
		id: 3,
		type: "medium",
		top: 350,
		left: 350,
		text: "You are offered a short-term job for the day. Although you search for employment frequently, often times a single day job is more than you could have hoped for. Often times this involves delivering newspapers, gathering signatures for political events. In this case the building tenant offers you a job hanging christmas decorations around their building. It is cold out, but it is work you are grateful for.",
		reward: 15,
		time: 6,
		health: 15,
		criticalSuccess: 25,
		criticalFail: 25
	},
	four: {
		id: 4,
		type: "medium",
		top: 250,
		left: 200,
		text: "A homelessness awareness rally is put on the local church. They often provide relief packets which contain items such as razors, soaps, shampoo, and bottled water. Occasionally they will contain gift cards for groceries  but this is rare. In many cases it is the clean, bottled water that you are most thankful for. Unfortunately, these type of rallies attract negative attention from advocates, often unaware and uneducated on the problem, who protest homelessness and giving aid.",
		reward: 10,
		time: 4,
		health: 4,
		criticalSuccess: 25,
		criticalFail: 25
	},
	five: {
		id: 5,
		type: "high",
		top: 60,
		left: 350,
		text: "While walking back from the library where you used a public computer to search for employment,  you witness a mugging in progress. Although these types of crimes are rarer in San Francisco than in many other cities, they still happen. You wish you still had your cell phone to dial 911, even if it no longer had service, but it stopped working long ago. You can try to intervene but it would be dangerous to do so.",
		reward: 20,
		time: 1,
		health: 20,
		criticalSuccess: 50,
		criticalFail: 50
	},
	six: {
		id: 6,
		type: "high",
		top: 125,
		left: 375,
		text: "You do not like panhandling or begging for money because you do not like the idea of letting others glimpse at your current situation. However, you have comes to accept that sometimes it is out of necessity. This does attract attention that you did not want. In many cases anti-homeless protesters can be extremely aggressive and hostile towards anyone doing this or you might even be arrested.",
		reward: 15,
		time: 4,
		health: 15,
		criticalSuccess: 50,
		criticalFail: 50
	}

};

export default Events;