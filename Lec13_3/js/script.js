const roles = {
	admin: "images/admin.svg",
	student: "images/student.svg",
	lector: "images/lector.svg"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const usersByRoles = {
	"admin": user => new Admin(user),
	"student": user => new Student(user),
	"lector": user => new Lector(user)
}

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "images/user.svg",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "images/user.svg",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "images/user.svg",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "images/user.svg",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "images/user.svg",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 25,
		img: "images/user.svg",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]

class User {
	constructor(user) {
		this.name = user.name;
		this.age = user.age;
		this.img = user.img;
		this.role = user.role;
		this.courses = user.courses;
	}

	render() {
		return`<div class="user__info">
                    <div class="user__info--data">
                        <img src="${this.img}" alt="${this.name}" height="50">
                        <div class="user__naming">
                            <p>Name: <b>${this.name}</b></p>
                            <p>Age: <b>${this.age}</b></p>
                        </div>
                    </div>
                    <div class="user__info--role student">
                        <img src="${roles[this.role]}" alt="${this.role}" height="25">
                        <p>${this.role}</p>
                    </div>
                </div>`;
	}

	renderCourses() {
		if (!this.courses) return "";
		const coursesBlock = this.courses
			.map(course => {
				return `<p class="user__courses--course ${this.role}">
					${course.title} <span class="${calculateGrade(gradation,course.mark)}">${calculateGrade(gradation,course.mark)}</span>
				</p>`;
			})
			.join("");

		return `<div class="user__courses">${coursesBlock}</div>`;
	}

	renderUser() {
		return `<div class="user">
			${this.render()}
			${this.renderCourses()}
		 </div>`;
	}
}

class Student extends User {
	constructor(user) {
		super(user);
	}
}

class Admin extends User{
	constructor(user) {
		super(user);
	}
	renderCourses() {
		if (!this.courses) return "";
		const coursesBlock = this.courses
			.map(course => {
				return `<div class="user__courses--course admin">
							<p>Title: <b>${course.title}</b></p>
							<p>Admin's score: <span class="${calculateGrade(gradation,course.score)}">${calculateGrade(gradation,course.score)}</span></p>
							<p>Lector: <b>${course.lector}</b></p>
							</div>`;
			})
			.join("");

		return `<div class="user__courses admin--info">${coursesBlock}</div>`;
	}
}

class Lector extends User{
	constructor(user) {
		super(user);
	}
	renderCourses() {
		if (!this.courses) return "";
		const coursesBlock = this.courses
			.map(course => {
				return `<div class="user__courses--course lector">
							<p>Title: <b>${course.title}</b></p>
							<p>Lector's score: <span class="${calculateGrade(gradation,course.score)}">${calculateGrade(gradation,course.score)}</span></p>
							<p>Average student's score: <span class="${calculateGrade(gradation,course.studentsScore)}">${calculateGrade(gradation,course.studentsScore)}</span></p>
						</div>`;
			})
			.join("");

		return `<div class="user__courses admin--info">${coursesBlock}</div>`;
	}
}

function createUser(users) {
	let usersWithRoles = users
		.map(user => usersByRoles[user.role](user))
		.map(user => user.renderUser())
		.join("");
	return usersWithRoles;
}

function calculateGrade(gradations, grade) {
	for(let mark in gradations) {
	if(grade <= mark)
		return gradations[mark];
	}
	return "Grade is unknown";
}

document.write(`<div class="users">
			${createUser(users)}
		 </div>`);
