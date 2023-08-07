<template>
  <div class="card-header">
    <h class="card-title"><b>Data DPR Bermasalah</b></h>
  </div>

  <div class="container">
    <div class="table-wrapper">
      <table id="exampledprbermasalah" class="table table-striped" style="width: 100%">
        <thead>
          <tr>
            <th style="width: 15%">Nama Karyawan</th>
            <th>Keterangan</th>
            <th>Tanggal DPR</th>
            <th>Tanggal Input</th>
            <th>Jam Input</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!--Nama Karyawan-->
            <td>Nico Tambunan</td>
            <!--Keterangan-->
            <td>Pengisian DPR Tidak Sesuai Tanggal</td>
            <!--Tanggal DPR-->
            <td>10 Februari 2023</td>
            <!--Tanggal Input -->
            <td>11 Februari 2023</td>
            <!--Jam Input-->
            <td>17.10</td>
          </tr>
          <tr>
            <!--Nama Karyawan-->
            <td>Arno Purboyo</td>
            <!--Keterangan-->
            <td>Pengisian DPR Tidak Sesuai Tanggal</td>
            <!--Tanggal DPR-->
            <td>12 Februari 2023</td>
            <!--Tanggal Input -->
            <td>13 Februari 2023</td>
            <!--Jam Input-->
            <td>17.10</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
$(document).ready(function () {
  $("#exampledprbermasalah").DataTable({
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

<style>
th,
td {
  text-align: left;
}
</style>