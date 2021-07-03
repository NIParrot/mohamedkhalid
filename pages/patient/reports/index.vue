<template>
  <div class="row">
                <div data-link="/patient/reports/add" class="btn text-right ml-auto" onclick="$nuxt.$router.push(this.getAttribute('data-link'))">
                 اضافه تقرير
            </div>

  <table id="report_table" class="display mt-5 pa" style="width: 100%">
<thead>
        <tr>
          <th>ملف الحالة</th>
          <th>وصف الحالة</th>
          <th>تم المراجعة</th>
          <th>تقرير الطبيب</th>
          <th class="d-none">id</th>
        </tr>
      </thead>
          </table>
            <Delete></Delete>

  </div>
</template>
<script>
import { Table, TableColumn } from 'element-ui';
import Delete from "@/components/DeleteModal";

export default {
  	middleware: 'pa_authenticated',
    layout: 'patient',
  name: 'regular',
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
    components: {
      Delete
    },
  data() {
    return {
      dataTable: null,
      externalLoaded: false,

    };
  },
   mounted() {
    console.log("table mounted");
    if (this.dataTable === null) {
      this.onScriptLoaded();
    }
  },
  methods: {
    onScriptLoaded() {


      
      this.externalLoaded = true;
      console.log("script loaded");
      this.dataTable = $("#report_table").DataTable({
      language: {
        lengthMenu:     "عرض _MENU_ المدخلات",
          search: '<strong style="padding:5px">البحث</strong>',
          searchPlaceholder: "بحث",
          paginate: {
            next: "التالي",
            previous: "السابق",
            first:      "الاول",
        last:       "الاخير",
          },
          "decimal":        "",
        "emptyTable":     "لا يوجد بيانات في الجدول",
        "info":           "عرض _START_ الي _END_ من _TOTAL_ المدخلات",
        "infoEmpty":      "عرض 0 الي 0 من 0 المدخلات",
        "infoFiltered":   "(تصفيه من _MAX_ total المدخلات)",
        "infoPostFix":    "",
        "thousands":      ",",
        "loadingRecords": "تحميل...",
        "processing":     "المعالجه...",
        "zeroRecords":    "لا يوجد بيانات مماثله",
    "aria": {
        "sortAscending":  ": activate to sort column ascending",
        "sortDescending": ": activate to sort column descending"
    }
        },
        columnDefs: [
          {
            targets: [-1],
            className: "d-none",
          },
        ],
        				ajax: $nuxt.$axios.defaults.baseURL + '/reports/index?id='+sessionStorage.getItem('myid'),
        columns: [


          { data: "img"},
          { data: "description"},
          { data: "status"},
          { data: "result"},
          { data: "id"}
      ]

      });
    },
  },
};
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
.edit{
  cursor: pointer;
}




</style>

