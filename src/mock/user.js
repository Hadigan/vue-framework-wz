
const userMap = {
    userList: [
        {
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
  }

export default {
    getUserList: config => {
        console.log(config);
        return userMap.userList;
    },

  };