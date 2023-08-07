<template>
  <div class="card-header">
    <h class="card-title"><b>Hari Libur</b></h>
  </div>

  <div class="container">
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6">
            <h5><b>Hari Libur</b></h5>
          </div>
          <div class="col-sm-6">
            <a
              href="#addEmployeeModal"
              class="btn btn-success"
              data-toggle="modal"
              ><i class="material-icons">&#xE147;</i> <span>Tambah</span></a
            >
            <a
              href="#deleteEmployeeModal"
              class="btn btn-danger"
              data-toggle="modal"
              ><i class="material-icons">&#xE15C;</i> <span>Hapus</span></a
            >
          </div>
        </div>
      </div>
      <table
        id="exampleharilibur"
        class="table table-striped"
        style="width: 100%"
      >
        <thead>
          <tr>
            <th style="width: 20%">Tanggal</th>
            <th>Keterangan</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <!--Tanggal -->
            <td>1 Januari 2023</td>
            <!--Keterangan -->
            <td>Tahun Baru 2023</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>22 Januari 2023</td>
            <!--Keterangan -->
            <td>Tahun Baru Imlek 2574 Kongzili</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>18 Februari 2023</td>
            <!--Keterangan -->
            <td>Isra' Miraj' Nabi Muhammad SAW</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>22 Maret 2023</td>
            <!--Keterangan -->
            <td>Hari Raya Nyepi 1945</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>23 Maret 2023</td>
            <!--Keterangan -->
            <td>Cuti Bersama Hari Raya Nyepi 1945</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>7 April 2023</td>
            <!--Keterangan -->
            <td>Wafat Isa Al-Masih</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>21 April 2023</td>
            <!--Keterangan -->
            <td>Cuti Bersama Idul Fitri</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>22 - 23 April 2023</td>
            <!--Keterangan -->
            <td>Idul Fitri 1444 H</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>24 - 26 April 2023</td>
            <!--Keterangan -->
            <td>Cuti Bersama Idul Fitri</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>1 Mei 2023</td>
            <!--Keterangan -->
            <td>Hari Buruh Internasional</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>18 Mei 2023</td>
            <!--Keterangan -->
            <td>Kenaikan Isa Al Masih</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>1 Juni 2023</td>
            <!--Keterangan -->
            <td>Hari Lahir Pancasila</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>2 Juni 2023</td>
            <!--Keterangan -->
            <td>Cuti Bersama Hari Raya Waisak</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>4 Juni 2023</td>
            <!--Keterangan -->
            <td>Hari Raya Waisak</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>29 Juni 2023</td>
            <!--Keterangan -->
            <td>Hari Raya Idul Adha 1444 Hijriah</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>19 Juli 2023</td>
            <!--Keterangan -->
            <td>Tahun Baru Islam 1445 Hijriah</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>17 Agustus 2023</td>
            <!--Keterangan -->
            <td>Hari Kemerdekaan Republik Indonesia</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>28 September 2023</td>
            <!--Keterangan -->
            <td>Maulid Nabi Muhammad SAW</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>25 Desember 2023</td>
            <!--Keterangan -->
            <td>Hari Raya Natal</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>
          <tr>
            <!--Tanggal -->
            <td>26 Desember 2023</td>
            <!--Keterangan -->
            <td>Cuti Bersama Hari Raya Natal</td>
            <td>
              <a href="#editEmployeeModal" class="edit" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Edit"
                  >&#xE254;</i
                ></a
              >
              <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"
                ><i class="material-icons" data-toggle="tooltip" title="Delete"
                  >&#xE872;</i
                ></a
              >
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>

  <!-- Tambah Modal HTML -->
  <div id="addEmployeeModal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h4 class="modal-title">Tambah Data</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Tanggal</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Keterangan</label>
              <textarea class="form-control" required></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <input
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              value="Batal"
            />
            <input type="submit" class="btn btn-success" value="Tambah" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Edit Modal HTML -->
  <div id="editEmployeeModal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h4 class="modal-title">Edit</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Tanggal</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Keterangan</label>
              <textarea class="form-control" required></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <input
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              value="Batal"
            />
            <input type="submit" class="btn btn-info" value="Simpan" />
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- Delete Modal HTML -->
  <div id="deleteEmployeeModal" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h4 class="modal-title">Hapus</h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-hidden="true"
            >
              &times;
            </button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete these Records?</p>
            <p class="text-warning">
              <small>This action cannot be undone.</small>
            </p>
          </div>
          <div class="modal-footer">
            <input
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              value="Cancel"
            />
            <input type="submit" class="btn btn-danger" value="Delete" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
$(document).ready(function () {
  $("#exampleharilibur").DataTable({
    searching: true,
    paging: true,
    ordering: false,
  });
});
</script>
