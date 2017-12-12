import {
    Dimensions,
} from 'react-native';

/*
    以6s为比例系数
    BASE_WIN_WIDTH：宽比咧系数
    BASE_WIN_HEIGHT：高比例系数
*/
const BASE_WIN_HEIGHT = 667; 
const BASE_WIN_WIDTH = 375;

export var ScreenConfgs = {
    Screen_Width: Dimensions.get('window').width,
    Screen_Height: Dimensions.get('window').height,

    /** 根据实际屏幕尺寸转换对应的像素高度 */
    getHeight(h) {
        if (!this.height) {
            this.height = ScreenConfgs.Screen_Height;
            this.width = ScreenConfgs.Screen_Width;
        }
        return h * (this.height / BASE_WIN_HEIGHT);
    },

    /** 根据实际屏幕尺寸转换对应的像素宽度 */
    getWidth(w) {
        if (!this.width) {
            this.height = ScreenConfgs.Screen_Height;
            this.width = ScreenConfgs.Screen_Width;
        }
        return w * (this.width / BASE_WIN_WIDTH);
    },

    getFont(s){
        if (!this.width) {
            this.height = ScreenConfgs.Screen_Height;
            this.width = ScreenConfgs.Screen_Width;
        }
        return s * (this.width / BASE_WIN_WIDTH);
    }
}

