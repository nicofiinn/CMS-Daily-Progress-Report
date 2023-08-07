<template>
    <div class="card-header">
      <h class="card-title"><b>Setting Email by Role</b></h>
    </div>
  
    <div class="container">
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <h5><b>Setting Email by Role</b></h5>
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
        <table id="exampleemail" class="table table-striped" style="width: 100%">
          <thead>
            <tr>
              <th>Email Karyawan</th>
              <th>Role</th>
              <th>Status Role</th>
              <th>On / Off</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <!--Email Karyawan -->
            <td>test@gmail.com</td>
            <!--Role -->
            <td>Admin</td>            
            <!--Status Role -->
            <td>Dashboard</td>
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
            <!--Email Karyawan -->
            <td>test123@gmail.com</td>
            <!--Role -->
            <td>Admin</td>            
            <!--Status Role -->
            <td>Dashboard</td>
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
            <!--Email Karyawan -->
            <td>test345@gmail.com</td>
            <!--Role -->
            <td>Superadmin</td>            
            <!--Status Role -->
            <td>Dashboard</td>
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
            <!--Email Karyawan -->
            <td>test8677@gmail.com</td>
            <!--Role -->
            <td>Admin</td>            
            <!--Status Role -->
            <td>Dashboard</td>
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
            <!--Email Karyawan -->
            <td>test784321@gmail.com</td>
            <!--Role -->
            <td>Admin</td>            
            <!--Status Role -->
            <td>Dashboard</td>
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
            <!--Email Karyawan -->
            <td>test52441@gmail.com</td>
            <!--Role -->
            <td>Admin</td>            
            <!--Status Role -->
            <td>Dashboard</td>
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
                <label>Email Karyawan</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Role</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Status Role</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>On / Off</label>
                <input type="text" class="form-control" required />
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
                <label>Email Karyawan</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Role</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>Status Role</label>
                <input type="text" class="form-control" required />
              </div>
              <div class="form-group">
                <label>On / Off</label>
                <input type="text" class="form-control" required />
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
    $('#exampleemail').DataTable( {
        dom: 'Bfrtip',
        buttons: [
            'excel', 'pdf'
        ]
    } );
} );
</script>
  