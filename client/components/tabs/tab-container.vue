<script type="text/ecmascript-6">

  export default {
    props: {
      panes: {
        type: Array,
        required: true
      }
    },
    render() {
      const contents = this.panes.map(pane =>{
        console.log(pane)
        return pane.active ? pane.$slots.default : null
      })
      return (
        <div class='tab-content'>{contents}</div>
      )
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">


</style>
