import Project1 from "../../Components/image/library.jpeg"
import Project2 from "../../Components/image/employee.jpeg";
import Project3 from "../../Components/image/movie.jpeg";
import Project4 from "../../Components/image/COVID-19.jpeg";
import Project5 from "../../Components/image/game.jpeg";
import Project6 from "../../Components/image/data.jpeg";

export const ProjectList = [
    {
        name: "Library Management Web",
        image: Project1,
        type: "Full Stack Project with Django",
        overview: "Developed library web pages with Django and implement librarian and user management functions.",
        stackInfo1: "* Implemented RESTful API endpoints to let users manage book information and status",
        stackInfo2: "* Created flow control when using asynchronous operations and querying the site's database using Mongoose ODM"
    },
    {
        name: "Employee Management Web",
        image: Project2,
        type: "Full Stack Project with SpringBoot",
        overview: "Develop employee management system with SpringBoot and realize CRUD function",
        stackInfo1: "* Implemented front-end UI design with HTML5, Tailwind CSS, and React.js",
        stackInfo2: "* Build RESTful API with Spring Boot and MySQL to handle HTTP requests and responses, created CRUD operations to fetch data with queries"
    },
    {
        name: "Movie Application",
        image: Project3,
        type: "Front-end Project with Javascript",
        overview: "Developed movie website allows users to view the movie information and search the movie",
        stackInfo1: "* Implemented front-end UI design with HTML5, CSS, and React.js",
        stackInfo2: "* Implement a third-party API endpoint to allow users to query and browse movie information"
    },
    {
        name: "Hospital On-Wheels System",
        image: Project4,
        type: "System Design with Java",
        overview: "Developed a system in Java for the management of infectious disease chains within multiple communities",
        stackInfo1: "* Structured with 30+ classes and conducted continuous user interaction services in various locations",
        stackInfo2: "* Implemented API conducted multiple functions: helping identify and display patients who may have intentionally infected others"
    },
    {
        name: "Number Guessing Game",
        image: Project5,
        type: "Front-end Project with Javascript",
        overview: "Implement a guessing number game, allowing users to guess the number according to the prompt",
        stackInfo1: "* Implemented front-end UI design with HTML5, CSS, and Javascript",
        stackInfo2: "* Implemented API to achieve user input, according to the prompt to guess the number of interactive operation"
    },
    {
        name: "Data Visualization Analysis",
        image: Project6,
        type: "Data Visualization Project with Python",
        overview: "Provides water quality analysis reports for two water stations in California.",
        stackInfo1: "* Led a team to visually analyze and research water quality data from two California water stations (H.O. Banks Headworks & Check 41) using NumPy & Pandas",
        stackInfo2: "* Maintained and cleaned the raw data (4 million rows)M"
    },
];