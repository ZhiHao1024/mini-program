// components/Dialog/dialog.js
Component({
    options: {
        multipleSlots: true// 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: "标题"
        },
        content: {
            type: String,
            value: "弹窗内容"
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        confirmText: {
            type: String,
            value: "确定"
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isShow:false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        hideDialog(){
            this.setData({
                isShow:!this.data.isShow
            })
        },
        showDialog(){
            this.setData({
                isShow:!this.data.isShow
            })
        },
        _cancelEvent(){
            //触发取消回调
            this.triggerEvent("cancelEvent")
        },
        _confirmEvent(){
            //触发成功回调
            this.triggerEvent("confirmEvent");
        }
    }
})
