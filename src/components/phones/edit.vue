<template>
  <div class="wrapper">
    <navbar></navbar>
    <div class="content">
      <main>
        <section class="search-results">
          <phone-form-edit></phone-form-edit>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
  import navbar from '@/components/common/navbar'
  import phoneFormEdit from '@/components/phones/form-edit'

  export default {
    name: 'phone-edit',
    components: {
      navbar,
      phoneFormEdit
    }
  }
</script>
