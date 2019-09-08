<template>
  <section class="activated-payments d-flex justify-content-start align-items-center shown" id="activatedPayments">
    <div class="activated-payments-item">
      <span class="selected-payments" id="activatedPaymentsBox" style="width: 44px;">{{ count }}</span>
      Records
    </div>
  </section>
</template>

<script>
  import appConfig from '../../main'

  export default {
    name: 'users-footer',
    data () {
      return {
        count: 0
      }
    },
    created () {
      appConfig.$on('itemsCount', itemsCount => {
        this.count = itemsCount
      })
    },
    methods: {
      addItem () {
        this.$router.push('user-add')
      }
    }
  }
</script>
