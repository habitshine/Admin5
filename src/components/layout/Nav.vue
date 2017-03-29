<template>
    <nav v-once class="layout-nav navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand">Admin5</a>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="envelope">
                        <span class="label label-default"><i class="fa fa-envelope" aria-hidden="true"></i> 0 </span>
                    </li>
                    <li class="avator"><img src="../../assets/avator.jpeg"></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'nav'
}
</script>
<style scoped lang=scss>
.navbar {
    border-radius: 0;
    position: relative;
    z-index: 1958;
    background: #fff;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, .2);
    margin: 0;
    padding: 0;
    .envelope {
        margin: 15px;
    }
    .avator {
        margin: 10px;
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 4px;
        img {
            display: block;
            width: 100%;
        }
    }
}
</style>
