<template>
	<div class="row">
		<NuxtLink
			class="btn text-right ml-auto"
			to="/dashboard/governoment/add"
		>
			اضافه محافظه
		</NuxtLink>

		<table id="gov_table" class="display mt-5 pa" style="width: 100%">
			<thead>
				<tr>
					<th>الاسم</th>
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
import { Table, TableColumn } from 'element-ui';
import Delete from '@/components/DeleteModal';

export default {
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
			externalLoaded: false
		};
	},
	mounted() {
		console.log('table mounted');
		if (this.dataTable === null) {
			this.onScriptLoaded();
		}
		this.onDelete();
	},
	methods: {
		onDelete() {
			$('body').on(
				'click',
				'#gov_table tbody tr .delete_button',
				function() {
					select = {
						row: $('#gov_table')
							.DataTable()
							.row(this.parentNode),
						id: $('#gov_table')
							.DataTable()
							.row(this.parentNode)
							.data().id
					};
					$('body').on('click', '.refuse-button', function() {
						select = null;
					});
					$('#deleteElement').on('hidden.bs.modal', function() {
						select = null;
					});
					$('.confirm-delete').click(function() {
						$nuxt.$store
							.dispatch('gov/deleteGov', { id: select.id })
							.then(gov => {
								select.row.remove().draw();
								$('#deleteElement').modal('hide');
								select = null;
							});
					});
				}
			);
		},

		fetch({ $axios, store }) {
			return $axios.$get('/states/add').then(res => {
				store.commit('gov/updategovs', res);
			});
		},
		updateSelectedgov(gov) {
			this.$store.commit('updateSelectedgov', gov);
		},
		onScriptLoaded() {
			this.externalLoaded = true;
			console.log('script loaded');
			this.dataTable = $('#gov_table').DataTable({
				dom: ` B 
        <'row' 
            <'col-md-3'>
            <'col-md-3' l>
            <'col-md-6' f>
        > rtip`,
				lengthMenu: [
					[5, 10, 15, -1],
					[5, 10, 15, 'All']
				],
				buttons: [
					{
						extend: 'print',
						exportOptions: {
							columns: ':visible',
							autoPrint: true,
							orientation: 'landscape'
						}
					},
					{
						extend: 'csv',
						exportOptions: {
							columns: ':visible',
							autoPrint: true,
							orientation: 'landscape'
						}
					},
					{
						extend: 'excel',
						exportOptions: {
							columns: ':visible',
							autoPrint: true,
							orientation: 'landscape'
						}
					},
					{
						extend: 'copy',
						exportOptions: {
							columns: ':visible',
							autoPrint: true,
							orientation: 'landscape'
						}
					},
					'colvis'
				],
				language: {
					buttons: {
						print: 'طباعة',
						copy: 'نسخ',
						pdf: 'PDF',
						excel: 'xlsx',
						csv: 'csv',
						colvis: 'اظهار/اخفاء',
						copyTitle: 'تم نسخ معلومات الجدول',
						copyKeys:
							'Appuyez sur <i>ctrl</i> ou <i>\u2318</i> + <i>C</i> pour copier les données du tableau à votre presse-papiers. <br><br>Pour annuler, cliquez sur ce message ou appuyez sur Echap.',
						copySuccess: {
							_: '%d سطر تم نسخه',
							1: '1 سطر تم نسخه'
						}
					},
					lengthMenu: 'عرض _MENU_ المدخلات',
					search: '<strong style="padding:5px">البحث</strong>',
					searchPlaceholder: 'بحث',
					paginate: {
						next: 'التالي',
						previous: 'السابق',
						first: 'الاول',
						last: 'الاخير'
					},
					decimal: '',
					emptyTable: 'لا يوجد بيانات في الجدول',
					info: 'عرض _START_ الي _END_ من _TOTAL_ المدخلات',
					infoEmpty: 'عرض 0 الي 0 من 0 المدخلات',
					infoFiltered: '(تصفيه من _MAX_ total المدخلات)',
					infoPostFix: '',
					thousands: ',',
					loadingRecords: 'تحميل...',
					processing: 'المعالجه...',
					zeroRecords: 'لا يوجد بيانات مماثله',
					aria: {
						sortAscending: ': activate to sort column ascending',
						sortDescending: ': activate to sort column descending'
					}
				},
				columnDefs: [
					{
						targets: [-1],
						className: 'd-none'
					}
				],
				ajax: $nuxt.$axios.defaults.baseURL + '/states/index',
				columns: [
					{
						data: 'name',
						render: function(data, type, row, meta) {
							return `
              <div
              data-link="/Dashboard/governoment/${row.id}"
              style="cursor: pointer; color:#0d6efd; width:100%"
              class="btn btn-primary"
              onclick="
              $nuxt.$store.commit('gov/updateSelectedgov', this.row);
              $nuxt.$router.push(this.getAttribute('data-link'));
              ">
                  ${data}
            </div>`;
						}
					},
					{
						data: null,
						className: '',
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
    `
					},

					{
						data: 'id',
						className: 'gov_name',
						render: function(data, type, row, meta) {
							return `
                          
              <div data-link="/Dashboard/governoment/edit/${data}/"
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
              onclick="
              $nuxt.$store.commit('gov/updateSelectedgov', this.row);
              $nuxt.$router.push(this.getAttribute('data-link'))
              ">
                  تعديل
            </div>`;
						}
					},

					{
						data: 'id',
						render: function(data, type, row, meta) {
							return type === 'display'
								? '<span style="display: none;">' +
										data +
										'</span>'
								: data;
						}
					}
				]
			});
		}
	}
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
.edit {
	cursor: pointer;
}
</style>
