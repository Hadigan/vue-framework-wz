<template>
<div>
    <Divider >体验房</Divider>
    <Form ref="roomData[0]" :model="roomData[0]" :label-width="100" :rules="roomInfoRules">
        <FormItem prop="roomIndex" label="体验">
            <InputNumber v-model="roomData[0].roomIndex" placeholder=""></InputNumber>
        </FormItem>
        <FormItem prop="roomOnOff" label="房间">
            <i-switch v-model="roomData[0].roomOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="rebotCount" label="机器人数">
            <InputNumber v-model="roomData[0].rebotCount" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="enterLimit" label="最低进入金币">
            <InputNumber v-model="roomData[0].enterLimit" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="controlOnOff" label="胜率">
            <i-switch v-model="roomData[0].controlOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="userCountOpenControl" label="用户数开启控制">
            <InputNumber v-model="roomData[0].userCountOpenControl" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="address" label="服务器地址">
            <input v-model="roomData[0].address" placeholder="" ></input>
        </FormItem>
        <FormItem>
            <Button @click="commitRoomInfo(0)" size="small" type="primary">提交</Button>
            <Button @click="updateRoomInfo(0)" size="small" style="margin-left: 8px">刷新</Button>
        </FormItem>
    </Form>
    <Divider >初级房</Divider>
    <Form ref="roomData[1]" :model="roomData[1]" :label-width="45" :rules="roomInfoRules" inline>
        <FormItem prop="roomIndex" label="初级">
            <InputNumber v-model="roomData[1].roomIndex" placeholder=""></InputNumber>
        </FormItem>
        <FormItem prop="roomOnOff" label="房间">
            <i-switch v-model="roomData[1].roomOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="rebotCount" label="机器人数">
            <InputNumber v-model="roomData[1].rebotCount" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="enterLimit" label="最低进入金币">
            <InputNumber v-model="roomData[1].enterLimit" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="controlOnOff" label="胜率">
            <i-switch v-model="roomData[1].controlOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="userCountOpenControl" label="用户数开启控制">
            <InputNumber v-model="roomData[1].userCountOpenControl" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="address" label="服务器地址">
            <input v-model="roomData[1].address" placeholder="" ></input>
        </FormItem>
        <FormItem>
            <Button @click="commitRoomInfo(1)" size="small" type="primary">提交</Button>
            <Button @click="updateRoomInfo(1)" size="small" style="margin-left: 8px">刷新</Button>
        </FormItem>
    </Form>
    <Form ref="roomData[2]" :model="roomData[2]" :label-width="45" :rules="roomInfoRules" inline>
        <FormItem prop="roomIndex" label="普通">
            <InputNumber v-model="roomData[2].roomIndex" placeholder=""></InputNumber>
        </FormItem>
        <FormItem prop="roomOnOff" label="房间">
            <i-switch v-model="roomData[2].roomOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="rebotCount" label="机器人数">
            <InputNumber v-model="roomData[2].rebotCount" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="enterLimit" label="最低进入金币">
            <InputNumber v-model="roomData[2].enterLimit" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="controlOnOff" label="胜率">
            <i-switch v-model="roomData[2].controlOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="userCountOpenControl" label="用户数开启控制">
            <InputNumber v-model="roomData[2].userCountOpenControl" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="address" label="服务器地址">
            <input v-model="roomData[2].address" placeholder="" ></input>
        </FormItem>
        <FormItem>
            <Button @click="commitRoomInfo(2)" size="small" type="primary">提交</Button>
            <Button @click="updateRoomInfo(2)" size="small" style="margin-left: 8px">刷新</Button>
        </FormItem>
    </Form>
    <Form ref="roomData[3]" :model="roomData[3]" :label-width="45" :rules="roomInfoRules" inline>
        <FormItem prop="roomIndex" label="中级">
            <InputNumber v-model="roomData[3].roomIndex" placeholder=""></InputNumber>
        </FormItem>
        <FormItem prop="roomOnOff" label="房间">
            <i-switch v-model="roomData[3].roomOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="rebotCount" label="机器人数">
            <InputNumber v-model="roomData[3].rebotCount" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="enterLimit" label="最低进入金币">
            <InputNumber v-model="roomData[3].enterLimit" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="controlOnOff" label="胜率">
            <i-switch v-model="roomData[3].controlOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="userCountOpenControl" label="用户数开启控制">
            <InputNumber v-model="roomData[3].userCountOpenControl" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="address" label="服务器地址">
            <input v-model="roomData[3].address" placeholder="" ></input>
        </FormItem>
        <FormItem>
            <Button @click="commitRoomInfo(3)" size="small" type="primary">提交</Button>
            <Button @click="updateRoomInfo(3)" size="small" style="margin-left: 8px">刷新</Button>
        </FormItem>
    </Form>
    <Form ref="roomData[4]" :model="roomData[4]" :label-width="45" :rules="roomInfoRules" inline>
        <FormItem prop="roomIndex" label="高级">
            <InputNumber v-model="roomData[4].roomIndex" placeholder=""></InputNumber>
        </FormItem>
        <FormItem prop="roomOnOff" label="房间">
            <i-switch v-model="roomData[4].roomOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="rebotCount" label="机器人数">
            <InputNumber v-model="roomData[4].rebotCount" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="enterLimit" label="最低进入金币">
            <InputNumber v-model="roomData[4].enterLimit" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="controlOnOff" label="胜率">
            <i-switch v-model="roomData[4].controlOnOff">
                <span slot="open">开</span>
                <span slot="close">关</span>
            </i-switch>
        </FormItem>
        <FormItem prop="userCountOpenControl" label="用户数开启控制">
            <InputNumber v-model="roomData[4].userCountOpenControl" placeholder=0></InputNumber>
        </FormItem>
        <FormItem prop="address" label="服务器地址">
            <input v-model="roomData[4].address" placeholder="" ></input>
        </FormItem>
        <FormItem>
            <Button @click="commitRoomInfo(4)" size="small" type="primary">提交</Button>
            <Button @click="updateRoomInfo(4)" size="small" style="margin-left: 8px">刷新</Button>
        </FormItem>
    </Form>
</div>
</template>

<script>
import {
    validateIPAddress
} from "utils/validate"
import {
    getGameRoomInfo,
    postGameRoomInfo
} from "api/gameData"
import {
    error
} from 'util';
import {
    valid
} from 'semver';
export default {
    data() {
        const validateRoomIndex = (rule, value, callback) => {
            if (value < 0 || value > 5) {
                callback(new Error('请输入正确的房间号'))
            } else {
                callback();
            }
        };
        const validateOnOff = (rule, value, callback) => {
            if (value != true && value != false) {
                callback(new Error('请不要乱搞'))
            } else {
                callback();
            }
        };
        const validateRebotCount = (rule, value, callback) => {
            if (value < 0 || value > 100000) {
                callback(new Error('请输入正确的机器人数量'))
            } else {
                callback();
            }
        };
        const validateEnterLimit = (rule, value, callback) => {
            if (value < 0 || value > 100000000000) {
                callback(new Error('请输入合适的数字'))
            } else {
                callback();
            }
        };
        const validateUserCount = (rule, value, callback) => {
            if (value < 0 || value > 100000) {
                callback(new Error('请输入正确的用户数量'))
            } else {
                callback();
            }
        };
        const validateAddress = (rule, value, callback) => {
            if (!validateIPAddress(value)) {
                callback(new Error('请输入正确服务器地址'))
            } else {
                callback();
            }
        };
        return {
            gameType: 'bcbm',
            roomData: [{
                    roomIndex: 0,
                    roomOnOff: false,
                    rebotCount: 0,
                    enterLimit: 0,
                    controlOnOff: false,
                    userCountOpenControl: 0,
                    address: '',
                },
                {
                    roomIndex: 1,
                    roomOnOff: false,
                    rebotCount: 0,
                    enterLimit: 0,
                    controlOnOff: false,
                    userCountOpenControl: 0,
                    address: '',
                },
                {
                    roomIndex: 2,
                    roomOnOff: false,
                    rebotCount: 0,
                    enterLimit: 0,
                    controlOnOff: false,
                    userCountOpenControl: 0,
                    address: '',
                },
                {
                    roomIndex: 3,
                    roomOnOff: false,
                    rebotCount: 0,
                    enterLimit: 0,
                    controlOnOff: false,
                    userCountOpenControl: 0,
                    address: '',
                },
                {
                    roomIndex: 4,
                    roomOnOff: false,
                    rebotCount: 0,
                    enterLimit: 0,
                    controlOnOff: false,
                    userCountOpenControl: 0,
                    address: '',
                },
            ],
            roomInfoRules: {
                roomIndex: {
                    required: true,
                    trigger: 'blur',
                    validator: validateRoomIndex
                },
                roomOnOff: {
                    required: true,
                    trigger: 'blur',
                    validator: validateOnOff
                },
                rebotCount: {
                    required: true,
                    trigger: 'blur',
                    validator: validateRebotCount
                },
                enterLimit: {
                    required: true,
                    trigger: 'blur',
                    validator: validateEnterLimit
                },
                controlOnOff: {
                    required: true,
                    trigger: 'blur',
                    validator: validateOnOff
                },
                userCountOpenControl: {
                    required: true,
                    trigger: 'blur',
                    validator: validateUserCount
                },
                address: {
                    required: true,
                    trigger: 'blur',
                    validator: validateAddress
                },
            }
        }
    },
    created() {
        this.updateRoomInfo(0);
        this.updateRoomInfo(1);
        this.updateRoomInfo(2);
        this.updateRoomInfo(3);
        this.updateRoomInfo(4);
    },
    methods: {
        updateRoomInfo(roomIndex) {
            getGameRoomInfo(this.gameType, roomIndex).then(response => {
                const data = response.data;
                this.roomData[roomIndex].roomIndex = roomIndex;
                this.roomData[roomIndex].roomOnOff = data.roomOnOff;
                this.roomData[roomIndex].rebotCount = data.rebotCount;
                this.roomData[roomIndex].userCountOpenControl = data.userCountOpenControl;
                this.roomData[roomIndex].controlOnOff = data.controlOnOff;
                this.roomData[roomIndex].enterLimit = data.enterLimit;
                this.roomData[roomIndex].address = data.address;
            }).catch(error => {
                console.log(error);
            })
        },
        commitRoomInfo(roomIndex) {
            this.$refs["roomData[" + roomIndex + "]"].validate(valid => {
                if (valid == true) {
                    postGameRoomInfo(this.gameType, this.roomData[roomIndex]).then(response => {
                        this.$Message.info("修改成功");
                    }).catch(error => {
                        console.log(error);
                    })
                }
            })

        }
    }

}
</script>
