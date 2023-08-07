<template>
    <div class="card-header">
      <h class="card-title"><b>Data DPR</b></h>
    </div>
  
    <div class="container">
      <div class="table-wrapper">
        <table id="exampledatadpr" class="table table-striped" style="width: 100%">
          <thead>
            <tr>
              <th style="width: 15%">Tanggal DPR</th>
              <th>Tanggal Input</th> 
              <th>Jam Input</th>
              <th style="width: 60%">Laporan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <!--Tanggal DPR-->              
              <td>10 Februari 2023</td>
              <!--Tanggal Input -->
              <td>10 Februari 2023</td>
              <!--Jam Input-->
              <td>17.10</td>
              <!--Laporan-->
              <td>1. Membuat Dropdown pada Sidebar Menu Role dan Settings<br>
                  2. Membuat Filter pada halaman karyawan<br>
                  3. Meeting dengan Pak Edy
              </td>
            </tr>
            <tr>
              <!--Tanggal DPR-->              
              <td>10 Februari 2023</td>
              <!--Tanggal Input -->
              <td>10 Februari 2023</td>
              <!--Jam Input-->
              <td>17.10</td>
              <!--Laporan-->
              <td>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  $(document).ready(function () {
    $("#exampledatadpr").DataTable({
      searching: true,
      paging: true,
      ordering: false,
      responsive: true,
      dom: 'Bfrtip',
          buttons:[ 
        {
          extend:    'excelHtml5',
          text:      '<i class="fas fa-file-excel"> Excel </i> ',
        },
        {
          extend:    'pdfHtml5',
          text:      '<i class="fas fa-file-pdf"> PDF </i> ',
        },
      ]
    });
  });
  </script>