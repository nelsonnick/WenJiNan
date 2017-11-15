<template>
  <div>
    <table id="table" border="0" width="100%">
      <tr>
        <td class="office">{{office1}}</td>
        <td id="office" rowspan="2">文件</td>
      </tr>
      <tr>
        <td class="office">{{office2}}</td>
      </tr>
      <tr>
        <td class="blank" colspan="2"> </td>
      </tr>
      <tr>
        <td id="file_number" colspan="2">{{file_number}}</td>
      </tr>
      <tr>
        <td class="blank" colspan="2"> </td>
      </tr>
      <tr>
        <td colspan="2"><hr class="line"/></td>
      </tr>
    </table>

  </div>
</template>

<script>
  export default{
    props: ['office1', 'office2', 'file_number']
  }
</script>
<style scoped>
  #table {
    margin: 0;
    padding: 0;
  }
  .office {
    color: red;
    font-family: FZXBSJW-GB1-0;
    margin: 0;
    padding: 0;
    width: 80%;
    height: 0.8rem;
    font-size: 1.5rem;
    text-align: justify;
    text-justify: distribute-all-lines;
    text-align-last: justify;
  }
  #office {
    color: red;
    font-family: FZXBSJW-GB1-0;
    width: 20%;
    height: 1.6rem;
    font-size: 3rem;
    vertical-align: middle;
    text-align: justify;
  }
  .blank {
    height: 1rem;
  }
  #file_number {
    font-family: FangSong_GB2312;
    font-size: 1rem;
    text-align: center;
    vertical-align: middle;
  }
  .line {
    height: 0.3rem;
    border: none;
    border-top: 1px solid red;
  }
</style>
