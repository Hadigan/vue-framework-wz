<template>
<div>
    <!-- <Divider /> -->
    <!-- <Alert type="warning" show-icon>A warning prompt</Alert> -->
    <Divider>查询用户</Divider>
    <Input search v-model="searchUserId"  @on-search="searchUser" enter-button="Search" placeholder="输入8位用户Id查询" autoComplete="on" maxlength=8 />
    <Table v-if="showSingleUser" border stripe :columns="columns1" :data="userData"></Table>
    <Divider>所有用户</Divider>
    <Table border stripe :columns="columns1" :data="tableData"></Table>
    <Page :total="count" :current="currentPage" :page-size="20" @on-change="handleCurrentChange" show-elevator show-total />
</div>
</template>

<script>
import {
    getUserList,
    getUserCounts,
    getUser,
} from '../../api/getData'
import {
    validatUserId
} from '../../utils/validate'
import user from '../../store/modules/user'

export default {
    data() {
        console.log("what the fuck");
        return {
            columns1: [{
                    title: '用户ID',
                    key: 'userId'
                },
                {
                    title: '用户名',
                    key: 'userName'
                },
                {
                    title: '注册时间',
                    key: 'createTime'
                },
                {
                    title: '金币数量',
                    key: 'money'
                },
                {
                    title: '银行存款',
                    key: 'balance'
                },
                {
                    title: '手机号码',
                    key: 'phone'
                },
            ],
            tableData: [{
                    userName: 'John Brown',
                    userId: 18,
                    address: 'New York No. 1 Lake Park',
                    createTime: '2016-10-03'
                },
                {
                    userName: 'Jim Green',
                    userId: 24,
                    address: 'London No. 1 Lake Park',
                    createTime: '2016-10-01'
                },
                {
                    userName: 'Joe Black',
                    userId: 30,
                    address: 'Sydney No. 1 Lake Park',
                    createTime: '2016-10-02'
                },
                {
                    userName: 'Jon Snow',
                    userId: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    createTime: '2016-10-04'
                }
            ],
            userData: [],
            currentRow: null,
            offset: 0,
            limit: 20,
            count: 100,
            currentPage: 1,
            searchUserId: null,
            showSingleUser: false
        }
    },
    created() {
        this.userCounts();
        this.getUsers();
    },
    methods: {
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.offset = (val - 1) * this.limit;
            this.getUsers()
        },
        getUsers() {
            getUserList(this.offset, this.limit).then(response => {
                const data = response.data;
                this.tableData = [];
                data.forEach(item => {
                    this.tableData.push(JSON.parse(JSON.stringify(item)));
                });
            }).catch(error => {
                console.log(error);
            })
        },
        userCounts() {
            getUserCounts().then(response => {
                const counts = response.data;
                this.count = counts;
            })
        },
        searchUser() {
            console.log(user.state.token);
            if (validatUserId(this.searchUserId)) {
              getUser(this.searchUserId).then(response =>{
                this.showSingleUser = true;
                this.userData = [];
                this.userData.push(response.data);
              }).catch(error => {
                console.log(error);
            })
            }
            else {
              this.$Message.warning('用户Id错误请重新输入');
            }
        }
    },
}
</script>
