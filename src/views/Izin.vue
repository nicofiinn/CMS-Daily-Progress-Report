<template>
  <content-header title="Izin" />
  <div class="card-header">
    <h class="card-title"><b>Sakit / Izin / Cuti</b></h>
  </div>

  <div class="container">
    <div class="table-wrapper">
      <form>
        <div class="form-group row">
          <label for="inputtanggal" class="col-sm-2 col-form-label"
            >Tanggal</label
          >
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              id="inputnama"
              placeholder=""
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputnama" class="col-sm-2 col-form-label"
            >Nama Karyawan</label
          >
          <div class="col-sm-10">
            <input
              type="name"
              class="form-control"
              id="inputnama"
              placeholder=""
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputstatus" class="col-sm-2 col-form-label"
            >Status</label
          >
          <div class="col-sm-10">
            <select id="inputstatus" class="form-control">
              <option selected>Pilih Status</option>
              <option>Sakit</option>
              <option>Izin</option>
              <option>Cuti</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputnama" class="col-sm-2 col-form-label"
            >Lampiran</label
          >
          <div class="col-sm-10">
            
                <input type="url"
                readonly class="form-control-plaintext"
                id="inputnama"
                value="email@example.com">
          </div>
          
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-primary" type="button">Submit</button>
          <!-- <a class="btn btn-primary" href="" role="button">Submit</a> -->
        </div>
      </form>
    </div>
  </div>
</template>

<style>
body {
  color: #000000;
  background: #f5f5f5;
  font-family: "Varela Round", sans-serif;
  font-size: 13px;
}
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  margin: 30px 0;
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
</style>
