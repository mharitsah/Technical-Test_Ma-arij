//membuat fungsi pengecualian selected employee
function excludeSelectedEmployees(employees, selected_employees) {
  //menggunakan fungsi filter pada array employee
  return employees.filter((employee) => {
    //menggunakan fungsi some untuk mengecek nik yang sama pada array employee dan selected employee
    return !selected_employees.some((selected_employee) => {
      return selected_employee.nik === employee.nik;
    });
  });
}

// daftar array employee
const employees = [
  { "nik":"1", "name":"ABIYYU" },
  { "nik":"2", "name":"ADHIKA" },
  { "nik":"3", "name":"AFRIE" },
  { "nik":"4", "name":"ALAM"}
];

//daftar array yang akan dikecualikan
const selected_employees = [
  { "nik": "1", "name": "ABIYYU" },
  { "nik": "2","name":"ADHIKA"}
];

//memanggil fungsi excludeSelectedEmployees
const unselected_employee = excludeSelectedEmployees(employees, selected_employees);
//mencetak isi dari unselected_employee pada console log
console.log(unselected_employee);