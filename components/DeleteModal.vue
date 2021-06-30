<template>
  <div
    class="modal fade delete-modal"
    id="deleteElement"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center w-100 mr-3">حذف</h5>
        </div>
        <div class="modal-body">
          <p class="w-100 text-center">هل تريد الحذف بالفعل</p>
        </div>
        <div class="modal-footer">
          <button
            class="float-left w-100 confirm-delete ml-3 mr-3"
          >
            تأكيد
          </button>
          <button
            class="text-center w-100 refuse-button"
            data-dismiss="modal"
            aria-label="Close"
          >
            تراجع
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$main-color: #fd7b38;
label {
  color: $main-color;
}
button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  left: 1rem;
  top: 0rem;
  background-color: $main-color;
  color: #fff;
  border: none;
  font-size: 15px;
}
</style>
