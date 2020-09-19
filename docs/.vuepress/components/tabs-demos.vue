<template>
    <div>
        <div class="box">
            <e-tabs selected="sports">
                <e-tabs-head>
                    <e-tabs-item name="sports"><e-icon name="zan"></e-icon>体育</e-tabs-item>
                    <e-tabs-item name="finance" disabled>财经</e-tabs-item>
                    <e-tabs-item name="lean">学习</e-tabs-item>
                    <e-tabs-item name="military">军事</e-tabs-item>
                </e-tabs-head>
                <e-tabs-body>
                    <e-tabs-pane name="sports">体育新闻...</e-tabs-pane>
                    <e-tabs-pane name="finance">财经新闻...</e-tabs-pane>
                    <e-tabs-pane name="lean">学习</e-tabs-pane>
                    <e-tabs-pane name="military">军事新闻...</e-tabs-pane>
                </e-tabs-body>
            </e-tabs>
        </div>
    </div>
</template>

<script lang='ts'>
import Tabs from '../../../src/tabs'
import TabsItem from '../../../src/tabs-item'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsPane from '../../../src/tabs-pane'
import Icon from '../../../src/Icon'

export default {
  components:{
    'e-tabs':Tabs,
    'e-tabs-head':TabsHead,
    'e-tabs-body':TabsBody,
    'e-tabs-item':TabsItem,
    'e-tabs-pane':TabsPane,
    'e-icon':Icon,
  }
}
</script>

<style lang="scss" scoped>

</style>