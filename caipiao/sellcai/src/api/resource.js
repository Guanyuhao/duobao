import {
	API_ROOT
} from './config.js'
var apiZhihu = {
	news: '/index/banners'
}
export const NewsResource = API_ROOT.concat( apiZhihu.news )
