<template>
  <div>
    <table id="table" border="0" width="100%">
      <tr>
        <td colspan="2"><hr class="line"/></td>
      </tr>
      <tr id="detail">
        <td id="office">{{office}}</td>
        <td id="time">{{time}}</td>
      </tr>
      <tr>
        <td colspan="2"><hr class="line"/></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default{
    props: ['office', 'time']
  }
</script>
<style scoped>
  #table {
    margin: 0;
    padding: 0;
  }
  #detail {
    font-family: FangSong_GB2312;
    font-size: 1rem;
  }
  #office {
    text-align: center;
    vertical-align: middle;
  }
  #time {
    text-align: center;
    vertical-align: middle;
  }
  .line {
    height: 0.3rem;
    width: 100%;
    border: none;
    border-top: 1px solid #000;
  }
</style>
