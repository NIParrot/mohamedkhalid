<template>
  <div class="row">
                <nuxt-link class="btn text-right ml-auto" to="/dashboard/hospital/add">
                 اضافه مستشفي
                </nuxt-link>
    <table id="hospital_table" class="display mt-5 pa" style="width: 100%">
      <thead>
        <tr>
          <th>الاسم</th>
          <th>المدينه</th>
          <th>حذف</th>
          <th>تعديل</th>
          <th class="d-none">id</th>
        </tr>
      </thead>
    </table>
    <Delete></Delete>
  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui'
import Delete from '@/components/DeleteModal'
    $("body").on("click", ".delete_buttonaaa", function () {
  var select = {
    row: $(this).closest("tr"),
    id: $(this).closest("tr").find(".d-none span").text(),
  };

    $("body").on("click", ".refuse-button", function () {
    delete select.id;
    delete select.row;

  });

  $('#deleteElement').on('hidden.bs.modal', function () {
    delete select.id;
    delete select.row;

})
     $(".confirm-delete").click(function () {
      $nuxt.$axios
      .$post(
        "/hospital/delete",
        {id:select.id},
            ).then((res) => {
        select.row.remove();
        delete select.id;
        delete select.row;
        $("#deleteElement").modal('hide');
      });
});
});

export default {
  name: 'regular',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  components: {
    Delete,
  },
  data() {
    return {
      dataTable: null,
      externalLoaded: false,
    }
  },
  mounted() {
    console.log('table mounted')
    if (this.dataTable === null) {
      this.onScriptLoaded()
    }
  },
  methods: {
          fetch({ $axios, store }) {
    return $axios.$get("/hospital/add").then(res => {
      store.commit("hospital/updatehospitals", res);
    });
  },
        updateSelectedhospital(hospital) {
      this.$store.commit("updateSelectedhospital", hospital);
    },
    onScriptLoaded() {
      this.externalLoaded = true
      console.log('script loaded')
      this.dataTable = $('#hospital_table').DataTable({
        language: {
          lengthMenu: 'عرض _MENU_ المدخلات',
          search: '<strong style="padding:5px">البحث</strong>',
          searchPlaceholder: 'بحث',
          paginate: {
            next: 'التالي',
            previous: 'السابق',
            first: 'الاول',
            last: 'الاخير',
          },
          decimal: '',
          emptyTable: 'لا يوجد بيانات في الجدول',
          info: 'عرض _START_ الي _END_ من _TOTAL_ المدخلات',
          infoEmpty: 'عرض 0 الي 0 من 0 المدخلات',
          infoFiltered: '(تصفيه من _MAX_ total المدخلات)',
          infopostFix: '',
          thousands: ',',
          loadingRecords: 'تحميل...',
          processing: 'المعالجه...',
          zeroRecords: 'لا يوجد بيانات مماثله',
          aria: {
            sortAscending: ': activate to sort column ascending',
            sortDescending: ': activate to sort column descending',
          },
        },
        columnDefs: [
          {
            targets: [-1],
            className: 'd-none',
          },
        ],
				ajax: $nuxt.$axios.defaults.baseURL + '/hospital/index',
        columns: [
          {
            data: 'name',
            render: function (data, type, row, meta) {
            return `
              <div data-link="/Dashboard/hospital/${ row.id }" style="cursor: pointer; color:#0d6efd; width:100% " class="btn btn-primary" onclick="$nuxt.$router.push(this.getAttribute('data-link'))">
                  ${ data}
            </div>`
            },
          },
          { data: 'town.name' },
          {
            data: null,
            className: 'center',
            defaultContent: `<button style="
              padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
  display: inline-block;

  " class="delete_button" data-toggle="modal" data-target="#deleteElement">
      حذف
    </button>
    `,
          },
          {
            data: 'id',
            render: function (data, type, row, meta) {
              return `
              <div data-link="/Dashboard/hospital/edit/${data}/"
              style="
                  padding: 0.5rem 1rem;
                  border-radius: 5px;
                  left: 1rem;
                  top: 0rem;
                  cursor: pointer;
                  background-color: #fd7b38;
                  color: #fff;
                  border: none;
                  font-size: 15px;
                  display: inline-block;
                "class="edit_button"
              onclick="$nuxt.$router.push(this.getAttribute('data-link'))">
                  تعديل
            </div>`
            },
          },
          {
            data: 'id',
            render: function (data, type, row, meta) {
              return type === 'display'
                ? '<span style="display: none;">' + data + '</span>'
                : data
            },
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss" scoped>
$main-color: #fd7b38;
$main-typo: #242424;
$main-background: rgba(253, 123, 56, 0.2);
// $main-shadow: 2px 1px 4px rgba(0, 0, 0, 0.1);
$main-shadow: 0px 6px 14px -6px rgba(24, 39, 75, 0.12),
  0px 10px 32px -4px rgba(24, 39, 75, 0.1);

.table {
  margin: 1rem 0;
}

input {
  background-color: #f8f8f8 !important;
  border: none !important;
  color: $main-typo;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: #fd7b38;
  color: #fff;
  border: none;
  font-size: 15px;
}
.ok-button {
  background-color: #27ae60;
}
.refuse-button,
.delete_button {
  background-color: #eb5757 !important;
}
.show-button {
  background-color: #0dcaf0;
}
.edit-button,
.edit_button {
  background-color: #3341ffd6 !important;
}

.table-transparent {
  background-color: transparent !important;
}
.edit {
  cursor: pointer;
}
</style>

