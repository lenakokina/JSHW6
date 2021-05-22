const students = [
    {
        id:10,
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7 ]
    },
    {
        id:11,
        name: 'John Doe',
        marks: [ 9, 8, 7, 6, 7 ]
    },
    {
        id:12,
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8 ]
    },
    {
        id:13,
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9 ]
    }
];

function getStudentAverageMark(student) {
    return getArrayAverage(student.marks);
}

function getGroupAverageMark(students) {
    let groupMarks = [];
    students.forEach((student) => (groupMarks = groupMarks.concat(student.marks)));
    return getArrayAverage(groupMarks);
}

function getArrayAverage(arr) {
   let sum = 0;
   arr.forEach((num) => (sum += num));
   return sum / arr.length;
}


alert(getStudentAverageMark(students[1]));

alert(getGroupAverageMark(students));