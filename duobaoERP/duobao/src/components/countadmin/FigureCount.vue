<template>
    <div class="figurecount">
    
        <div class="row">
            <div class="col-lg-12">
    
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <datepicker language="zh" :value="state.date"></datepicker>
                        <div class="btn btn-default">至</div> 
                        <datepicker language="zh"></datepicker>
                    </div>
                    <!-- /.panel-heading -->
                    <div class="panel-body">
                        <div class="table-responsive">
                            <div id="chart-panel" style="height:500px;"></div>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                    <!-- /.panel-body -->
                </div>
                <!-- /.panel -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            state: {
                date: new Date(2016, 9,  16)
            }
        }
    },
    mounted () {
        let option = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
    let myChart = echarts.init(document.getElementById('chart-panel'));
        myChart.setOption(option)


    }
}
</script>

<style>
.figurecount .panel-heading::after{
    content:"";/*里面可以为空、内容的意思*/
    visibility:hidden;/*隐藏*/
        height:0;
    display:block;
    clear:both;
    overflow:hidden;
}
.figurecount .panel-heading>.btn{
    padding: 2px 10px;
    border-radius: 0;
}
.figurecount .panel-heading>div{
    float: left;
}
</style>