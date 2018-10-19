var arrayOfTasksUrl = ["src/task_01/task_01.js", "src/task_02/task_02.js", "src/task_03/task_03.js", "src/task_04/task_04.js", "src/task_05/task_05.js", "src/task_06/task_06.js", "src/task_07/task_07.js", ];

var taskDescription = {
    task_01 : "Task 01:<br><br>function chessDeskCreate(chessDeskLenth, chessDeskWidth, chessDeskSymbol)<br><br>Creates a chess desk with the entered parameters, where:<br><br>chessDeskLenth - number of symbols shown horizontally;<br>chessDeskWidth - number of symbols shown vertically;<br>chessDeskSymbol - symbol that represents chess desk cells;",
    task_02 : "Task 02:<br><br>function envelopeCompare(firstEnvelope, secondEnvelope)<br><br>Checking which envelope can be fit into another one.<br><br>firstEnvelope and secondEnvelope must be object types, with two numeric fields, representing the width and the length of each envelope.",
    task_03 : "Task 03:<br><br>function trianglesSort(arrayOfTriangles)<br><br>Sorting the entered array of triangles in descending order by their area.<br><br>arrayOfTriangles - must be the type of array, which consists of at least 2 objects. Objects must have the following structure:<br><br>{<br>vertices: 'vercites-names',<br>a: triangle-side-length,<br>b: triangle-side-length,<br>c: triangle-side-length<br>}<br><br>vertices - must be the type of String<br>a, b, c - must be the type of Number",
    task_04 : "Task 04 description",
    task_05 : "Task 05 description",
    task_06 : "Task 06 description",
    task_07 : "Task 07 description"
};

var taskDescriptionButtons = document.getElementsByClassName("taskBtn");
