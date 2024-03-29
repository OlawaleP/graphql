 const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
            {
                id: 5,
                name: "Silva",
                username: "sj",
                age: 18,
                nationality: "CHILE",
            },
        ]
    },
    {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
    },
    {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "INDIA",
        friends: [
            {
                id: 2,
                name: "Pedro",
                username: "PedroTech",
                age: 20,
                nationality: "BRAZIL",
            },
        ]
    },
    {
        id: 4,
        name: "Rafe",
        username: "Rafedo",
        age: 22,
        nationality: "GERMANY",
    },
    {
        id: 5,
        name: "Silva",
        username: "sj",
        age: 18,
        nationality: "CHILE",
    },
];

const MovieList = [
    {
        id: 1,
        name: "Avengers Endgame",
        yearOfPublication: 2019,
        isInTheaters: true,
    },
    {
        id: 2,
        name: "Interstellar",
        yearOfPublication: 2007,
        isInTheaters: true,
    },
    {
        id: 3,
        name: "Superbad",
        yearOfPublication: 2009,
        isInTheaters: true,
    },
    {
        id: 4,
        name: "Thor",
        yearOfPublication: 2014,
        isInTheaters: false,
    },
    {
        id: 5,
        name: "Game",
        yearOfPublication: 2011,
        isInTheaters: false,
    },
]

module.exports = { UserList, MovieList };