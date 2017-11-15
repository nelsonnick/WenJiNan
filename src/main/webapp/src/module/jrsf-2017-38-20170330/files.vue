<template>
  <div>
    <fileTitle office1="济南市人力资源和社会保障局" office2="济南市财政局" file_number="济人社发〔2017〕38号"/>
    <fileContent/>
    <fileEnd office="济南市人力资源和社会保障局办公室" time="2017年3月30日印发"/>
  </div>
</template>
<script>
  import axios from 'axios'
  import fileTitle from '../../components/FilePart/FileTitle2.vue'
  import fileEnd from '../../components/FilePart/FileEnd.vue'
  import fileContent from './file.vue'
  export default {
    name: 'files',
    components: {
      fileTitle,
      fileEnd,
      fileContent
    },
    data () {
      return {
        name: 'name is wts'
      }
    },
    created: function () {
      axios.get('http://localhost:80/l', {
        params: {
          id: this.name
        }
      })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
      goBack () {
        this.$router.push({ path: '/' })
      }
    }
  }
</script>
