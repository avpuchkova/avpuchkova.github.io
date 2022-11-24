<template>
  <v-row class="d-felx justify-center py-5" v-if="paginationLength > 1">
    <template>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="paginationLength"
          circle
          :total-visible="visible"
          @input="inputPage"
          :color="color"
        ></v-pagination>
      </div>
    </template>
  </v-row>
</template>

<script>
  export default {
    name: 'Pagination',
    props: {
      pageSize: {
        type: Number,
        default: 0
      },
      length: {
        type: Number,
        default: 0
      },
      color: {
        type: String,
        default: 'black'
      },
      visible: {
        type: Number,
        default: 7
      }
    },
    data() {
      return {
        page: 1
      }
    },
    watch: {
      pageSize() {
        this.page = 1
        this.inputPage()
        console.log(
          'pageSize: ', this.pageSize, 
          'length: ', this.length, 
          'page: ', this.page, 
          'paginationLength', this.paginationLength
        )
        this.$forceUpdate()
      }
    },
    computed: {
      paginationLength() {
        return (this.pageSize == null || this.length == null) ? 0 : Math.ceil(this.length / this.pageSize)
      },
      start() {
        return this.pageSize * (this.page - 1)
      },
      end() {
        return this.start + this.pageSize
      }
    },
    methods: {
      inputPage() {
        this.$emit('callback', {start: this.start, end: this.end})
      }
    }
  }
</script>