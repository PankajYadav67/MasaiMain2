enum Subject {
    Chemistry,
    Physics,
    Maths,
}

type User = {
    id: number;
    name: string;
    age: number;
    salary: number;
};

type Teacher = {
    id: number;
    name: string;
    subject: Subject;
    numberOfStudents: number;
};

type Sortable<T> = T extends User
    ? keyof User
    : T extends Teacher
    ? keyof Teacher
    : never;

function sort<T>(arr: T[], sortBy: Sortable<T>): T[] {
    const length = arr.length;

    if (length <= 1) {
        return arr.slice();
    }

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if ((arr[j] as any)[sortBy] > (arr[j + 1] as any)[sortBy]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example usage with an array of Users
const users: User[] = [
    { id: 3, name: "Alice", age: 25, salary: 50000 },
    { id: 1, name: "Bob", age: 30, salary: 60000 },
    { id: 2, name: "Charlie", age: 22, salary: 45000 },
];

const sortedUsersById = sort(users, "id");
console.log(sortedUsersById);

// Example usage with an array of Teachers
const teachers: Teacher[] = [
    { id: 2, name: "TeacherB", subject: Subject.Physics, numberOfStudents: 30 },
    { id: 1, name: "TeacherA", subject: Subject.Maths, numberOfStudents: 25 },
    { id: 3, name: "TeacherC", subject: Subject.Chemistry, numberOfStudents: 20 },
];

const sortedTeachersByName = sort(teachers, "name");
const sortedTeachersByNumberOfStudents = sort(teachers, "numberOfStudents");
console.log(sortedTeachersByName);
