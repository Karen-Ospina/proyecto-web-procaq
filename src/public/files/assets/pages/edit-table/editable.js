  'use strict';
  $(document).ready(function() {
      $('#example-2').Tabledit({

          editButton: false,
          deleteButton: false,
          hideIdentifier: true,
          columns: {
              identifier: [0, 'id'],
              editable: [
                  [1, 'Alumno Name'],
                  [2, 'Nota Teorica']
                  [3, 'Nota Practica']
                  [4, 'Nota Final']
              ]
          }
      });
      $('#example-2').Tabledit({

          columns: {

              identifier: [0, 'id'],

              editable: [
                  [1, 'Alumno Name'],
                  [2, 'Nota Teorica name']
                  [3, 'Nota Practica name']
                  [4, 'Nota Final name']
              ]

          }

      });
  });
  var x = 3;

  function add_row() {
      var table = document.getElementById("example-2");
      var t1 = (table.rows.length);
      var row = table.insertRow(t1);
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      cell1.className = 'abc';
      cell2.className = 'abc';
      $('<input  value="' + (++x) + '" type="text" name="#"  disabled="" >').appendTo(cell0);
      $('<span class="tabledit-span" ></span><input class="tabledit-input form-control input-sm" type="text" name="Alumno" >').appendTo(cell1);
      $('<span class="tabledit-span" ></span><input class="tabledit-input form-control input-sm" type="text" name="Nota"   >').appendTo(cell2);
      $('<span class="tabledit-span" ></span><input class="tabledit-input form-control input-sm" type="text" name="Nota"   >').appendTo(cell3);
      $('<span class="tabledit-span" ></span><input class="tabledit-input form-control input-sm" type="text" name="Nota"   >').appendTo(cell4);

  };