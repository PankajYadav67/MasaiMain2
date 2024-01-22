var Subject;
(function (Subject) {
    Subject[Subject["Chemistry"] = 0] = "Chemistry";
    Subject[Subject["Physics"] = 1] = "Physics";
    Subject[Subject["Maths"] = 2] = "Maths";
})(Subject || (Subject = {}));
;
function sort(arr, sortBy) {
    var length = arr.length;
    if (length <= 1) {
        return arr.slice();
    }
    for (var i = 0; i < length - 1; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j][sortBy] > arr[j + 1][sortBy]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
// Example usage with an array of Users
var users = [
    { id: 3, name: 'Alice', age: 25, salary: 50000 },
    { id: 1, name: 'Bob', age: 30, salary: 60000 },
    { id: 2, name: 'Charlie', age: 22, salary: 45000 },
];
var sortedUsersById = sort(users, 'id');
console.log(sortedUsersById);
// Example usage with an array of Teachers
var teachers = [
    { id: 2, name: 'TeacherB', subject: Subject.Physics, numberOfStudents: 30 },
    { id: 1, name: 'TeacherA', subject: Subject.Maths, numberOfStudents: 25 },
    { id: 3, name: 'TeacherC', subject: Subject.Chemistry, numberOfStudents: 20 },
];
var sortedTeachersByName = sort(teachers, 'name');
var sortedTeachersByNumberOfStudents = sort(teachers, 'numberOfStudents');
console.log(sortedTeachersByName);
