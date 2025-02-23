// Function to add a new row for course input
function addRow() {
  let table = document.getElementById("cgpaTable");
  let rowCount = table.rows.length;
  let row = table.insertRow(rowCount);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  cell1.innerHTML = rowCount;
  cell2.innerHTML = `<input type="number" class="credits" min="1">`;
  cell3.innerHTML = `
        <select class="grade">
            <option value="10">A+</option>
            <option value="9">A</option>
            <option value="8">B+</option>
            <option value="7">B</option>
            <option value="6">C</option>
            <option value="5">D</option>
            <option value="0">F</option>
        </select>
    `;
}

// Function to calculate CGPA
function calculateCGPA() {
  let credits = document.querySelectorAll(".credits");
  let grades = document.querySelectorAll(".grade");

  let totalCredits = 0;
  let totalGradePoints = 0;

  for (let i = 0; i < credits.length; i++) {
    let credit = parseFloat(credits[i].value) || 0;
    let gradePoint = parseFloat(grades[i].value) || 0;

    totalCredits += credit;
    totalGradePoints += credit * gradePoint;
  }

  let cgpa =
    totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
  document.getElementById("result").innerText = "Your CGPA is: " + cgpa;
}
