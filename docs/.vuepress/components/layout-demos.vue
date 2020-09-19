<template>
    <div>
        <br>
        <div>
            <e-layout class="layout">
                <e-header class="header">Header</e-header>
                <e-content class="content">Content</e-content>
                <e-footer class="footer">Footer</e-footer>
            </e-layout>
        </div>
        <br>
        <div>
            <e-layout class="layout">
                <e-header class="header">Header</e-header>
                <e-layout>
                    <e-sider class="sider">Sider</e-sider>
                    <e-content class="content">Content</e-content>
                </e-layout>
                <e-footer class="footer">Footer</e-footer>
            </e-layout>
        </div>
        <br>

        <div>
            <e-layout class="layout">
                <e-sider class="sider">Sider</e-sider>
                <e-layout>
                    <e-header class="header">Header</e-header>
                    <e-content class="content">Content</e-content>
                    <e-footer class="footer">Footer</e-footer>
                </e-layout>
            </e-layout>
        </div>
    </div>

</template>

<script lang='ts'>
  import Layout from '../../../src/layout';
  import Header from '../../../src/header';
  import Footer from '../../../src/footer';
  import Content from '../../../src/content';
  import Sider from '../../../src/sider';

  export default {
    components: {
      'e-layout': Layout,
      'e-footer': Footer,
      'e-header': Header,
      'e-content': Content,
      'e-sider': Sider,

    }
  };
</script>

<style lang="scss" scoped>
    .layout{
        color: #fff;
        font-weight: bold;
    }
    .header,.footer,.content,.sider{
        display: flex;
        justify-content: center;align-items: center;
    }
    .header {
        height: 66px;
        background: #7dbcea;
    }

    .footer {
        height: 66px;
        background: #7dbcea;
    }

    .content {
        height: 150px;
        background: #108ee9;
    }

    .sider {
        width: 25%;
        background: #3ba0e9;
    }
</style>