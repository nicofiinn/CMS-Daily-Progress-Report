<template>
  <aside class="main-sidebar sidebar-dark-success">
    <a href="" class="brand-link">
      <img
        src="/adminlte/dist/img/logonetwerk.png"
        alt="Netwerk Logo"
        class="center"
      />
      <!-- <span class="brand-text font-weight-light">The - Netwerk</span> -->
    </a>

    <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="/adminlte/dist/img/user2-160x160.jpg"
            class="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">Nico Tambunan</a>
        </div>
      </div>

      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input
            class="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <!-- Dashboard -->

          <li class="nav-item">
            <a href="/dashboard" class="nav-link">
              <i class="nav-icon fas fa-dice-d6"></i>
              <p> Dashboard</p>
            </a>
          </li>

          <!-- KARYAWAN -->

          <li class="nav-item">
            <a href="/karyawan" class="nav-link">
              <i class="nav-icon fas fa-users"></i>
              <p> Karyawan</p>
            </a>
          </li>

          <!-- Laporan -->

          <li class="nav-item">
            <a href="/laporan" class="nav-link">
              <i class="nav-icon far fa-file-alt"></i>
              <p>
                Laporan
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/datadpr" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data DPR</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/dprbermasalah" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data DPR Bermasalah</p>
                </a>
              </li>
            </ul>
          </li>

          <!-- Settings -->

          <li class="nav-item">
            <a href="/settings" class="nav-link">
              <i class="nav-icon fas fa-cog"></i>
              <p>
                Settings
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/harilibur" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Hari Libur</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/izin" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Sakit / Izin / Cuti</p>
                </a>
              </li>
            </ul>
          </li>

          <!-- ROLE -->

          <li class="nav-item">
            <a href="/role" class="nav-link">
              <i class="nav-icon fas fa-user-tag"></i>
              <p>
                Role
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/masterrole" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Master Role</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/settingmenu" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Setting Menu by Role</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/settingemail" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Setting Email by Role</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  components: {
    NavItem,
  },
};

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
});
// DOMContentLoaded  end
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.sidebar li .submenu {
  list-style: none;
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;
}

</style>