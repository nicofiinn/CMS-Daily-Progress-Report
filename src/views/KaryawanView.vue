<template>
  <div class="card-header">
    <h class="card-title"><b>Karyawan</b></h>
  </div>

  <div class="container">
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-6">
            <h5><b>Data Karyawan</b></h5>
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
      <table id="examplekaryawan" class="table table-striped" style="width: 100%">
        <thead>
          <tr>
            <th style="width: 15%">Nama</th>
            <th>Alamat</th>
            <th>Divisi</th>
            <th>Telepon</th>
            <th>Email</th>
            <th>CC Email</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nico Tambunan</td>
            <!--Nama -->
            <td>Jl. Malang</td>
            <!--Alamat -->
            <td>Front End</td>
            <!--Divisi -->
            <td>08123712312</td>
            <!--Telepon -->
            <td>nico@gmail.com</td>
            <!--Email -->
            <td>@netwerk.com</td>
            <!--CC-email -->
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
            <td>Arno Purboyo</td>
            <!--Nama -->
            <td>Jl. Malang</td>
            <!--Alamat -->
            <td>Front End</td>
            <!--Divisi -->
            <td>08123712312</td>
            <!--Telepon -->
            <td>arno@gmail.com</td>
            <!--Email -->
            <td>@netwerk.com</td>
            <!--CC-email -->
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
            <td>Nabila Dwi Paramita</td>
            <!--Nama -->
            <td>Jl. Malang</td>
            <!--Alamat -->
            <td>Front End</td>
            <!--Divisi -->
            <td>08123712312</td>
            <!--Telepon -->
            <td>nico@gmail.com</td>
            <!--Email -->
            <td>@netwerk.com</td>
            <!--CC-email -->
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
              <label>Nama</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <textarea class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label>Divisi</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Telepon</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label>CC Email</label>
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
              <label>Nama</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Alamat</label>
              <textarea class="form-control" required></textarea>
            </div>
            <div class="form-group">
              <label>Divisi</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Telepon</label>
              <input type="text" class="form-control" required />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label>CC Email</label>
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
    
<!-- <script>
import axios from 'axios';
export default {
  name: 'karyawan',
  data(){
    return {
        karyawan: []
    }
  },
  mounted(){
    
    this.getKaryawan();
    // console.log('i am here')
  },
  methods: {
    getKaryawan(){

      axios.get('https://dpr.the-netwerk.com/api/user').then(res =>{
        this.karyawan = res.data.data
        $(document).ready(function () {
    $('#examplekaryawan').DataTable({
    searching: true,
    paging: true,
    ordering:  false,
    responsive: true
    });
});
        // console.log(this.karyawan)
      })
    }
  },
}


</script> -->