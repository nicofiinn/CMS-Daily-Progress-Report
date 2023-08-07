<template>
  <div class="card-header">
    <h class="card-title"><b>Setting Menu by Role</b></h>
  </div>

  <div class="container">
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6">
            <h5><b>Setting Menu by Role</b></h5>
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
      <table id="examplemenu" class="table table-striped" style="width: 100%">
        <thead>
          <tr>
            <th>Kode</th>
            <th>Kode Menu</th>
            <th>On / Off</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <!--Kode -->
          <td>1</td>
          <!--Kode Menu -->
          <td>Admin</td>
          <!--On / Off -->
          <td>On</td>
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
          <!--Kode -->
          <td>2</td>
          <!--Kode Menu -->
          <td>Superadmin</td>
          <!--On / Off -->
          <td>Off</td>
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
          <!--Kode -->
          <td>3</td>
          <!--Kode Menu -->
          <td>Member</td>
          <!--On / Off -->
          <td>On</td>
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
          <!--Kode -->
          <td>4</td>
          <!--Kode Menu -->
          <td>Admin</td>
          <!--On / Off -->
          <td>On</td>
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
          <!--Kode -->
          <td>5</td>
          <!--Kode Menu -->
          <td>Admin</td>
          <!--On / Off -->
          <td>On</td>
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
          <!--Kode -->
          <td>6</td>
          <!--Kode Menu -->
          <td>Superadmin</td>
          <!--On / Off -->
          <td>Off</td>
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
          <!--Kode -->
          <td>7</td>
          <!--Kode Menu -->
          <td>Admin</td>
          <!--On / Off -->
          <td>Off</td>
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
          <!--Kode -->
          <td>8</td>
          <!--Kode Menu -->
          <td>Superadmin</td>
          <!--On / Off -->
          <td>On</td>
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
          <!--Kode -->
          <td>9</td>
          <!--Kode Menu -->
          <td>Superadmin</td>
          <!--On / Off -->
          <td>Off</td>
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
          <!--Kode -->
          <td>10</td>
          <!--Kode Menu -->
          <td>Superadmin</td>
          <!--On / Off -->
          <td>On</td>
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
          <!--Kode -->
          <td>11</td>
          <!--Kode Menu -->
          <td>Admin</td>
          <!--On / Off -->
          <td>On</td>
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
$(document).ready(function() {
    $('#examplemenu').DataTable( {
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
    } );
} );
</script>